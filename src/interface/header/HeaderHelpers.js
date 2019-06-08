import { validGestures } from "../gesturesPatterns/gesturePatterns";
import { renderGestureIcon } from "./RenderGestureIcons";

export function clearCanvas(ctx, containerWidth) {
  ctx.clearRect(0, 0, containerWidth, containerWidth);
}

export function renderPattern(ctx, boxWidth, containerWidth, gesture) {
  drawPatternIcon(ctx, containerWidth, gesture);
}

const boxes = 7;

export function drawPatternIcon(ctx, containerWidth, gesture) {
  drawPatternGrids(ctx, 7, containerWidth, gesture);
}

const patternIconRatios = {
  sideMargins: 3,
  verticleMargins: 3,
  boxMargins: 5,
  boxWidth: 13
};

function drawPatternGrids(ctx, numberOfGrids, containerWidth, gesture) {
  let marginSide, marginBox, widthBox, gridNumber;
  if (containerWidth > 900) {
    marginSide = 10;
    marginBox = 15;
    widthBox = 35;
    gridNumber = 19;
  } else {
    const { sideMargins, boxMargins, boxWidth } = getWidthProportions(
      containerWidth
    );
    marginSide = sideMargins;
    marginSide = 10;
    marginBox = boxMargins;
    widthBox = boxWidth;
    gridNumber = numberOfGrids;
  }

  let count = 0;
  while (count < 6) {
    const marginX = marginSide + count * (widthBox + marginBox);
    const marginY = marginSide;
    drawSinglePatternGrid(ctx, marginX, marginY, marginBox, widthBox);
    renderGestureIcon(ctx, marginX, marginY, widthBox, count, gesture);
    count++;
  }
}

function getTotalWidthRatio() {
  const { sideMargins, boxMargins, boxWidth } = patternIconRatios;
  return sideMargins * 2 + boxMargins * (boxes - 1) + boxWidth * boxes;
}

function getWidthProportions(containerWidth) {
  const { sideMargins, boxMargins, boxWidth } = patternIconRatios;
  const ratio = containerWidth / getTotalWidthRatio();
  return {
    sideMargins: sideMargins * ratio,
    boxMargins: boxMargins * ratio,
    boxWidth: boxWidth * ratio
  };
}

function drawSinglePatternGrid(ctx, marginX, marginY, boxMargins, boxWidth) {
  drawHorizontalLines(ctx, marginX, marginY, boxWidth);
  drawVerticleLines(ctx, marginX, marginY, boxWidth);
}

function drawVerticleLines(ctx, marginX, marginY, boxWidth) {
  let count = 0;
  const lineDistance = boxWidth / 3;
  let x = marginX;
  while (count < 4) {
    ctx.fillStyle = "#232323";
    ctx.fillRect(x + 0.5, marginY + 0.5, 1.5, boxWidth + 0.5);
    x += lineDistance;
    count++;
  }
}

function drawHorizontalLines(ctx, marginX, marginY, boxWidth) {
  const lineDistance = boxWidth / 3;
  let y = marginY;
  let count = 0;
  while (count < 4) {
    ctx.fillStyle = "#232323";
    ctx.fillRect(marginX + 0.5, y + 0.5, boxWidth + 0.5, 1.5);
    y += lineDistance;
    count++;
  }
}
