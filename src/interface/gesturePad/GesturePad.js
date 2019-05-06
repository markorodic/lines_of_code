import React, { useRef, useReducer } from "react";
import {
  getGridPosition,
  mouseGridPositionHasChanged,
  positionItem
} from "./GesturePadHelpers";
import {
  useRequestAnimationFrameOnLoad,
  useContainerProperties
} from "./GesturePad.customHooks";
import GestureView from "./gestureView/GestureView";
import GesturePadReducer from "./GesturePad.reducer";
import {
  INCREMENT_COUNT,
  ADD_TO_EXPIRED,
  SAVE_NEW_POSITION
} from "./GesturePad.actions";

const initialState = {
  position: {},
  expiredPositions: [],
  count: 0
};

export default function GesturePad(props) {
  const [state, dispatch] = useReducer(GesturePadReducer, initialState);
  const gesturePadElement = useRef();
  const containerProperties = useContainerProperties(
    gesturePadElement,
    dispatch
  );

  const renderView = () => {
    incrementCount();
    window.requestAnimationFrame(renderView);
  };

  useRequestAnimationFrameOnLoad(renderView);

  const savePosition = event => {
    event.preventDefault();
    const { position, count } = state;
    const newPosition = getGridPosition(event, containerProperties);

    if (mouseGridPositionHasChanged(position, newPosition)) {
      addToExpired(positionItem(position, count));
      saveNewPosition(newPosition);
    }
  };

  const incrementCount = () => dispatch({ type: INCREMENT_COUNT });
  const addToExpired = expiredPositions =>
    dispatch({ type: ADD_TO_EXPIRED, expiredPositions });
  const saveNewPosition = position =>
    dispatch({ type: SAVE_NEW_POSITION, position });

  return (
    <div
      onMouseMove={savePosition}
      onTouchMove={savePosition}
      className="gesture-pad"
      ref={gesturePadElement}
      data-testid="gesture-pad"
    >
      <GestureView
        containerWidth={containerProperties.width}
        gridPosition={state.position}
        count={state.count}
        deathQueue={state.expiredPositions}
      />
    </div>
  );
}
