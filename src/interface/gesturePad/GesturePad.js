import React from "react";
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

function GesturePad(props) {
  const [state, dispatch] = React.useReducer(GesturePadReducer, initialState);
  const gesturePadElement = React.useRef();
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
    <section
      ref={gesturePadElement}
      onMouseMove={savePosition}
      onTouchMove={savePosition}
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

export default GesturePad;
