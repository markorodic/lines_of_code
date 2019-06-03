import React from "react";
import { useContainerProperties } from "../customHooks";
import { useRenderGestureView } from "./Header.customHooks";
import { useInterfaceState } from "../Interface.customHooks";

function Header(props) {
  const HeaderElement = React.useRef();
  const canvasElement = React.useRef();
  const containerProperties = useContainerProperties(HeaderElement);
  const { userActive } = useInterfaceState();

  useRenderGestureView(
    containerProperties.width,
    containerProperties.height,
    canvasElement,
    userActive
  );
  return (
    <header className="header" ref={HeaderElement}>
      {!props.userActive && <p>line</p>}
      <canvas id="canvas" ref={canvasElement} />
    </header>
  );
}

export default Header;
