import React from "react";
import { Mixpanel } from "../../mixpanel";
import restartIcon from "../../../assets/restart_icon.svg";
import playIcon from "../../../assets/play_icon.svg";
import finishIcon from "../../../assets/finish_icon.svg";
import emailIcon from "../../../assets/email_icon.svg";
import { question } from "./emailQuestions/EmailQuestions";

function TaskButton({
  codeState,
  setCodeState,
  setResetCodeText,
  time,
  setTime
}) {
  switch (codeState) {
    case "Instructions":
      return (
        <button
          onClick={() => {
            Mixpanel.track("Start Challenge");
            const duration = new Date().getTime();
            setTime(duration);
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
            const duration = new Date().getTime() - time;
            const durationInSeconds = Math.floor(duration / 1000);
            Mixpanel.track("Restart Challenge", {
              Duration: durationInSeconds
            });
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
            const duration = new Date().getTime() - time;
            const durationInSeconds = Math.floor(duration / 1000);
            Mixpanel.track("End Challenge", {
              Duration: durationInSeconds
            });
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
            setCodeState("Instructions");
          }}
        >
          <a
            href={`mailto:mrmarkorodic@gmail.com?subject=Hey 👋&body=${
              question.one
            }%0D%0A%0D%0A${question.two}%20%3A%0D%0A${
              question.three
            }%20%3A%0D%0A${question.four}%20%3A%0D%0A${
              question.five
            }%20%3A%0D%0A${question.six}%20%3A%0D%0A${
              question.seven
            }%20%3A%0D%0A${question.ten}%20%3A`}
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
