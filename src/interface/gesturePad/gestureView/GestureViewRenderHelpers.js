export function renderInnerLine(
  canvas,
  position,
  prevDirection,
  direction,
  nextDirection,
  index,
  gestureLength,
  boxWidth
) {
  let startPoint, centerPoint, endPoint;

  centerPoint = [boxWidth / 2, boxWidth / 2];

  if (prevDirection) {
    startPoint = getBoxPointFromPreviousDirection(direction, boxWidth);
  } else {
    startPoint = centerPoint;
  }

  if (positionIsLast(index, gestureLength)) {
    endPoint = centerPoint;
  } else {
    endPoint = getBoxPointFromCurrentDirection(nextDirection, boxWidth);
  }

  canvas.beginPath();
  canvas.moveTo(
    (position.x - 1) * boxWidth + startPoint[0],
    (position.y - 1) * boxWidth + startPoint[1]
  );
  canvas.lineTo(
    (position.x - 1) * boxWidth + centerPoint[0],
    (position.y - 1) * boxWidth + centerPoint[1]
  );
  canvas.lineTo(
    (position.x - 1) * boxWidth + endPoint[0],
    (position.y - 1) * boxWidth + endPoint[1]
  );
  canvas.lineWidth = 2;
  canvas.strokeStyle = "white";
  canvas.stroke();

  if (positionIsLast(index, gestureLength)) {
    const x = (position.x - 1) * boxWidth + endPoint[0];
    const y = (position.y - 1) * boxWidth + endPoint[1];
    canvas.fillStyle = "white";
    canvas.fillRect(x - 2, y - 2, 4, 4);
  }
}

function positionIsLast(index, gestureLength) {
  return index === gestureLength - 1;
}

function getBoxPointFromCurrentDirection(nextDirection, boxWidth) {
  switch (nextDirection) {
    case "Up":
      return [boxWidth / 2, 0];
    case "Right":
      return [boxWidth, boxWidth / 2];
    case "Down":
      return [boxWidth / 2, boxWidth];
    case "Left":
      return [0, boxWidth / 2];
    default:
      return;
  }
}

function getBoxPointFromPreviousDirection(direction, boxWidth) {
  switch (direction) {
    case "Up":
      return [boxWidth / 2, boxWidth];
    case "Right":
      return [0, boxWidth / 2];
    case "Down":
      return [boxWidth / 2, 0];
    case "Left":
      return [boxWidth, boxWidth / 2];
    default:
      return;
  }
}
