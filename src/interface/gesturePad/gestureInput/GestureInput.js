import React from "react";
import {
  getGridPosition,
  mouseGridPositionHasChanged,
  positionItem,
  useAnimationFrame,
  resetExpiringPositions
} from "./GestureInputHelpers";
import { useContainerProperties } from "./GestureInput.customHooks";
import GestureInputReducer from "./GestureInput.reducer";
import {
  INCREMENT_COUNT,
  ADD_TO_EXPIRED,
  SAVE_NEW_POSITION,
  GESTURE_IN_PROGRESS,
  GESTURE_NOT_IN_PROGRESS,
  CLEAR_EXPIRED_POSITIONS
} from "./GestureInput.actions";
import GestureView from "../gestureView/GestureView";
import { GestureIdleTimeInMs } from "../CONSTANTS";

const initialState = {
  position: {},
  expiringPositions: [],
  lastInputTime: null,
  gestureActive: false,
  count: 0
};

function setGestureInactiveWhenIdle(timer, setTimer, dispatchCallBack) {
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

  useAnimationFrame(() => {
    incrementCount();
    resetExpiringPositions(state, () => clearExpiringPositions());
  });

  const onGesture = event => {
    event.preventDefault();
    const { position, count, gestureActive } = state;
    const newPosition = getGridPosition(event, containerProperties);
    if (!gestureActive) {
      gestureInProgress();
    }
    if (mouseGridPositionHasChanged(position, newPosition)) {
      addToExpiring(positionItem(position, count));
      saveNewPosition(newPosition);
    }
    setGestureInactiveWhenIdle(timer, setTimer, () => {
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
        count={state.count}
        containerWidth={containerProperties.width}
      />
    </section>
  );
}
