import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { initialCodeState } from "./initialCode";
import { useMarkGutter, useMarkCursor } from "./CodeEditor.customHooks";
import { useInterfaceState } from "../Interface.customHooks";
import { useCursorPosition } from "./CodeEditor.customHooks";
import { executeCommand, executeOperatorCommand } from "./CodeEditor.commands";

function CodeEditor(props) {
  const [editor, setEditor] = React.useState(null);
  const [clipBoard, setClipBoard] = React.useState("");
  const { gesture, gestureActive, userActive, mode } = useInterfaceState();
  const cursorPosition = useCursorPosition(
    editor,
    gestureActive,
    mode,
    gesture
  );

  React.useEffect(() => {
    if (gesture.id) {
      executeCommand(gesture, editor);
    }
  }, [gesture.id, editor, gesture]);

  React.useEffect(() => {
    if (!userActive && mode === "Operator") {
      executeOperatorCommand(gesture, editor, cursorPosition, clipBoard);
    }
  }, [editor, gesture, userActive, mode, cursorPosition, clipBoard]);

  useMarkGutter(editor, cursorPosition);
  useMarkCursor(editor, cursorPosition, gesture, props, mode);

  React.useEffect(() => {
    if (gesture.name === "copy" || gesture.name === "cut") {
      const lineContent = editor.getLine(cursorPosition.lineNumber);
      setClipBoard(lineContent);
    }
  }, [editor, gesture, cursorPosition]);

  return (
    <div className="code">
      <CodeMirror
        value={initialCodeState}
        options={{
          lineNumbers: true,
          autofocus: true,
          lineWrapping: true,
          gutters: ["CodeMirror-linenumbers", "position"]
        }}
        onChange={() => {}}
        editorDidMount={editor => {
          setEditor(editor);
        }}
        className={"code-editor"}
      />
    </div>
  );
}

export default CodeEditor;
