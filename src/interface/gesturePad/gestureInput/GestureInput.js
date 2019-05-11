import React from "react";
import {
  getGridPosition,
  mouseGridPositionHasChanged,
  positionItem,
  whenGestureIsInactive
} from "./GestureInputHelpers";
import { useContainerProperties } from "./GestureInput.customHooks";
import GestureInputReducer from "./GestureInput.reducer";
import {
  ADD_TO_EXPIRED,
  SAVE_NEW_POSITION,
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
    whenGestureIsInactive(props.gestureActive, state.expiringPositions, () => {
      clearExpiringPositions();
      props.updatePatternState(state.pattern);
      clearPattern(state.position);
    });
  });

  const onGesture = event => {
    event.preventDefault();
    props.setUserActive(true);
    const { position } = state;
    const newPosition = getGridPosition(event, containerProperties);
    if (!props.gestureActive) {
      props.setgestureActive(true);
    }
    if (mouseGridPositionHasChanged(position, newPosition)) {
      addToExpiring(positionItem(position, props.count));
      saveNewPosition(newPosition);
      addPositionToPattern(newPosition);
    }
    ifInputIsIdle(timer, setTimer, () => {
      props.setgestureActive(false);
    });
  };

  const onGestureEnd = event => {
    event.preventDefault();
    props.setUserActive(false);
  };

  const addToExpiring = expiringPositions =>
    dispatch({ type: ADD_TO_EXPIRED, expiringPositions });
  const saveNewPosition = position =>
    dispatch({ type: SAVE_NEW_POSITION, position });
  const clearExpiringPositions = expiredPosition =>
    dispatch({ type: CLEAR_EXPIRED_POSITIONS, expiredPosition });
  const addPositionToPattern = position =>
    dispatch({ type: ADD_POSITION_TO_PATTERN, position });
  const clearPattern = position => dispatch({ type: CLEAR_PATTERN, position });

  return (
    <section
      ref={GestureInputElement}
      onMouseMove={onGesture}
      onMouseLeave={onGestureEnd}
      onTouchMove={onGesture}
      onTouchEnd={onGestureEnd}
      className="gesture-pad"
      data-testid="gesture-pad"
    >
      <GestureView
        position={state.position}
        expiringPositions={state.expiringPositions}
        count={props.count}
        containerWidth={containerProperties.width}
        gestureActive={props.gestureActive}
      />
    </section>
  );
}
