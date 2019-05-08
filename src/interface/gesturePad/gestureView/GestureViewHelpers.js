import { NUMBER_OF_BOXES } from "../CONSTANTS";

export function renderGrid(ctx, containerWidth, boxWidth) {
  let count = 0;
  while (NUMBER_OF_BOXES.X > count) {
    const x = count * boxWidth;
    const y = 0 * boxWidth;
    ctx.fillStyle = "#f7f7f7";
    ctx.fillRect(x, y, 0.5, containerWidth);
    count = count + 1;
  }
  count = 0;
  while (NUMBER_OF_BOXES.X > count) {
    const x = 0 * boxWidth;
    const y = count * boxWidth;
    ctx.fillStyle = "#f7f7f7";
    ctx.fillRect(x, y, containerWidth, 0.5);
    count = count + 1;
  }
}

export function renderGridPoints(ctx, boxWidth) {
  let countX, countY;
  countY = 1;
  while (NUMBER_OF_BOXES.Y > countY) {
    countX = 1;
    while (NUMBER_OF_BOXES.X > countX) {
      const x = countX * boxWidth;
      const y = countY * boxWidth;
      ctx.fillStyle = "#9e9e9e";
      ctx.fillRect(x - 1, y - 1, 2, 2);
      countX++;
    }
    countY++;
  }
}

export function renderCurrentBox(ctx, position, boxWidth) {
  if (position.x) {
    const x = (position.x - 1) * boxWidth;
    const y = (position.y - 1) * boxWidth;
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, boxWidth, boxWidth);
  }
}

export function renderExpiredBoxes(ctx, boxWidth, expiredPositions, count) {
  if (expiredPositions.length) {
    expiredPositions.forEach(box => {
      const diff = count - box.timeAdded;
      if (diff < 20) {
        const alphaValue = 1 - diff / 20;
        ctx.fillStyle = `rgba(0, 0, 0, ${alphaValue})`;
      } else {
        ctx.fillStyle = "rgba(0,0,0,0)";
        box.expired = true;
      }
      const x = (box.position.x - 1) * boxWidth;
      const y = (box.position.y - 1) * boxWidth;
      ctx.fillRect(x, y, boxWidth, boxWidth);
    });
  }
}

export function clearCanvas(ctx, containerWidth) {
  ctx.clearRect(0, 0, containerWidth, containerWidth);
}
