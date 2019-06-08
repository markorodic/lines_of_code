import { NUMBER_OF_BOXES } from "../../CONSTANTS";
import { renderInnerLine } from "./GestureViewRenderHelpers";

export function renderGrid(ctx, containerWidth, boxWidth, mode) {
  if (mode === "Insert") {
    ctx.fillStyle = "#1e1e1e";
  } else {
    ctx.fillStyle = "#f7f7f7";
  }
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
    // ctx.fillStyle = "#f7f7f7";
    ctx.fillRect(x, y, containerWidth, 0.5);
    count = count + 1;
  }
}

export function renderGridPoints(ctx, boxWidth, mode) {
  if (mode === "Insert") {
    ctx.fillStyle = "#545454";
  } else {
    ctx.fillStyle = "#a3a3a3";
  }
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

export function renderCurrentBox(ctx, position, boxWidth, mode) {
  if (position.x) {
    const x = (position.x - 1) * boxWidth;
    const y = (position.y - 1) * boxWidth;
    if (mode === "Insert") {
      ctx.fillStyle = "white";
    } else {
      ctx.fillStyle = "black";
    }
    ctx.fillRect(x, y, boxWidth, boxWidth);
  }
}

export function renderExpiredBoxes(
  ctx,
  boxWidth,
  expiringPositions,
  count,
  mode
) {
  let colourVal;
  if (mode === "Insert") {
    expiringPositions.forEach(box => {
      const diff = count - box.timeAdded;
      if (diff < 10) {
        const alphaValue = 1 - diff / 20;
        ctx.fillStyle = `rgba(255, 255, 255, ${alphaValue})`;
      } else {
        ctx.fillStyle = "rgba(255,255,255,0)";
      }
      const x = (box.position.x - 1) * boxWidth;
      const y = (box.position.y - 1) * boxWidth;
      ctx.fillRect(x, y, boxWidth, boxWidth);
    });
  } else {
    if (expiringPositions.length) {
      expiringPositions.forEach(box => {
        const diff = count - box.timeAdded;
        if (diff < 10) {
          const alphaValue = 1 - diff / 20;
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
}

export function renderBG(ctx, containerWidth, mode) {
  if (mode === "Insert") {
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fillRect(0, 0, containerWidth, containerWidth);
  }
}

export function clearCanvas(ctx, containerWidth) {
  ctx.clearRect(0, 0, containerWidth, containerWidth);
}

export function renderMatchedPattern(ctx, boxWidth, gesture, mode) {
  if (mode === "Operator") {
    gesture.pattern.forEach((position, index) => {
      const prevDirection = gesture.path[index - 1];
      const direction = gesture.path[index];
      const nextDirection = gesture.path[index + 1];
      const gestureLength = gesture.path.length;

      renderCurrentBox(ctx, position, boxWidth);
      renderInnerLine(
        ctx,
        position,
        prevDirection,
        direction,
        nextDirection,
        index,
        gestureLength,
        boxWidth
      );
    });
  }
}
