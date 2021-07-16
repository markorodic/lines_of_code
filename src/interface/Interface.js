import React from "react";
import styles from "./Interface.module.css";
import logo from "../assets/logo.svg";
import Header from "./header/Header";
import CodeEditor from "./codeEditor";
import GesturePad from "./gesturePad/GesturePad";
import { InterfaceGestureProvider } from "./Interface.gestureContext";
import { InterfaceCountProvider } from "./Interface.countContext";

export default function Interface() {
  return (
    <div className={styles.interface}>
      <img className={styles["bg-logo"]} src={logo} alt="" />
      <InterfaceCountProvider>
        <InterfaceGestureProvider>
          <Header />
          <section className={styles.view}>
            <CodeEditor />
            <GesturePad />
          </section>
        </InterfaceGestureProvider>
      </InterfaceCountProvider>
    </div>
  );
}
