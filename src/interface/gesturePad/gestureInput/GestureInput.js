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
import {
  useInterfaceState,
  useInterfaceDispatch
} from "../../Interface.customHooks";

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
  const { count, updateGestureState } = props;
  const { userActive, gestureActive } = useInterfaceState();
  const {
    setUserActive,
    setUserInactive,
    setGestureActive,
    setGestureInactive
  } = useInterfaceDispatch();

  React.useEffect(() => {
    const { expiringPositions, position } = state;

    whenGestureIsInactive(gestureActive, expiringPositions, () => {
      clearExpiringPositions();
      clearPattern(position);
    });
  });

  const onGesture = event => {
    event.preventDefault();
    const { position } = state;

    const newPosition = getGridPosition(event, containerProperties);
    if (mouseGridPositionHasChanged(position, newPosition)) {
      // ensure there is state.position and prevent cursor moving when reentering gesturing
      if (gestureActive) {
        updateGestureState([state.position, newPosition]);
      }
      addToExpiring(positionItem(position, count));
      saveNewPosition(newPosition);
      addPositionToPattern(newPosition);
    }

    if (!userActive) {
      setUserActive();
    }

    if (!gestureActive) {
      setGestureActive();
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
        count={count}
        containerWidth={containerProperties.width}
        gestureActive={props.gestureActive}
      />
    </section>
  );
}
