import React from "react";
import { useCreateCanvasContext } from "./GestureView.customHooks";
import {
  renderGrid,
  renderGridPoints,
  renderCurrentBox,
  renderExpiredBoxes,
  clearCanvas
} from "./GestureViewHelpers";
import { renderGiridPointGuides } from "./gestureViewGrid/GestureViewGrid";
import { NUMBER_OF_BOXES } from "../../CONSTANTS";

export default function GestureView(props) {
  // should take props and the context gesture state
  // create a matrix of the grid
  // [
  //  [0,0,0,0,0,0,0],
  //  [0,0,0,0,0,0,0],
  //  [0,0,0,0,0,0,0],
  //  [0,0,0,0,0,0,0],
  //  [0,0,0,0,0,0,0],
  //  [0,0,0,0,0,0,0],
  //  [0,0,0,0,0,0,0]
  // ]

  React.useEffect(() => {});
  const canvasElement = React.useRef();
  const ctx = useCreateCanvasContext(props, canvasElement);
  const {
    position,
    expiringPositions,
    count,
    containerWidth,
    gestureActive,
    gesture
  } = props;

  React.useEffect(() => {
    if (ctx) {
      const boxWidth = containerWidth / NUMBER_OF_BOXES.X;

      clearCanvas(ctx, containerWidth);
      renderGrid(ctx, containerWidth, boxWidth);
      renderGridPoints(ctx, boxWidth);
      renderGiridPointGuides(ctx, position, boxWidth, gestureActive);
      renderCurrentBox(ctx, position, boxWidth);
      // renderMatchedPattern(ctx, boxWidth, gesture);
      renderExpiredBoxes(ctx, boxWidth, expiringPositions, count, gesture);
    }
  }, [
    ctx,
    count,
    containerWidth,
    expiringPositions,
    position,
    gestureActive,
    gesture
  ]);

  return <canvas id="canvas" ref={canvasElement} />;
}
