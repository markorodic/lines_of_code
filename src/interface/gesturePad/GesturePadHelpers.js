import { NUMBER_OF_BOXES } from "./CONSTANTS";

export function getElementPosition(element) {
  return element.current.getBoundingClientRect();
}

export function getGridPosition(documentPosition, containerProperties) {
  const {
    containerX,
    containerY,
    containerWidth,
    containerHeight
  } = containerProperties;

  const userPosition = getUserPosition(
    documentPosition,
    containerX,
    containerY
  );
  const boxWidth = containerWidth / NUMBER_OF_BOXES.X;
  const boxHeight = containerHeight / NUMBER_OF_BOXES.Y;

  return gridPosition(userPosition, boxWidth, boxHeight);
}

export function getUserPosition(documentPosition, containerX, containerY) {
  const x = documentPosition.x - containerX;
  const y = documentPosition.y - containerY;

  return { x, y };
}

export function gridPosition(userPosition, boxWidth, boxHeight) {
  const x = Math.floor(userPosition.x / boxWidth);
  const y = Math.floor(userPosition.y / boxHeight);

  return { x, y };
}
