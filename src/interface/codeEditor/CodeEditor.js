import React from "react";
import CodeMirrorEditor from "./codeMirrorEditor/CodeMirrorEditor";
import { useInterfaceState } from "../Interface.customHooks";
import { executeCommand } from "./CodeEditor.commands";

function CodeEditor(props) {
  const { gesture, userActive, mode } = useInterfaceState();
  const command = useCommand(gesture, userActive);

  return (
    <div className="code">
      <CodeMirrorEditor command={command} mode={mode} gesture={gesture} />
    </div>
  );
}

// ** utils **
// -----------
function useCommand(gesture, userActive) {
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState(0);

  React.useEffect(() => {
    if (validExecution(gesture, userActive)) {
      setName(executionCommand(gesture));
      setId(id + 1);
    }
  }, [gesture, userActive]);

  return {
    name,
    id
  };
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
