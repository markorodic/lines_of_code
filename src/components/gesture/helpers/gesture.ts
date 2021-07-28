import { isEqual } from "lodash";
import { Event, ContainerProperties } from "../types";
import { Position } from "../../../provider/types";

const GESTURE_IDLE_TIME = 200;
export const NUMBER_OF_BOXES = {
  X: 9,
  Y: 9,
};

export function gridPositionHasChanged(
  currentPosition: Position,
  newPosition: Position,
) {
  return !isEqual(currentPosition, newPosition) && currentPosition;
}

export function getGridPosition(
  documentPosition: Position,
  container: ContainerProperties,
) {
  const userPosition = getUserPosition(
    documentPosition,
    container.x,
    container.y,
  );
  const boxWidth = container.width / NUMBER_OF_BOXES.X;
  const boxHeight = container.height / NUMBER_OF_BOXES.Y;

  return gridPosition(userPosition, boxWidth, boxHeight);
}

// need to use a type guard or generic here
export const getDocumentPositionFrom = (event: Event) => {
  let position;
  // TODO: Fix the type guards here
  if (isMouseEvent(event)) {
    position = getPositionFromMouseEvent(event);
  }
  if (isTouchEvent(event)) {
    position = getPositionFromTouchEvent(event);
  }
  return position as Position;
};

const isMouseEvent = (event: any): event is MouseEvent =>
  event.type === "mousemove";

const isTouchEvent = (event: any): event is TouchEvent =>
  event.type === "touchmove";

const getPositionFromMouseEvent = (event: MouseEvent) => ({
  x: event.clientX,
  y: event.clientY,
});

const getPositionFromTouchEvent = (event: TouchEvent) => ({
  x: event.changedTouches[0].clientX,
  y: event.changedTouches[0].clientY,
});

export function getUserPosition(
  documentPosition: Position,
  containerX: number,
  containerY: number,
) {
  const x = documentPosition.x - containerX;
  const y = documentPosition.y - containerY;

  return { x, y };
}

export function gridPosition(
  userPosition: Position,
  boxWidth: number,
  boxHeight: number,
) {
  const x = Math.floor(userPosition.x / boxWidth) + 1;
  const y = Math.floor(userPosition.y / boxHeight) + 1;

  return { x, y };
}

export function ifInputIsIdle(
  timer: ReturnType<typeof setTimeout> | null,
  setTimer: (timer: any) => void,
  dispatchCallBack: () => void,
) {
  if (timer) {
    clearTimeout(timer);
  }
  setTimer(
    window.setTimeout(() => {
      dispatchCallBack();
    }, GESTURE_IDLE_TIME),
  );
}
