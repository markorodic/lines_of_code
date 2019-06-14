import React from "react";
import { Mixpanel } from "../../mixpanel";
import restartIcon from "../../../assets/restart_icon.svg";
import playIcon from "../../../assets/play_icon.svg";
import finishIcon from "../../../assets/finish_icon.svg";
import emailIcon from "../../../assets/email_icon.svg";

function TaskButton({ codeState, setCodeState, setResetCodeText }) {
  switch (codeState) {
    case "Instructions":
      return (
        <button
          onClick={() => {
            console.log("Start");
            Mixpanel.track("Video play");
            setCodeState("Code");
          }}
        >
          <img src={playIcon} alt="" />
        </button>
      );
    case "Code":
      return (
        <button
          onClick={() => {
            console.log("Restart code");
            setResetCodeText();
          }}
        >
          <img src={restartIcon} alt="" />
        </button>
      );
    case "Finished":
      return (
        <button
          onClick={() => {
            console.log("End");
            setCodeState("Completed");
          }}
        >
          <img src={finishIcon} alt="" />
        </button>
      );
    case "Completed":
      return (
        <button
          onClick={() => {
            console.log("Email");
            setCodeState("Instructions");
          }}
        >
          <a
            href={`mailto:mrmarkorodic@gmail.com?subject=Hey 👋&body=Question 1%20%3A%0D%0AQuestion 2%20%3A%0D%0AQuestion 3%20%3A`}
          >
            <img src={emailIcon} alt="" />
          </a>
        </button>
      );
    default:
      return null;
  }
}

export default TaskButton;
