import React from "react";
import { getElementProperties } from "./GestureInputHelpers";

export function useRequestAnimationFrameOnLoad(renderView, { gestureActive }) {
  React.useEffect(() => {
    window.requestAnimationFrame(renderView);
  }, [gestureActive]);
}

export function useContainerProperties(GestureInputElement) {
  const [containerProperties, setContainerProperties] = React.useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  React.useEffect(() => {
    const { x, y, width, height } = getElementProperties(GestureInputElement);
    setContainerProperties({
      x,
      y,
      width,
      height
    });
  }, [GestureInputElement]);
  return containerProperties;
}
