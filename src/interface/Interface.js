import React from "react";
import styles from "./Interface.module.css";
import logo from "../assets/logo.svg";
import Header from "./header/Header";
import CodeEditor from "./codeEditor/CodeEditor";
import GesturePad from "./gesturePad/GesturePad";
import { InterfaceGestureProvider } from "./Interface.gestureContext";
import { InterfaceCountProvider } from "./Interface.countContext";
import ModalTaskCompleted from "./modal/ModalTaskCompleted";

export default function Interface() {
  const [taskCompleted, setTaskCompleted] = React.useState(false);

  return (
    <div className={styles.interface}>
      <img className={styles["bg-logo"]} src={logo} alt="" />
      <InterfaceCountProvider>
        {taskCompleted && <ModalTaskCompleted />}
        <InterfaceGestureProvider>
          <Header />
          <section className={styles.view}>
            <CodeEditor setTaskCompleted={setTaskCompleted} />
            <GesturePad />
          </section>
        </InterfaceGestureProvider>
      </InterfaceCountProvider>
    </div>
  );
}
