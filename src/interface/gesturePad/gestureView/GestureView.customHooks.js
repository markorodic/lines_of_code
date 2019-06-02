import React from "react";
import {
  renderGrid,
  renderGridPoints,
  renderCurrentBox,
  renderExpiredBoxes,
  clearCanvas
} from "./GestureViewHelpers";
import { renderGiridPointGuides } from "./gestureViewGrid/GestureViewGrid";
import { NUMBER_OF_BOXES } from "../CONSTANTS";
import { renderInnerLine } from "./GestureViewRenderHelpers";

export function useRenderGestureView(props, canvasElement) {
  const ctx = useCreateCanvasContext(props, canvasElement);
  useRenderView(ctx, props);
}

function useCreateCanvasContext({ containerWidth }, canvasElement) {
  const [ctx, setCtx] = React.useState(null);
  React.useEffect(() => {
    const canvas = canvasElement.current;
    canvas.width = canvas.height = containerWidth;
    setCtx(canvas.getContext("2d"));
  }, [containerWidth, canvasElement]);

  return ctx;
}

function useRenderView(
  ctx,
  { position, expiringPositions, count, containerWidth, gestureActive, gesture }
) {
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
}

function renderMatchedPattern(ctx, boxWidth, gesture) {
  if (gesture.length > 1) {
    gesture.positions.forEach((position, index) => {
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
