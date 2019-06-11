import React from "react";
import styles from "./Header.module.css";
import { useContainerProperties } from "../../sharedCustomHooks";
import { useCreateCanvasContext } from "./Header.customHooks";
import { useInterfaceGestureState } from "../Interface.customHooks";
import { displayOperatorPatterns } from "./HeaderHelpers";

function Header() {
  const HeaderElement = React.useRef();
  const canvasElement = React.useRef();
  const containerProperties = useContainerProperties(HeaderElement);
  const { userActive, gesture } = useInterfaceGestureState();
  const ctx = useCreateCanvasContext(containerProperties, canvasElement);

  React.useEffect(() => {
    displayOperatorPatterns(ctx, containerProperties, gesture, userActive);
  }, [ctx, containerProperties, gesture, userActive]);

  return (
    <header className={styles.header} ref={HeaderElement}>
      {!userActive && <p>Project 1</p>}
      <canvas id={styles.canvas} ref={canvasElement} />
    </header>
  );
}

export default Header;
