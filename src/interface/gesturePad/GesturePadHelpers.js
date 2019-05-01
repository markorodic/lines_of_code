import { NUMBER_OF_BOXES } from "./CONSTANTS";

export function getElementPosition(element) {
  return element.current.getBoundingClientRect();
}

export function pointerPosition(
  positionX,
  positionY,
  parentElementX,
  parentElementY
) {
  const x = positionX - parentElementX;
  const y = positionY - parentElementY;

  return { x, y };
}

export function pointerGridPosition(
  mousePosition,
  elementWidth,
  elementHeight
) {
  const boxWidth = elementWidth / NUMBER_OF_BOXES.X;
  const boxHeight = elementHeight / NUMBER_OF_BOXES.Y;
  const x = Math.floor(mousePosition.x / boxWidth);
  const y = Math.floor(mousePosition.y / boxHeight);

  return { x, y };
}
