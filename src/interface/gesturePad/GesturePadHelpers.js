import { NUMBER_OF_BOXES } from "./CONSTANTS";

export function getElementProperties(element) {
  return element.current.getBoundingClientRect();
}

export function getGridPosition(documentPosition, container) {
  const userPosition = getUserPosition(
    documentPosition,
    container.x,
    container.y
  );
  const boxWidth = container.width / NUMBER_OF_BOXES.X;
  const boxHeight = container.height / NUMBER_OF_BOXES.Y;

  return gridPosition(userPosition, boxWidth, boxHeight);
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
