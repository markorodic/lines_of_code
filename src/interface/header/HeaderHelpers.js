export function clearCanvas(ctx, containerWidth) {
  ctx.clearRect(0, 0, containerWidth, containerWidth);
}

export function renderPattern(ctx, boxWidth, containerWidth) {
  drawPatternIcon(ctx, containerWidth);
}

const boxes = 7;

export function drawPatternIcon(ctx, containerWidth) {
  drawPatternGrids(ctx, 7, containerWidth);
}

// function drawPattern(ctx) {
//   ctx.moveTo(gridPoint.x[1], gridPoint.y[3]);
//   ctx.lineTo(gridPoint.x[2], gridPoint.y[3]);
//   ctx.lineTo(gridPoint.x[2], gridPoint.y[2]);
//   ctx.lineTo(gridPoint.x[3], gridPoint.y[2]);
//   ctx.lineWidth = 1;
//   ctx.strokeStyle = "white";
//   ctx.stroke();
// }

const patternIconRatios = {
  sideMargins: 3,
  verticleMargins: 3,
  boxMargins: 5,
  boxWidth: 13
};

function drawPatternGrids(ctx, numberOfGrids, containerWidth) {
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
    marginBox = boxMargins;
    widthBox = boxWidth;
    gridNumber = numberOfGrids;
  }

  let count = 0;
  while (count < gridNumber) {
    const marginX = marginSide + count * (widthBox + marginBox);
    const marginY = marginSide;
    drawSinglePatternGrid(ctx, marginX, marginY, marginBox, widthBox);
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
    ctx.fillStyle = "#333333";
    ctx.fillRect(x, marginY, 1, boxWidth);
    x += lineDistance;
    count++;
  }
}

function drawHorizontalLines(ctx, marginX, marginY, boxWidth) {
  const lineDistance = boxWidth / 3;
  let y = marginY;
  let count = 0;
  while (count < 4) {
    ctx.fillStyle = "#333333";
    ctx.fillRect(marginX, y, boxWidth, 1);
    y += lineDistance;
    count++;
  }
}
