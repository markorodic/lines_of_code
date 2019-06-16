import React from "react";
import CodeEditor from "./codeEditor/CodeEditor";
import { useInterfaceGestureState } from "../Interface.customHooks";
import { useCommand } from "./Code.customHooks";

function CodeCommands() {
  const { gesture } = useInterfaceGestureState();
  const command = useCommand(gesture);
  const [history, setHistory] = React.useState(null);

  return (
    <div className="code">
      <CodeEditor command={command} history={history} setHistory={setHistory} />
    </div>
  );
}

export default CodeCommands;
