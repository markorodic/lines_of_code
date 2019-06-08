import React from "react";
import {
  getGridPosition,
  gridPositionHasChanged,
  positionItem,
  ifInputIsIdle
} from "./GestureInputHelpers";
import { useContainerProperties } from "../../customHooks";
import GestureView from "../gestureView/GestureView";
import {
  useInterfaceState,
  useInterfaceDispatch
} from "../../Interface.customHooks";

export default function GestureInput({ count, updateGestureState }) {
  const GestureInputElement = React.useRef();
  const [position, setPosition] = React.useState({});
  const [expiringPositions, setExpiringPositions] = React.useState([]);
  const [pattern, setPattern] = React.useState([]);
  const [timer, setTimer] = React.useState(null);
  const containerProperties = useContainerProperties(GestureInputElement);
  const { userActive, gestureActive, mode } = useInterfaceState();
  const {
    setUserActive,
    setUserInactive,
    setGestureActive,
    setGestureInactive,
    setMode
  } = useInterfaceDispatch();

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
    if (mode === "Operator" && mode !== "Insert") {
      // ifInputIsIdle(timer, setTimer, () => {
      //   setMode("Motion");
      // });
    }
  };

  const onClick = event => {
    event.preventDefault();
    if (userActive) {
      setUserInactive();
      ifInputIsIdle(timer, setTimer, () => {
        // if (gesture.type !== "insert") {
        //   setMode("Motion");
        // }
      });
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
      className="gesture-pad"
      data-testid="gesture-pad"
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
