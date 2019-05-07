import React from "react";
import { useRenderGestureView } from "./GestureView.customHooks";

export default function GestureView(props) {
  const canvasElement = React.useRef();
  useRenderGestureView(props, canvasElement);

  return <canvas id="canvas" ref={canvasElement} />;
}
