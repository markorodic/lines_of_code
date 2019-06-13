import React from "react";
import styles from "./Header.module.css";
import { useContainerProperties } from "../../sharedCustomHooks";
import { useCreateCanvasContext } from "./Header.customHooks";
import {
  useInterfaceGestureState,
  useInterfaceGestureDispatch
} from "../Interface.customHooks";
import { displayOperatorPatterns } from "./HeaderHelpers";
import restartIcon from "../../assets/restart_icon.svg";

function Header() {
  const HeaderElement = React.useRef();
  const canvasElement = React.useRef();
  const containerProperties = useContainerProperties(HeaderElement);
  const { userActive, gesture } = useInterfaceGestureState();
  const { setResetCodeText } = useInterfaceGestureDispatch();
  const ctx = useCreateCanvasContext(containerProperties, canvasElement);

  React.useEffect(() => {
    displayOperatorPatterns(ctx, containerProperties, gesture, userActive);
  }, [ctx, containerProperties, gesture, userActive]);

  return (
    <header className={styles.header} ref={HeaderElement}>
      {!userActive && (
        <section>
          <button onClick={() => setResetCodeText()}>
            <img
              className={styles["restart-button"]}
              src={restartIcon}
              alt=""
            />
          </button>
          <p>Lines</p>
        </section>
      )}
      <canvas id={styles.canvas} ref={canvasElement} />
    </header>
  );
}

export default Header;
