import { renderInnerLine } from "./render";
import { NUMBER_OF_BOXES } from "./gesture";
import { ExpiredPositions } from "../view";
import { Gesture, Mode, Position } from "../../../provider/types";

export function renderGrid(
  ctx: CanvasRenderingContext2D,
  containerWidth: number,
  boxWidth: number,
  mode: Mode,
) {
  ctx.fillStyle = "#f7f7f7";
  let count = 0;
  while (NUMBER_OF_BOXES.X > count) {
    const x = count * boxWidth;
    const y = 0 * boxWidth;
    ctx.fillRect(x, y, 0.5, containerWidth);
    count = count + 1;
  }
  count = 0;
  while (NUMBER_OF_BOXES.X > count) {
    const x = 0 * boxWidth;
    const y = count * boxWidth;
    ctx.fillRect(x, y, containerWidth, 0.5);
    count = count + 1;
  }
}

export function renderGridPoints(
  ctx: CanvasRenderingContext2D,
  boxWidth: number,
  mode: Mode,
) {
  ctx.fillStyle = "#a3a3a3";

  let countX, countY;
  countY = 1;
  while (NUMBER_OF_BOXES.Y > countY) {
    countX = 1;
    while (NUMBER_OF_BOXES.X > countX) {
      const x = countX * boxWidth;
      const y = countY * boxWidth;
      ctx.fillRect(x - 0.5, y - 0.5, 1, 1);
      countX++;
    }
    countY++;
  }
}

export function renderCurrentBox(
  ctx: CanvasRenderingContext2D,
  position: Position,
  boxWidth: number,
) {
  if (position.x) {
    const x = (position.x - 1) * boxWidth;
    const y = (position.y - 1) * boxWidth;

    ctx.fillStyle = "black";
    ctx.fillRect(x, y, boxWidth, boxWidth);
  }
}

export function renderExpiredBoxes(
  ctx: CanvasRenderingContext2D,
  boxWidth: number,
  expiringPositions: ExpiredPositions,
  count: number,
  mode: Mode,
) {
  if (expiringPositions.length) {
    expiringPositions.forEach((box) => {
      const diff = count - box.timeAdded;
      if (diff < 15) {
        const alphaValue = 1 - diff / 25;
        ctx.fillStyle = `rgba(0, 0, 0, ${alphaValue})`;
      } else {
        ctx.fillStyle = "rgba(0,0,0,0)";
      }
      const x = (box.position.x - 1) * boxWidth;
      const y = (box.position.y - 1) * boxWidth;
      ctx.fillRect(x, y, boxWidth, boxWidth);
    });
  }
}

export function clearCanvas(
  ctx: CanvasRenderingContext2D,
  containerWidth: number,
) {
  ctx.clearRect(0, 0, containerWidth, containerWidth);
}

export function renderMatchedPattern(
  ctx: CanvasRenderingContext2D,
  boxWidth: number,
  gesture: Gesture,
  mode: Mode,
  gestureActive: boolean,
) {
  if (mode === "Operation" && gestureActive) {
    gesture.pattern.forEach((position: Position, index) => {
      const prevDirection = gesture.path[index - 1];
      const direction = gesture.path[index];
      const gestureLength = gesture.path.length;

      renderCurrentBox(ctx, position, boxWidth);
      renderInnerLine(
        ctx,
        position,
        prevDirection,
        direction,
        index,
        gestureLength,
        boxWidth,
      );
    });
  }
}
