import React from "react";
import {
  getGridPosition,
  mouseGridPositionHasChanged,
  positionItem,
  useAnimationFrame,
  whenGestureIsInactive
} from "./GestureInputHelpers";
import { useContainerProperties } from "./GestureInput.customHooks";
import GestureInputReducer from "./GestureInput.reducer";
import {
  INCREMENT_COUNT,
  ADD_TO_EXPIRED,
  SAVE_NEW_POSITION,
  GESTURE_IN_PROGRESS,
  GESTURE_NOT_IN_PROGRESS,
  CLEAR_EXPIRED_POSITIONS,
  ADD_POSITION_TO_PATTERN,
  CLEAR_PATTERN
} from "./GestureInput.actions";
import GestureView from "../gestureView/GestureView";
import { GestureIdleTimeInMs } from "../CONSTANTS";

const initialState = {
  position: {},
  expiringPositions: [],
  lastInputTime: null,
  gestureActive: false,
  count: 0,
  pattern: []
};

function ifInputIsIdle(timer, setTimer, dispatchCallBack) {
  clearTimeout(timer);
  setTimer(
    setTimeout(() => {
      dispatchCallBack();
    }, GestureIdleTimeInMs)
  );
}

export default function GestureInput(props) {
  const [state, dispatch] = React.useReducer(GestureInputReducer, initialState);
  const GestureInputElement = React.useRef();
  const [timer, setTimer] = React.useState(null);
  const containerProperties = useContainerProperties(GestureInputElement);

  React.useEffect(() => {
    whenGestureIsInactive(props.userIsActive, state.expiringPositions, () => {
      clearExpiringPositions();
      props.updatePatternState(state.pattern);
      clearPattern(state.position);
    });
  });

  const onGesture = event => {
    event.preventDefault();
    const { position, count } = state;
    const newPosition = getGridPosition(event, containerProperties);
    if (!props.userIsActive) {
      props.setUserIsActive(true);
    }
    if (mouseGridPositionHasChanged(position, newPosition)) {
      addToExpiring(positionItem(position, props.count));
      saveNewPosition(newPosition);
      addPositionToPattern(newPosition);
    }
    ifInputIsIdle(timer, setTimer, () => {
      props.setUserIsActive(false);
      gestureNotInProgress();
    });
  };

  const incrementCount = () => dispatch({ type: INCREMENT_COUNT });
  const addToExpiring = expiringPositions =>
    dispatch({ type: ADD_TO_EXPIRED, expiringPositions });
  const saveNewPosition = position =>
    dispatch({ type: SAVE_NEW_POSITION, position });
  const gestureInProgress = () => dispatch({ type: GESTURE_IN_PROGRESS });
  const gestureNotInProgress = () =>
    dispatch({ type: GESTURE_NOT_IN_PROGRESS });
  const clearExpiringPositions = expiredPosition =>
    dispatch({ type: CLEAR_EXPIRED_POSITIONS, expiredPosition });
  const addPositionToPattern = position =>
    dispatch({ type: ADD_POSITION_TO_PATTERN, position });

  const clearPattern = position => dispatch({ type: CLEAR_PATTERN, position });

  return (
    <section
      ref={GestureInputElement}
      onMouseMove={onGesture}
      onTouchMove={onGesture}
      className="gesture-pad"
      data-testid="gesture-pad"
    >
      <GestureView
        position={state.position}
        expiringPositions={state.expiringPositions}
        count={props.count}
        containerWidth={containerProperties.width}
        gestureActive={props.userIsActive}
      />
    </section>
  );
}
