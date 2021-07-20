import { useState, useEffect } from "react";

import {
  getGridPosition,
  gridPositionHasChanged,
  ifInputIsIdle,
  gestureComboMatched,
  trimPattern,
  getNewPattern,
} from "./helpers/gesture";
import {
  useGestureState,
  useGestureDispatch,
} from "../../provider/customHooks";

export const useHandleInput = (containerProperties) => {
  // TODO: Remove mode state and just use gesture type instead
  const { mode, gesture: foo } = useGestureState();
  const { setGestureActive, setMode, setGesture } = useGestureDispatch();

  const [position, setPosition] = useState({});
  const [timer, setTimer] = useState(null);
  const [matchedGesture, setMatchedGesture] = useState([]);
  const [pattern, setPattern] = useState([]);

  const onMove = (event) => {
    const newPosition = getGridPosition(event, containerProperties);

    if (gridPositionHasChanged(position, newPosition)) {
      setPosition(newPosition);

      const newPattern = getNewPattern(position, newPosition, pattern);
      const gesture = gestureComboMatched(newPattern, mode);

      if (gesture) {
        setPattern(newPattern);
        setMode(gesture.type);
        setGesture({ ...gesture, pattern: trimPattern(newPattern, gesture) });
        setMatchedGesture({
          ...gesture,
          pattern: trimPattern(newPattern, gesture),
        });
        setGestureActive(true);
      }
    }

    ifInputIsIdle(timer, setTimer, () => {
      setMode("Motion");
      setGestureActive(false);
      setPattern([]);
    });
  };

  const onMoveEnd = () => {
    setPattern([]);
    setMode("Inactive");
  };

  return {
    position,
    matchedGesture,
    onMove,
    onMoveEnd,
  };
};

export function useCreateCanvasContext(containerWidth, canvasElement) {
  const [ctx, setCtx] = useState(null);
  useEffect(() => {
    const canvas = canvasElement.current;
    canvas.width = canvas.height = containerWidth;
    setCtx(canvas.getContext("2d"));
  }, [containerWidth, canvasElement]);

  return ctx;
}
