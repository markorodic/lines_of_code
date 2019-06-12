import { renderGestureIcon } from "./RenderGestureIcons";

// TODO: Needs to be refactored

export function clearCanvas(ctx, containerWidth) {
  if (ctx) {
    ctx.clearRect(0, 0, containerWidth, containerWidth);
  }
}

export function displayOperatorPatterns(ctx, { width }, gesture, userActive) {
  clearCanvas(ctx, width);
  if (userActive) {
    const dimensions = getDimensions(width);
    drawPatterns(ctx, dimensions, gesture);
  }
}

function getDimensions(containerWidth) {
  let marginSide, marginBox, widthBox;
  if (containerWidth > 900) {
    marginSide = 10;
    marginBox = 15;
    widthBox = 35;
  } else {
    const { sideMargins, boxMargins, boxWidth } = getWidthProportions(
      containerWidth
    );
    marginSide = sideMargins;
    marginSide = 10;
    marginBox = boxMargins;
    widthBox = boxWidth;
  }
  return {
    marginSide,
    marginBox,
    widthBox
  };
}

function drawPatterns(ctx, { marginSide, marginBox, widthBox }, gesture) {
  let count = 0;
  while (count < 4) {
    const marginX = marginSide + count * (widthBox + marginBox);
    const marginY = marginSide;
    drawSinglePatternGrid(ctx, marginX, marginY, marginBox, widthBox);
    renderGestureIcon(ctx, marginX, marginY, widthBox, count, gesture);
    count++;
  }
}

const patternIconRatios = {
  sideMargins: 3,
  verticleMargins: 3,
  boxMargins: 5,
  boxWidth: 13
};

function getWidthProportions(containerWidth) {
  const { sideMargins, boxMargins, boxWidth } = patternIconRatios;
  const ratio = containerWidth / getTotalWidthRatio();
  return {
    sideMargins: sideMargins * ratio,
    boxMargins: boxMargins * ratio,
    boxWidth: boxWidth * ratio
  };
}

function getTotalWidthRatio() {
  const { sideMargins, boxMargins, boxWidth } = patternIconRatios;
  return sideMargins * 2 + boxMargins * (7 - 1) + boxWidth * 7;
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
