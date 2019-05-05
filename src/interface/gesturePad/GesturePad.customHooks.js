import React, { useState, useEffect } from "react";
import { getElementProperties } from "./GesturePadHelpers";

export function useRequestAnimationFrameOnLoad(renderView) {
  useEffect(() => {
    window.requestAnimationFrame(renderView);
  }, []);
}

export function useContainerProperties(gesturePadElement) {
  const [containerProperties, setContainerProperties] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  useEffect(() => {
    const { x, y, width, height } = getElementProperties(gesturePadElement);
    setContainerProperties({
      x,
      y,
      width,
      height
    });
  }, []);
  return containerProperties;
}
