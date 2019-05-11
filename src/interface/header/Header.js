import React from "react";
import { useContainerProperties } from "../gesturePad/gestureInput/GestureInput.customHooks";
import { useRenderGestureView } from "./Header.customHooks";

function Header(props) {
  const HeaderElement = React.useRef();
  const containerProperties = useContainerProperties(HeaderElement);
  const canvasElement = React.useRef();

  useRenderGestureView(
    containerProperties.width,
    containerProperties.height,
    canvasElement,
    props.userActive
  );
  return (
    <header className="header" ref={HeaderElement}>
      {!props.userActive && <p>line</p>}
      <canvas id="canvas" ref={canvasElement} />
    </header>
  );
}

export default Header;
