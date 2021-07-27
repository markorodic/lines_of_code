import { Position, Direction } from "../parse";

export function renderInnerLine(
  canvas: CanvasRenderingContext2D,
  position: Position,
  prevDirection: Direction,
  direction: Direction,
  index: number,
  gestureLength: number,
  boxWidth: number,
) {
  let startPoint: number[], centerPoint: number[], endPoint: number[];

  centerPoint = [boxWidth / 2, boxWidth / 2];

  if (prevDirection) {
    startPoint = getBoxPointFromPreviousDirection(prevDirection, boxWidth);
  } else {
    startPoint = centerPoint;
  }
  console.log(startPoint);

  if (direction) {
    endPoint = getBoxPointFromCurrentDirection(direction, boxWidth);
  } else {
    endPoint = centerPoint;
  }

  canvas.beginPath();
  canvas.moveTo(
    (position.x - 1) * boxWidth + startPoint[0],
    (position.y - 1) * boxWidth + startPoint[1],
  );
  canvas.lineTo(
    (position.x - 1) * boxWidth + centerPoint[0],
    (position.y - 1) * boxWidth + centerPoint[1],
  );
  canvas.lineTo(
    (position.x - 1) * boxWidth + endPoint[0],
    (position.y - 1) * boxWidth + endPoint[1],
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

function positionIsLast(index: number, gestureLength: number) {
  return index === gestureLength;
}

function getBoxPointFromCurrentDirection(
  nextDirection: Direction,
  boxWidth: number,
) {
  switch (nextDirection) {
    case "Up":
      return [boxWidth / 2, 0];
    case "Right":
      return [boxWidth, boxWidth / 2];
    case "Down":
      return [boxWidth / 2, boxWidth];
    case "Left":
      return [0, boxWidth / 2];
  }
}

function getBoxPointFromPreviousDirection(
  direction: Direction,
  boxWidth: number,
) {
  switch (direction) {
    case "Up":
      return [boxWidth / 2, boxWidth];
    case "Right":
      return [0, boxWidth / 2];
    case "Down":
      return [boxWidth / 2, 0];
    case "Left":
      return [boxWidth, boxWidth / 2];
  }
}
