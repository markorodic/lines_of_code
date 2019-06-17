import React from "react";
import style from "./GestureView.module.css";
import { useCreateCanvasContext } from "./GestureView.customHooks";
import {
  renderGrid,
  renderGridPoints,
  renderCurrentBox,
  renderExpiredBoxes,
  clearCanvas,
  renderMatchedPattern,
  renderBG
} from "./GestureViewHelpers";
import { renderGiridPointGuides } from "./gestureViewGrid/GestureViewGrid";
import { NUMBER_OF_BOXES } from "../../../CONSTANTS";
import { useInterfaceGestureState } from "../../../Interface.customHooks";

export default function GestureView({
  position,
  expiringPositions,
  count,
  containerWidth,
  lastMatchedGesture
}) {
  React.useEffect(() => {});
  const canvasElement = React.useRef();
  const ctx = useCreateCanvasContext(containerWidth, canvasElement);
  const { gestureActive, mode } = useInterfaceGestureState();

  React.useEffect(() => {
    if (ctx) {
      const boxWidth = containerWidth / NUMBER_OF_BOXES.X;

      clearCanvas(ctx, containerWidth);
      renderBG(ctx, containerWidth, mode);
      renderGrid(ctx, containerWidth, boxWidth, mode);
      renderGridPoints(ctx, boxWidth, mode);
      renderGiridPointGuides(ctx, position, boxWidth, gestureActive, mode);
      renderCurrentBox(ctx, position, boxWidth, mode);
      renderMatchedPattern(ctx, boxWidth, lastMatchedGesture, mode);
      renderExpiredBoxes(ctx, boxWidth, expiringPositions, count, mode);
    }
  }, [
    ctx,
    count,
    containerWidth,
    expiringPositions,
    position,
    gestureActive,
    lastMatchedGesture,
    mode
  ]);

  return <canvas id={style.canvas} ref={canvasElement} />;
}
