import React, { useEffect } from "react";
import { Canvas } from "./styles";
import { useCreateCanvasContext } from "./customHooks";
import {
  renderGrid,
  renderGridPoints,
  renderCurrentBox,
  renderExpiredBoxes,
  clearCanvas,
  renderMatchedPattern,
  renderBG,
} from "./helpers/view";
import { renderGiridPointGuides } from "./helpers/grid";
import { NUMBER_OF_BOXES } from "./CONSTANTS";
import { useGestureState, useAnimationFrame } from "../../provider/customHooks";
import { Position, Pattern } from "./parse";

interface Props {
  position: Position;
  containerWidth: number;
  isOnPad: boolean;
}

interface ExpiredPosition {
  position: Position;
  timeAdded: number;
  expired: boolean;
}

type ExpiredPositions = ExpiredPosition[];

const GestureView = ({ position, containerWidth, isOnPad }: Props) => {
  const canvasElement = React.useRef<HTMLCanvasElement>(null);
  const ctx = useCreateCanvasContext(containerWidth, canvasElement);
  const { gestureActive, mode, gesture } = useGestureState();

  const [count, setCount] = React.useState<number>(0);
  const [expiredPositions, setExpiredPositions] =
    React.useState<ExpiredPositions>([]);

  useAnimationFrame(() => {
    setCount((count) => count + 1);
  });

  // Disabling the hook dependency rule as passing count causes
  // an error
  useEffect(() => {
    setExpiredPositions((positions: ExpiredPositions) => [
      ...positions,
      { position, timeAdded: count, expired: false },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position, setExpiredPositions]);

  useEffect(() => {
    if (ctx) {
      const boxWidth = containerWidth / NUMBER_OF_BOXES.X;

      clearCanvas(ctx, containerWidth);
      renderBG(ctx, containerWidth, mode);
      renderGrid(ctx, containerWidth, boxWidth, mode);
      renderGridPoints(ctx, boxWidth, mode);
      renderGiridPointGuides(ctx, position, boxWidth, gestureActive, mode);
      renderCurrentBox(ctx, position, boxWidth, mode, isOnPad);
      renderMatchedPattern(ctx, boxWidth, gesture, mode, gestureActive);
      renderExpiredBoxes(ctx, boxWidth, expiredPositions, count, mode);
    }
  }, [
    ctx,
    count,
    containerWidth,
    expiredPositions,
    position,
    gestureActive,
    gesture,
    mode,
    isOnPad,
  ]);

  return <Canvas ref={canvasElement} />;
};

// const useDrawToCanvas = (position, containerWidth, isOnPad, count) => {
//   const [expiredPositions, setExpiredPositions] =
//     React.useState<ExpiredPositions>([]);

//   useEffect(() => {
//     setExpiredPositions((positions: ExpiredPositions) => [
//       ...positions,
//       { position, timeAdded: count, expired: false },
//     ]);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [position, setExpiredPositions]);

//   useEffect(() => {
//     if (ctx) {
//       const boxWidth = containerWidth / NUMBER_OF_BOXES.X;

//       clearCanvas(ctx, containerWidth);
//       renderBG(ctx, containerWidth, mode);
//       renderGrid(ctx, containerWidth, boxWidth, mode);
//       renderGridPoints(ctx, boxWidth, mode);
//       renderGiridPointGuides(ctx, position, boxWidth, gestureActive, mode);
//       renderCurrentBox(ctx, position, boxWidth, mode, isOnPad);
//       renderMatchedPattern(ctx, boxWidth, gesture, mode, gestureActive);
//       renderExpiredBoxes(ctx, boxWidth, expiredPositions, count, mode);
//     }
//   }, [
//     ctx,
//     count,
//     containerWidth,
//     expiredPositions,
//     position,
//     gestureActive,
//     gesture,
//     mode,
//     isOnPad,
//   ]);
// };

export default GestureView;
