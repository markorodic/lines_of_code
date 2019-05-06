import React from "react";
import { getElementProperties } from "./GesturePadHelpers";

export function useRequestAnimationFrameOnLoad(renderView) {
  React.useEffect(() => {
    window.requestAnimationFrame(renderView);
  }, []);
}

export function useContainerProperties(gesturePadElement) {
  const [containerProperties, setContainerProperties] = React.useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  React.useEffect(() => {
    const { x, y, width, height } = getElementProperties(gesturePadElement);
    setContainerProperties({
      x,
      y,
      width,
      height
    });
  }, [gesturePadElement]);
  return containerProperties;
}
