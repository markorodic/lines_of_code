import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
  MouseEvent,
  TouchEvent,
} from "react";
import {
  getGridPosition,
  gridPositionHasChanged,
  ifInputIsIdle,
  getDocumentPositionFrom,
} from "./helpers/gesture";
import { useGesture } from "../../provider/customHooks";
import { parse } from "./parse";
import { Position, Pattern } from "./parse";

export interface ContainerProperties {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type Event = MouseEvent<HTMLElement> | TouchEvent;

export const useHandleInput = (containerProperties: ContainerProperties) => {
  const { setGestureActive, setMode, setGesture } = useGesture();

  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [pattern, setPattern] = useState<Pattern>([]);
  const [timer, setTimer] = useState(null);

  const onMove = (event: Event) => {
    const documentPosition = getDocumentPositionFrom(event);
    const newPosition = getGridPosition(documentPosition, containerProperties);

    if (gridPositionHasChanged(position, newPosition)) {
      const { gesture, newPattern } = parse(position, newPosition, pattern);

      setPosition(newPosition);
      setPattern(newPattern);
      setMode(gesture.type);
      setGesture(gesture);
      setGestureActive(true);
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
    onMove,
    onMoveEnd,
  };
};

export function useCreateCanvasContext(
  containerWidth: number,
  canvasElement: React.RefObject<HTMLCanvasElement>,
): CanvasRenderingContext2D {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  useEffect(() => {
    const canvas = canvasElement.current as HTMLCanvasElement;
    canvas.width = canvas.height = containerWidth;
    setCtx(canvas.getContext("2d"));
  }, [containerWidth, canvasElement]);
  return ctx as CanvasRenderingContext2D;
}

export function useContainerProperties(element: React.RefObject<HTMLElement>) {
  const [containerProperties, setContainerProperties] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  useEffect(() => {
    if (element.current) {
      const { x, y, width, height } = element.current.getBoundingClientRect();
      setContainerProperties({
        x,
        y,
        width,
        height,
      });
    }
  }, [element]);
  return containerProperties;
}

export const useAnimationFrame = (callback: () => void) => {
  const callbackRef = useRef<any>(callback);
  const frameRef = useRef<any>(null);

  const loop = useCallback(() => {
    frameRef.current = requestAnimationFrame(loop);
    callbackRef.current();
  }, [callbackRef]);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useLayoutEffect(() => {
    frameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameRef.current);
  }, [loop]);
};
