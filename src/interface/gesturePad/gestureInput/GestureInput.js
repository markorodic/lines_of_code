import React from "react";
import {
  getGridPosition,
  mouseGridPositionHasChanged,
  positionItem,
  whenGestureIsInactive,
  ifInputIsIdle
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

const initialState = {
  position: {},
  expiringPositions: [],
  lastInputTime: null,
  pattern: []
};

export default function GestureInput(props) {
  const [state, dispatch] = React.useReducer(GestureInputReducer, initialState);
  const GestureInputElement = React.useRef();
  const [timer, setTimer] = React.useState(null);
  const containerProperties = useContainerProperties(GestureInputElement);

  React.useEffect(() => {
    const { updatePatternState, gestureActive } = props;
    const { expiringPositions, pattern } = state;

    whenGestureIsInactive(gestureActive, expiringPositions, () => {
      clearExpiringPositions();
      updatePatternState(pattern);
    });
  });

  const onGesture = event => {
    event.preventDefault();
    const { position } = state;
    const { count, setUserActive, setgestureActive, gestureActive } = props;

    const newPosition = getGridPosition(event, containerProperties);

    setUserActive(true);
    if (!gestureActive) {
      setgestureActive(true);
    }

    if (mouseGridPositionHasChanged(position, newPosition)) {
      addToExpiring(positionItem(position, count));
      saveNewPosition(newPosition);
      addPositionToPattern(newPosition);
    }

    ifInputIsIdle(timer, setTimer, () => {
      setgestureActive(false);
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
        gesture={props.gesture}
      />
    </section>
  );
}
