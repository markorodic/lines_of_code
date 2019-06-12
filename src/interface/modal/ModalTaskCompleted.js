import React from "react";
import styles from "./ModalTaskCompleted.module.css";

function CompletedModal() {
  return (
    <div className={styles["completed-bg"]}>
      <div className={styles["completed-modal"]}>
        <span role="img">Task Completed! 🥳</span>
      </div>
    </div>
  );
}

export default CompletedModal;
