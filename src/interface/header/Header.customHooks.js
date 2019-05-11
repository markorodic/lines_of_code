import React from "react";
import { clearCanvas, drawPatternIcon } from "./HeaderHelpers";

export function useRenderGestureView(
  containerWidth,
  containerHeight,
  canvasElement,
  gestureActive
) {
  const ctx = useCreateCanvasContext(
    containerWidth,
    containerHeight,
    canvasElement
  );
  useRenderView(ctx, containerWidth, gestureActive);
}

function useCreateCanvasContext(
  containerWidth,
  containerHeight,
  canvasElement
) {
  const [ctx, setCtx] = React.useState(null);
  React.useEffect(() => {
    const canvas = canvasElement.current;
    canvas.width = containerWidth;
    canvas.height = containerHeight;
    setCtx(canvas.getContext("2d"));
  }, [containerWidth, containerHeight, canvasElement]);

  return ctx;
}

function useRenderView(ctx, containerWidth, gestureActive) {
  React.useEffect(() => {
    if (ctx) {
      clearCanvas(ctx, containerWidth);
    }
    if (gestureActive) {
      drawPatternIcon(ctx, containerWidth);
    }
  }, [ctx, containerWidth, gestureActive]);
}
