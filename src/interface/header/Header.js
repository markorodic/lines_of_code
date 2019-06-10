import React from "react";
import { useContainerProperties } from "../../sharedCustomHooks";
import { useCreateCanvasContext } from "./Header.customHooks";
import { useInterfaceState } from "../Interface.customHooks";
import { clearCanvas, displayOperatorPatterns } from "./HeaderHelpers";

function Header(props) {
  const HeaderElement = React.useRef();
  const canvasElement = React.useRef();
  const containerProperties = useContainerProperties(HeaderElement);
  const { userActive, gesture } = useInterfaceState();
  const ctx = useCreateCanvasContext(containerProperties, canvasElement);

  React.useEffect(() => {
    displayOperatorPatterns(ctx, containerProperties, gesture, userActive);
  }, [ctx, containerProperties, gesture, userActive]);

  return (
    <header className="header" ref={HeaderElement}>
      {!userActive && <p>Project 1</p>}
      <canvas id="canvas" ref={canvasElement} />
    </header>
  );
}

export default Header;
