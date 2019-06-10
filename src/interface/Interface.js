import React from "react";
import logo from "../assets/logo.svg";
import Header from "./header/Header";
import CodeEditor from "./codeEditor/CodeEditor";
import GesturePad from "./gesturePad/GesturePad";
import { InterfaceProvider } from "./Interface.context";
import styles from "./Interface.module.css";

export default function Interface() {
  return (
    <div className={styles.interface}>
      <img src={logo} alt="" />
      <InterfaceProvider>
        <Header />
        <section className={styles.view}>
          <CodeEditor />
          <GesturePad />
        </section>
      </InterfaceProvider>
    </div>
  );
}
