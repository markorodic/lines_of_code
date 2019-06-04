import React from "react";

export function useCreateCanvasContext({ containerWidth }, canvasElement) {
  const [ctx, setCtx] = React.useState(null);
  React.useEffect(() => {
    const canvas = canvasElement.current;
    canvas.width = canvas.height = containerWidth;
    setCtx(canvas.getContext("2d"));
  }, [containerWidth, canvasElement]);

  return ctx;
}

// function renderMatchedPattern(ctx, boxWidth, gesture) {
//   if (gesture.length > 1) {
//     gesture.positions.forEach((position, index) => {
//       const prevDirection = gesture.path[index - 1];
//       const direction = gesture.path[index];
//       const nextDirection = gesture.path[index + 1];
//       const gestureLength = gesture.path.length;
//       renderCurrentBox(ctx, position, boxWidth);
//       renderInnerLine(
//         ctx,
//         position,
//         prevDirection,
//         direction,
//         nextDirection,
//         index,
//         gestureLength,
//         boxWidth
//       );
//     });
//   }
// }
