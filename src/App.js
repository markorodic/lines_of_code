import React, { useEffect } from "react";
import { setCSSCustomProperty } from "./utils";
import { preventRefreshOnMobile } from "./utils";
import "./app.css";
import styles from "./Interface.module.css";
import logo from "./assets/logo.svg";
import Header from "./components/header";
import CodeEditor from "./components/codeEditor";
import GesturePad from "./components/gesturePad";
import { GestureProvider } from "./provider/gestureContext";

const App = () => {
  useEffect(() => {
    // rework this function to not be a copy/paste job
    setCSSCustomProperty();
    // understand what is going on here
    preventRefreshOnMobile();
  }, []);

  return (
    <div className={styles.interface}>
      <img className={styles["bg-logo"]} src={logo} alt="" />
      <GestureProvider>
        <Header />
        <section className={styles.view}>
          <CodeEditor />
          <GesturePad />
        </section>
      </GestureProvider>
    </div>
  );
};

export default App;
