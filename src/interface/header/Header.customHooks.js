import React from "react";

export function useCreateCanvasContext({ width, height }, canvasElement) {
  const [ctx, setCtx] = React.useState(null);
  React.useEffect(() => {
    const canvas = canvasElement.current;
    canvas.width = width;
    canvas.height = height;
    setCtx(canvas.getContext("2d"));
  }, [width, height, canvasElement]);

  return ctx;
}
