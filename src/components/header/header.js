import React from "react";
import styles from "./Header.module.css";
import { useInterfaceGestureState } from "../../provider/customHooks";

function Header() {
  const { gesture } = useInterfaceGestureState();

  return (
    <header className={styles.header}>
      <p>Lines</p>
    </header>
  );
}

export default Header;
