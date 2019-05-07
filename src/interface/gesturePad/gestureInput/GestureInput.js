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
  SAVE_NEW_POSITION
} from "./GestureInput.actions";
import GestureView from "../gestureView/GestureView";

const initialState = {
  position: {},
  expiredPositions: [],
  count: 0
};

export default function GestureInput(props) {
  const [state, dispatch] = React.useReducer(GestureInputReducer, initialState);
  const GestureInputElement = React.useRef();
  const containerProperties = useContainerProperties(
    GestureInputElement,
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
      ref={GestureInputElement}
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
