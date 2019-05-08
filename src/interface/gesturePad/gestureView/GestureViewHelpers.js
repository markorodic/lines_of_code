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
      ctx.fillStyle = "#a3a3a3";
      ctx.fillRect(x - 0.5, y - 0.5, 1, 1);
      countX++;
    }
    countY++;
  }
}

export function renderGiridPointGuides(ctx, position, boxWidth, gestureActive) {
  if (position.x && gestureActive) {
    const guidePoints = [];
    let x, y;

    x = (position.x - 1) * boxWidth - boxWidth;
    y = (position.y - 1) * boxWidth;
    guidePoints.push({ x, y });

    x = (position.x - 1) * boxWidth - boxWidth;
    y = (position.y - 1) * boxWidth + boxWidth;
    guidePoints.push({ x, y });

    x = (position.x - 1) * boxWidth;
    y = (position.y - 1) * boxWidth - boxWidth;
    guidePoints.push({ x, y });

    x = (position.x - 1) * boxWidth + boxWidth;
    y = (position.y - 1) * boxWidth - boxWidth;
    guidePoints.push({ x, y });

    x = (position.x - 1) * boxWidth + 2 * boxWidth;
    y = (position.y - 1) * boxWidth;
    guidePoints.push({ x, y });

    x = (position.x - 1) * boxWidth + 2 * boxWidth;
    y = (position.y - 1) * boxWidth + boxWidth;
    guidePoints.push({ x, y });

    x = (position.x - 1) * boxWidth;
    y = (position.y - 1) * boxWidth + 2 * boxWidth;
    guidePoints.push({ x, y });

    x = (position.x - 1) * boxWidth + boxWidth;
    y = (position.y - 1) * boxWidth + 2 * boxWidth;
    guidePoints.push({ x, y });

    guidePoints.forEach(point => {
      ctx.fillStyle = "#7a7a7a";
      ctx.fillRect(point.x - 1, point.y - 1, 2, 2);
    });
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

export function renderExpiredBoxes(ctx, boxWidth, expiringPositions, count) {
  if (expiringPositions.length) {
    expiringPositions.forEach(box => {
      const diff = count - box.timeAdded;
      if (diff < 20) {
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

export function clearCanvas(ctx, containerWidth) {
  ctx.clearRect(0, 0, containerWidth, containerWidth);
}
