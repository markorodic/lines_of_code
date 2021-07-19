import React, { useEffect } from "react";
import _ from "lodash";
import styles from "./GestureInput.module.css";
import {
  getGridPosition,
  gridPositionHasChanged,
  ifInputIsIdle,
  gestureComboMatched,
  trimPattern,
  getNewPattern,
} from "./helpers/gesture";
import { useContainerProperties } from "../../customHooks";
import GestureView from "./gestureView";
import {
  useInterfaceGestureState,
  useInterfaceGestureDispatch,
} from "../../provider/customHooks";

const GesturePad = () => {
  const [position, setPosition] = React.useState({});
  const [pattern, setPattern] = React.useState([]);
  const [matchedGesture, setMatchedGesture] = React.useState([]);
  const [timer, setTimer] = React.useState(null);
  const { gestureActive, mode } = useInterfaceGestureState();
  const { setGestureActive, setMode, setGesture } =
    useInterfaceGestureDispatch();
  const inputElement = React.useRef();
  const containerProperties = useContainerProperties(inputElement);

  const onMove = (event) => {
    const newPosition = getGridPosition(event, containerProperties);

    if (gridPositionHasChanged(position, newPosition)) {
      const newPattern = getNewPattern(position, newPosition, pattern);
      const gesture = gestureComboMatched(newPattern, mode);

      if (gesture) {
        setMode(gesture.type);
        setGesture({ ...gesture, pattern: trimPattern(newPattern, gesture) });
        setMatchedGesture({
          ...gesture,
          pattern: trimPattern(newPattern, gesture),
        });
      }

      setPattern(newPattern);
      setPosition(newPosition);
    }

    if (!gestureActive) setGestureActive(true);

    ifInputIsIdle(timer, setTimer, () => {
      setMode("Motion");
      setGestureActive(false);
      setPattern([]);
    });
  };

  const onMoveEnd = (event) => {
    setPattern([]);
    setMode("Inactive");
  };

  return (
    <section
      ref={inputElement}
      onMouseMove={onMove}
      onMouseLeave={onMoveEnd}
      onTouchMove={onMove}
      onTouchEnd={onMoveEnd}
      className={styles["gesture-input"]}
    >
      <GestureView
        position={position}
        isOnPad={mode !== "Inactive"}
        containerWidth={containerProperties.width}
        matchedGesture={matchedGesture}
      />
    </section>
  );
};

export default GesturePad;
