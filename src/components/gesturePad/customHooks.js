import { useState, useEffect } from "react";

import {
  getGridPosition,
  gridPositionHasChanged,
  ifInputIsIdle,
  trimPattern,
} from "./helpers/gesture";
import { useGestureDispatch } from "../../provider/customHooks";
import { MODE } from "./CONSTANTS";
import { parse } from "./parse";

export const useHandleInput = (containerProperties) => {
  // TODO: Remove mode state and just use gesture type instead
  const { setGestureActive, setMode, setGesture } = useGestureDispatch();

  const [position, setPosition] = useState({});
  const [pattern, setPattern] = useState([]);
  const [timer, setTimer] = useState(null);

  const onMove = (event) => {
    const newPosition = getGridPosition(event, containerProperties);

    if (gridPositionHasChanged(position, newPosition)) {
      const { gesture, newPattern } = parse(position, newPosition, pattern);

      setPosition(newPosition);
      setPattern(newPattern);
      setMode(gesture.type);
      setGesture(gesture);
      setGestureActive(true);
    }

    ifInputIsIdle(timer, setTimer, () => {
      setMode(MODE.motion);
      setGestureActive(false);
      setPattern([]);
    });
  };

  const onMoveEnd = () => {
    setPattern([]);
    setMode(MODE.inactive);
  };

  return {
    position,
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
