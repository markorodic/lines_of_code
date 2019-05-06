import React, { useRef } from "react";
import { useRenderGestureView } from "./GestureView.customHooks";

export default function GesturePad(props) {
  const canvasElement = useRef();
  useRenderGestureView(props, canvasElement);

  return <canvas id="canvas" ref={canvasElement} />;
}
