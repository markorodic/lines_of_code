import React from "react";
import CodeMirrorEditor from "./codeMirrorEditor/CodeMirrorEditor";
import {
  useInterfaceGestureState,
  useInterfaceGestureDispatch
} from "../Interface.customHooks";
import {
  useCursorPosition,
  useCommand,
  useClipboard
} from "./CodeEditor.customHooks";

function CodeEditor() {
  const {
    gesture,
    userActive,
    mode,
    gestureActive,
    resetCodeText,
    codeState
  } = useInterfaceGestureState();
  const { setResetCodeText, setCodeState } = useInterfaceGestureDispatch();
  const [editor, setEditor] = React.useState(null);
  const [history, setHistory] = React.useState(null);
  const command = useCommand(gesture, userActive);
  const cursorPosition = useCursorPosition(
    editor,
    gestureActive,
    mode,
    gesture,
    codeState
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
        history={history}
        setHistory={setHistory}
        resetCodeText={resetCodeText}
        setResetCodeText={setResetCodeText}
        codeState={codeState}
        setCodeState={setCodeState}
      />
    </div>
  );
}

export default CodeEditor;
