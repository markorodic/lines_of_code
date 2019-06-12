import React from "react";
import CodeMirrorEditor from "./codeMirrorEditor/CodeMirrorEditor";
import { useInterfaceGestureState } from "../Interface.customHooks";
import {
  useCursorPosition,
  useCommand,
  useClipboard
} from "./CodeEditor.customHooks";

function CodeEditor({ setTaskCompleted }) {
  const {
    gesture,
    userActive,
    mode,
    gestureActive
  } = useInterfaceGestureState();
  const [editor, setEditor] = React.useState(null);
  const command = useCommand(gesture, userActive);
  const cursorPosition = useCursorPosition(
    editor,
    gestureActive,
    mode,
    gesture
  );
  const clipboard = useClipboard(editor, gesture, cursorPosition);

  // TODO: userActive should not be passed to CodeMirrorEditor
  return (
    <div className="code">
      <CodeMirrorEditor
        command={command}
        mode={mode}
        editor={editor}
        setEditor={setEditor}
        cursorPosition={cursorPosition}
        clipboard={clipboard}
        userActive={userActive}
        setTaskCompleted={setTaskCompleted}
      />
    </div>
  );
}

export default CodeEditor;
