import React from "react";
import { useContainerProperties } from "../customHooks";
import { useRenderGestureView } from "./Header.customHooks";
import { useInterfaceState } from "../Interface.customHooks";

function Header(props) {
  const HeaderElement = React.useRef();
  const canvasElement = React.useRef();
  const containerProperties = useContainerProperties(HeaderElement);
  const { userActive, gesture } = useInterfaceState();

  useRenderGestureView(
    containerProperties.width,
    containerProperties.height,
    canvasElement,
    userActive,
    gesture
  );
  return (
    <header className="header" ref={HeaderElement}>
      {!userActive && <p>Project 1</p>}
      {/* <div className="icons"> */}
      <canvas id="canvas" ref={canvasElement} />
      {/* </div> */}
    </header>
  );
}

export default Header;
