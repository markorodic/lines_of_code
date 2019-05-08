import React from "react";
import {
  renderGrid,
  renderGridPoints,
  renderCurrentBox,
  renderExpiredBoxes,
  clearCanvas
} from "./GestureViewHelpers";
import { NUMBER_OF_BOXES } from "../CONSTANTS";

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
  { position, expiringPositions, count, containerWidth }
) {
  React.useEffect(() => {
    if (ctx) {
      const boxWidth = containerWidth / NUMBER_OF_BOXES.X;

      clearCanvas(ctx, containerWidth);
      renderGrid(ctx, containerWidth, boxWidth);
      renderGridPoints(ctx, boxWidth);
      renderCurrentBox(ctx, position, boxWidth);
      renderExpiredBoxes(ctx, boxWidth, expiringPositions, count);
    }
  }, [ctx, count, containerWidth, expiringPositions, position]);
}
