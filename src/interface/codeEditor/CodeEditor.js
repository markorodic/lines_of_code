import React from "react";
import CodeMirrorEditor from "./codeMirrorEditor/CodeMirrorEditor";
import { useInterfaceState } from "../Interface.customHooks";
import { executeCommand } from "./CodeEditor.commands";

function CodeEditor(props) {
  const { gesture, userActive, mode } = useInterfaceState();
  const command = useCommand(gesture, userActive);

  React.useEffect(() => {}, [gesture]);

  return (
    <div className="code">
      <CodeMirrorEditor command={command} mode={mode} />
    </div>
  );
}

// ** utils **
// -----------
function useCommand(gesture, userActive) {
  const [command, setCommand] = React.useState("");

  React.useEffect(() => {
    if (validExecution(gesture, userActive)) {
      setCommand(executionCommand(gesture));
    }
  }, [gesture, userActive]);

  return command;
}

function validExecution({ id, type }, userActive) {
  const validMotionExecution = id && type === "Motion";
  const validOperationExecution = !userActive && type === "Operator";
  return validMotionExecution || validOperationExecution;
}

export function executionCommand({ name }) {
  switch (name) {
    case "up":
      return "moveLineUp";
    case "down":
      return "moveLineDown";
    case "next":
      return "moveLineDown";
    case "previous":
      return "moveLineUp";
    case "delete":
      return "deleteLine";
    case "cut":
      return "deleteLine";
    case "paste":
      return "pasteFromClipboard";
    case "copy":
      return "copyToClipboard";
    default:
      return;
  }
}

export default CodeEditor;
