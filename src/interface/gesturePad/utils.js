export function getRelativeMousePositionFrom(e, gesturePad) {
  return relativePosition(e.clientX, e.clientY, gesturePad.x, gesturePad.y);
}

export function getRelativeTouchPositionFrom(e, gesturePad) {
  return relativePosition(
    e.changedTouches[0].clientX,
    e.changedTouches[0].clientY,
    gesturePad.x,
    gesturePad.y
  );
}

export function relativePosition(
  positionX,
  positionY,
  parentElementX,
  parentElementY
) {
  const triggerPositionX = positionX - parentElementX;
  const triggerPositionY = positionY - parentElementY;

  return { triggerPositionX, triggerPositionY };
}

export function getElementPosition(element) {
  return element.current.getBoundingClientRect();
}
