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
  ADD_POSITION_TO_PATTERN
} from "./GestureInput.actions";
import GestureView from "../gestureView/GestureView";
import { useInterface } from "./GestureInput.customHooks";
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
  const {
    count,
    userActive,
    gestureActive,
    setGestureActive,
    setGestureInactive,
    setUserActive,
    setUserInactive
  } = useInterface();

  React.useEffect(() => {
    const { updatePatternState } = props;
    const { expiringPositions, pattern } = state;

    whenGestureIsInactive(gestureActive, expiringPositions, () => {
      clearExpiringPositions();
      updatePatternState(pattern);
    });
  });

  const onGesture = event => {
    event.preventDefault();
    const { position } = state;

    if (!userActive) {
      setUserActive();
    }
    if (!gestureActive) {
      setGestureActive();
    }

    const newPosition = getGridPosition(event, containerProperties);
    if (mouseGridPositionHasChanged(position, newPosition)) {
      addToExpiring(positionItem(position, count));
      saveNewPosition(newPosition);
      addPositionToPattern(newPosition);
    }

    ifInputIsIdle(timer, setTimer, () => {
      setGestureInactive();
    });
  };

  const onGestureEnd = event => {
    event.preventDefault();
    setUserInactive();
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
        count={count}
        containerWidth={containerProperties.width}
        gestureActive={gestureActive}
        gesture={props.gesture}
      />
    </section>
  );
}
