import React from "react";
import CodeMirrorEditor from "./codeMirrorEditor/CodeMirrorEditor";
import { useInterfaceState } from "../Interface.customHooks";
import { useCursorPosition, useCommand } from "./CodeEditor.customHooks";

function CodeEditor() {
  const { gesture, userActive, mode, gestureActive } = useInterfaceState();
  const [editor, setEditor] = React.useState(null);
  const command = useCommand(gesture, userActive);
  const cursorPosition = useCursorPosition(
    editor,
    gestureActive,
    mode,
    gesture
  );
  const clipBoard = useClipboard(editor, gesture, cursorPosition);

  return (
    <div className="code">
      <CodeMirrorEditor
        command={command}
        mode={mode}
        editor={editor}
        setEditor={setEditor}
        cursorPosition={cursorPosition}
        clipBoard={clipBoard}
      />
    </div>
  );
}

function useClipboard(editor, gesture, cursorPosition) {
  // const [clipBoard, setClipBoard] = React.useState("");
  // React.useEffect(() => {
  //   if (gesture.name === "copy" || gesture.name === "cut") {
  //     const lineContent = editor.getLine(cursorPosition.lineNumber);
  //     setClipBoard(lineContent);
  //   }
  // }, [editor, gesture, cursorPosition]);

  return "";
}

// ** utils **
// -----------

export default CodeEditor;
