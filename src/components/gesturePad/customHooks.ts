import { useState, useEffect, MouseEvent, TouchEvent } from "react";
import {
  getGridPosition,
  gridPositionHasChanged,
  ifInputIsIdle,
} from "./helpers/gesture";
import { useGestureDispatch } from "../../provider/customHooks";
import { MODE } from "./CONSTANTS";
import { parse } from "./parse";
import { Position, Pattern } from "./parse";

export interface ContainerProperties {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const useHandleInput = (containerProperties: ContainerProperties) => {
  // TODO: Remove mode state and just use gesture type instead
  const { setGestureActive, setMode, setGesture } = useGestureDispatch();

  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [pattern, setPattern] = useState<Pattern>([]);
  const [timer, setTimer] = useState(null);

  type Event = MouseEvent<HTMLElement> | TouchEvent<HTMLElement>;

  const onMove = (event: Event) => {
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

export function useCreateCanvasContext(
  containerWidth: number,
  canvasElement: any,
) {
  const [ctx, setCtx] = useState(null);
  useEffect(() => {
    const canvas = canvasElement.current;
    canvas.width = canvas.height = containerWidth;
    setCtx(canvas.getContext("2d"));
  }, [containerWidth, canvasElement]);

  return ctx;
}

export function useContainerProperties(element: any) {
  const [containerProperties, setContainerProperties] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const { x, y, width, height } = element.current.getBoundingClientRect();
    setContainerProperties({
      x,
      y,
      width,
      height,
    });
  }, [element]);
  return containerProperties;
}
