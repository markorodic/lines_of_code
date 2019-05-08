import React from "react";
import {
  getGridPosition,
  mouseGridPositionHasChanged,
  positionItem
} from "./GestureInputHelpers";
import {
  useRequestAnimationFrameOnLoad,
  useContainerProperties
} from "./GestureInput.customHooks";
import GestureInputReducer from "./GestureInput.reducer";
import {
  INCREMENT_COUNT,
  ADD_TO_EXPIRED,
  SAVE_NEW_POSITION,
  GESTURE_IN_PROGRESS,
  GESTURE_NOT_IN_PROGRESS,
  UPDATE_INPUT_TIME
} from "./GestureInput.actions";
import GestureView from "../gestureView/GestureView";

const initialState = {
  position: {},
  expiredPositions: [],
  lastInputTime: null,
  gestureActive: false,
  count: 0
};

export default function GestureInput(props) {
  const [state, dispatch] = React.useReducer(GestureInputReducer, initialState);
  const GestureInputElement = React.useRef();
  const [timer, setTimer] = React.useState(null);
  const containerProperties = useContainerProperties(
    GestureInputElement,
    dispatch
  );

  const renderView = () => {
    incrementCount();
    window.requestAnimationFrame(renderView);
  };

  useRequestAnimationFrameOnLoad(renderView, state);

  const onGesture = event => {
    event.preventDefault();
    const { position, count, gestureActive } = state;
    const newPosition = getGridPosition(event, containerProperties);
    if (!gestureActive) {
      gestureInProgress();
    }
    updateInputTime(count);
    if (mouseGridPositionHasChanged(position, newPosition)) {
      addToExpired(positionItem(position, count));
      saveNewPosition(newPosition);
    }

    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        gestureNotInProgress();
      }, 900)
    );
  };

  const incrementCount = () => dispatch({ type: INCREMENT_COUNT });
  const addToExpired = expiredPositions =>
    dispatch({ type: ADD_TO_EXPIRED, expiredPositions });
  const saveNewPosition = position =>
    dispatch({ type: SAVE_NEW_POSITION, position });
  const gestureInProgress = () => dispatch({ type: GESTURE_IN_PROGRESS });
  const gestureNotInProgress = () =>
    dispatch({ type: GESTURE_NOT_IN_PROGRESS });
  const updateInputTime = count => dispatch({ type: UPDATE_INPUT_TIME, count });

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
        expiredPositions={state.expiredPositions}
        count={state.count}
        containerWidth={containerProperties.width}
      />
    </section>
  );
}
