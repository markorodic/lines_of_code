import React from "react";
import { clearCanvas, drawPatternIcon } from "./HeaderHelpers";

export function useRenderGestureView(
  containerWidth,
  containerHeight,
  canvasElement,
  userIsActive
) {
  const ctx = useCreateCanvasContext(
    containerWidth,
    containerHeight,
    canvasElement
  );
  useRenderView(ctx, containerWidth, userIsActive);
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

function useRenderView(ctx, containerWidth, userIsActive) {
  React.useEffect(() => {
    if (ctx) {
      clearCanvas(ctx, containerWidth);
    }
    if (userIsActive) {
      drawPatternIcon(ctx, containerWidth);
    }
  }, [ctx, containerWidth, userIsActive]);
}
