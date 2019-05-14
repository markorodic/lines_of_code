export function renderInnerLine(
  canvas,
  position,
  direction,
  prevDirection,
  index,
  gestureLength,
  boxWidth
) {
  let startPoint, centerPoint, endPoint;

  centerPoint = [boxWidth / 2, boxWidth / 2];

  if (prevDirection) {
    startPoint = getBoxPointFromPreviousDirection(prevDirection, boxWidth);
  } else {
    startPoint = centerPoint;
  }

  if (positionIsLast(index, gestureLength)) {
    endPoint = centerPoint;
  } else {
    endPoint = getBoxPointFromCurrentDirection(direction, boxWidth);
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

function getBoxPointFromCurrentDirection(direction, boxWidth) {
  switch (direction) {
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

// line middle (x and y) will always be in the middle - so define this at the start

// ** START POSITION **
// if first
// start at the middle

// else
// start on state direction (from preivous box)

// ** END POSITION **
// if last
// end at the middle

// else
// end on direction

// save end direction in internal state

//   canvas.beginPath();
//   const direction = state.pattern.direction[i];
//   let boxStartX, boxMiddleX, boxEndX, boxStartY, boxMiddleY, boxEndY;
//   if (direction === "R") {
//     boxStartY = y + windowHeightUnit / 2;
//     boxMiddleY = y + windowHeightUnit / 2;
//     boxEndY = y + windowHeightUnit / 2;
//     boxStartX = x;
//     boxMiddleX = x + windowWidthUnit / 2;
//     boxEndX = x + windowWidthUnit;
//   }
//   if (direction === "L") {
//     boxStartY = y + windowHeightUnit / 2;
//     boxMiddleY = y + windowHeightUnit / 2;
//     boxEndY = y + windowHeightUnit / 2;
//     boxStartX = x + windowWidthUnit;
//     boxMiddleX = x + windowWidthUnit / 2;
//     boxEndX = x;
//   }
//   if (direction === "U") {
//     boxStartX = x + windowWidthUnit / 2;
//     boxMiddleX = x + windowHeightUnit / 2;
//     boxEndX = x + windowWidthUnit / 2;
//     boxEndY = y;
//     boxMiddleY = y + windowWidthUnit / 2;
//     boxStartY = y + windowHeightUnit;
//   }
//   if (direction === "D") {
//     boxStartX = x + windowWidthUnit / 2;
//     boxMiddleX = x + windowHeightUnit / 2;
//     boxEndX = x + windowWidthUnit / 2;
//     boxStartY = y;
//     boxMiddleY = y + windowWidthUnit / 2;
//     boxEndY = y + windowWidthUnit;
//   }
//   newXStart = boxStartX;
//   newXMiddle = boxMiddleX;
//   newXEnd = boxEndX;
//   newYStart = boxStartY;
//   newYMiddle = boxMiddleY;
//   newYEnd = boxEndY;
//   if (direction === "R" || direction === "L") {
//     if (state.boxes.series.length === 1) {
//       newXEnd = boxStartX;
//     } else if (i === 0) {
//       newXStart = boxMiddleX;
//       if (state.pattern.direction[i + 1] === "U") {
//         newXEnd = boxMiddleX;
//         newYEnd = y;
//       }
//       if (state.pattern.direction[i + 1] === "D") {
//         newXEnd = boxMiddleX;
//         newYEnd = y + windowHeightUnit;
//       }
//     } else if (i === state.boxes.series.length - 1) {
//       newXEnd = boxMiddleX;
//     } else {
//       if (state.pattern.direction[i + 1] === "U") {
//         newXEnd = boxMiddleX;
//         newYEnd = y;
//       }
//       if (state.pattern.direction[i + 1] === "D") {
//         newXEnd = boxMiddleX;
//         newYEnd = y + windowHeightUnit;
//       }
//     }
//   }
//   if (direction === "") {
//     boxStartX = x;
//     boxMiddleX = x + windowHeightUnit / 2;
//     boxEndX = x + windowWidthUnit;
//     boxStartY = y;
//     boxMiddleY = y + windowWidthUnit / 2;
//     boxEndY = y + windowWidthUnit;
//   }
//   if (direction === "") {
//     if (state.pattern.direction[i + 1] === "U") {
//       newXStart = boxMiddleX;
//       newXMiddle = boxMiddleX;
//       newXEnd = boxMiddleX;
//       newYStart = boxMiddleY;
//       newYMiddle = boxMiddleY;
//       newYEnd = boxStartY;
//     }
//     if (state.pattern.direction[i + 1] === "D") {
//       newXStart = boxMiddleX;
//       newXMiddle = boxMiddleX;
//       newXEnd = boxMiddleX;
//       newYStart = boxMiddleY;
//       newYMiddle = boxMiddleY;
//       newYEnd = boxEndY;
//     }
//     if (state.pattern.direction[i + 1] === "R") {
//       newXStart = boxMiddleX;
//       newXMiddle = boxMiddleX;
//       newXEnd = boxEndX;
//       newYStart = boxMiddleY;
//       newYMiddle = boxMiddleY;
//       newYEnd = boxMiddleY;
//     }
//     if (state.pattern.direction[i + 1] === "L") {
//       newXStart = boxMiddleX;
//       newXMiddle = boxMiddleX;
//       newXEnd = boxStartX;
//       newYStart = boxMiddleY;
//       newYMiddle = boxMiddleY;
//       newYEnd = boxMiddleY;
//     }
//     if (state.pattern.direction.length === 1) {
//       newXStart = boxMiddleX;
//       newXMiddle = boxMiddleX;
//       newXEnd = boxMiddleX;
//       newYStart = boxMiddleY;
//       newYMiddle = boxMiddleY;
//       newYEnd = boxMiddleY;
//     }
//   }
//   if (direction === "U" || direction === "D") {
//     if (state.boxes.series.length === 1) {
//       newYEnd = boxStartY;
//     } else if (i === 0) {
//       newYStart = boxMiddleY;
//       if (state.pattern.direction[i + 1] === "R") {
//         newXEnd = x + windowWidthUnit;
//         newYEnd = y + windowWidthUnit / 2;
//       }
//       if (state.pattern.direction[i + 1] === "L") {
//         newXEnd = x;
//         newYEnd = y + windowWidthUnit / 2;
//       }
//     } else if (i === state.boxes.series.length - 1) {
//       newYEnd = boxMiddleY;
//     } else {
//       if (state.pattern.direction[i + 1] === "R") {
//         newXEnd = x + windowWidthUnit;
//         newYEnd = y + windowWidthUnit / 2;
//       }
//       if (state.pattern.direction[i + 1] === "L") {
//         newXEnd = x;
//         newYEnd = y + windowWidthUnit / 2;
//       }
//     }
//   }
// }
