import { useState, useEffect } from "react";
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
  const [ctx, setCtx] = useState(null);
  useEffect(() => {
    const canvas = canvasElement.current;
    canvas.width = canvas.height = containerWidth;
    setCtx(canvas.getContext("2d"));
  }, [containerWidth, canvasElement]);

  return ctx;
}

function useRenderView(
  ctx,
  { position, expiredPositions, count, containerWidth }
) {
  useEffect(() => {
    if (ctx) {
      const boxWidth = containerWidth / NUMBER_OF_BOXES.X;

      clearCanvas(ctx, containerWidth);
      renderGrid(ctx, containerWidth, boxWidth);
      renderGridPoints(ctx, boxWidth);
      renderCurrentBox(ctx, position, boxWidth);
      renderExpiredBoxes(ctx, boxWidth, expiredPositions, count);
    }
  }, [ctx, count, containerWidth, expiredPositions, position]);
}
