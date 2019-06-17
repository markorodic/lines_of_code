import React from "react";
import {
  executeOperationCommand,
  executeMotionCommand
} from "../Code.commands";
import {
  markGutterIcon,
  markText,
  relativeLinesOn
} from "./CodeEditor.helpers";
import { useCursorPosition, useClipboard } from "../Code.customHooks";
import {
  useInterfaceGestureState,
  useInterfaceGestureDispatch
} from "../../Interface.customHooks";
import CodeView from "./codeView/CodeView";
import { finalCodeState } from "./codeText";

function CodeEditor() {
  const {
    userActive,
    mode,
    gestureActive,
    resetCodeText,
    codeState,
    gesture
  } = useInterfaceGestureState();
  const { setResetCodeText, setCodeState } = useInterfaceGestureDispatch();
  const [editor, setEditor] = React.useState(null);
  const cursorPosition = useCursorPosition(
    editor,
    gestureActive,
    mode,
    gesture
  );
  const clipboard = useClipboard(editor, gesture, cursorPosition);

  // execute commands
  React.useEffect(() => {
    executeMotionCommand(editor, gesture);
  }, [editor, gesture]);

  React.useEffect(() => {
    executeOperationCommand(
      editor,
      gesture,
      cursorPosition,
      clipboard,
      userActive
    );
  }, [editor, gesture, cursorPosition, clipboard, userActive]);

  // mark text
  React.useEffect(() => {
    relativeLinesOn(editor);
  }, [editor]);

  React.useEffect(() => {
    markGutterIcon(editor, cursorPosition, "cursor");
  }, [editor, cursorPosition]);

  React.useEffect(() => {
    markText(editor, mode, cursorPosition, gesture, userActive);
  }, [editor, cursorPosition, gesture, mode, userActive]);

  // check text value
  React.useEffect(() => {
    if (editor) {
      if (editor.getValue() === finalCodeState && codeState === "Code") {
        setCodeState("Finished");
      }
    }
  }, [editor, gesture, codeState]);

  return (
    <div className="code">
      <CodeView
        setEditor={setEditor}
        editor={editor}
        codeState={codeState}
        resetCodeText={resetCodeText}
        setResetCodeText={setResetCodeText}
      />
    </div>
  );
}

export default CodeEditor;
