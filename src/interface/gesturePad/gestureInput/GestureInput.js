import React from "react";
import styles from "./GestureInput.module.css";
import {
  getGridPosition,
  gridPositionHasChanged,
  positionItem,
  ifInputIsIdle
} from "./GestureInputHelpers";
import { useContainerProperties } from "../../../sharedCustomHooks";
import GestureView from "./gestureView/GestureView";
import {
  useInterfaceGestureState,
  useInterfaceGestureDispatch,
  useInterfaceCountState
} from "../../Interface.customHooks";

export default function GestureInput({ updateGestureState }) {
  const GestureInputElement = React.useRef();
  const containerProperties = useContainerProperties(GestureInputElement);

  const [position, setPosition] = React.useState({});
  const [expiringPositions, setExpiringPositions] = React.useState([]);
  const [pattern, setPattern] = React.useState([]);
  const [timer, setTimer] = React.useState(null);
  const count = useInterfaceCountState();
  const { userActive, gestureActive } = useInterfaceGestureState();
  const {
    setUserActive,
    setUserInactive,
    setGestureActive,
    setGestureInactive
  } = useInterfaceGestureDispatch();

  const onGesture = event => {
    event.preventDefault();

    const newPosition = getGridPosition(event, containerProperties);

    if (gridPositionHasChanged(position, newPosition)) {
      updateGestureState([position, newPosition]);
      setExpiringPositions([
        ...expiringPositions,
        positionItem(position, count)
      ]);
      setPosition(newPosition);
      setPattern(newPosition);
    }

    if (!userActive) {
      setUserActive();
    }

    if (!gestureActive) {
      setGestureActive();
    }

    ifInputIsIdle(timer, setTimer, () => {
      setPattern([]);
      setGestureInactive();
    });
  };

  const onGestureEnd = event => {
    event.preventDefault();
    setUserInactive();
  };

  const onClick = event => {
    event.preventDefault();
    if (userActive) {
      setUserInactive();
    } else {
      setUserActive();
    }
  };

  return (
    <section
      ref={GestureInputElement}
      onMouseMove={onGesture}
      onMouseLeave={onGestureEnd}
      onTouchMove={onGesture}
      onTouchEnd={onGestureEnd}
      onClick={onClick}
      className={styles["gesture-input"]}
    >
      <GestureView
        count={count}
        position={position}
        pattern={pattern}
        expiringPositions={expiringPositions}
        containerWidth={containerProperties.width}
      />
    </section>
  );
}
