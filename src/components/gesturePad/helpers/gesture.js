import _ from "lodash";
import { NUMBER_OF_BOXES, GestureIdleTimeInMs } from "../CONSTANTS";

export function gridPositionHasChanged(currentPosition, newPosition) {
  return !_.isEqual(currentPosition, newPosition) && currentPosition;
}

export function getGridPosition(event, container) {
  const documentPosition = getDocumentPositionFrom(event);
  const userPosition = getUserPosition(
    documentPosition,
    container.x,
    container.y,
  );
  const boxWidth = container.width / NUMBER_OF_BOXES.X;
  const boxHeight = container.height / NUMBER_OF_BOXES.Y;

  return gridPosition(userPosition, boxWidth, boxHeight);
}

function getDocumentPositionFrom(event) {
  let position;
  if (event.type === "mousemove") {
    position = { x: event.clientX, y: event.clientY };
  }
  if (event.type === "touchmove") {
    position = {
      x: event.changedTouches[0].clientX,
      y: event.changedTouches[0].clientY,
    };
  }
  return position;
}

export function getUserPosition(documentPosition, containerX, containerY) {
  const x = documentPosition.x - containerX;
  const y = documentPosition.y - containerY;

  return { x, y };
}

export function gridPosition(userPosition, boxWidth, boxHeight) {
  const x = Math.floor(userPosition.x / boxWidth) + 1;
  const y = Math.floor(userPosition.y / boxHeight) + 1;

  return { x, y };
}

export function whenGestureIsInactive(
  gestureActive,
  expiringPositions,
  dispatchCallBack,
) {
  if (!gestureActive && expiringPositions.length) {
    dispatchCallBack();
  }
}

export function ifInputIsIdle(timer, setTimer, dispatchCallBack) {
  clearTimeout(timer);
  setTimer(
    setTimeout(() => {
      dispatchCallBack();
    }, GestureIdleTimeInMs),
  );
}
