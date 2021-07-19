import React, { useEffect } from "react";
import style from "./GestureView.module.css";
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
import {
  useInterfaceGestureState,
  useInterfaceCountState,
} from "../../provider/customHooks";

const GestureView = ({ position, containerWidth, matchedGesture, isOnPad }) => {
  const count = useInterfaceCountState();
  const [expiringPositions, setExpiringPositions] = React.useState([]);
  const canvasElement = React.useRef();
  const ctx = useCreateCanvasContext(containerWidth, canvasElement);
  const { gestureActive, mode } = useInterfaceGestureState();

  // Disabling the hook dependency rule as passing count causes
  // an error
  useEffect(() => {
    setExpiringPositions((positions) => [
      ...positions,
      { position, timeAdded: count, expired: false },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position, setExpiringPositions]);

  useEffect(() => {
    if (ctx) {
      const boxWidth = containerWidth / NUMBER_OF_BOXES.X;

      clearCanvas(ctx, containerWidth);
      renderBG(ctx, containerWidth, mode);
      renderGrid(ctx, containerWidth, boxWidth, mode);
      renderGridPoints(ctx, boxWidth, mode);
      renderGiridPointGuides(ctx, position, boxWidth, gestureActive, mode);
      renderCurrentBox(ctx, position, boxWidth, mode, isOnPad);
      renderMatchedPattern(ctx, boxWidth, matchedGesture, mode, gestureActive);
      renderExpiredBoxes(ctx, boxWidth, expiringPositions, count, mode);
    }
  }, [
    ctx,
    count,
    containerWidth,
    expiringPositions,
    position,
    gestureActive,
    matchedGesture,
    mode,
    isOnPad,
  ]);

  return <canvas id={style.canvas} ref={canvasElement} />;
};

export default GestureView;
