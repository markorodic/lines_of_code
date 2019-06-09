import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { executeCommand, executeOperatorCommand } from "../CodeEditor.commands";
import { initialCodeState } from "../initialCode";
import { useCursorPosition } from "../CodeEditor.customHooks";
import { useInterfaceState } from "../../Interface.customHooks";
import { markGutter, markCursor, relativeLinesOn } from "../CodeEditor.helpers";

function CodeEditor({ command }) {
  const [editor, setEditor] = React.useState(null);
  const [clipBoard, setClipBoard] = React.useState("");
  const { gesture, gestureActive, userActive, mode } = useInterfaceState();
  const cursorPosition = useCursorPosition(
    editor,
    gestureActive,
    mode,
    gesture
  );

  // ** mark text **
  // ---------
  //   React.useEffect(() => {
  //     if (editor) {
  //       relativeLinesOn(editor);
  //       markGutter(editor, cursorPosition, "cursor");
  //     }
  //     if (editor) {
  //       markCursor(editor, cursorPosition, gesture, mode);
  //     }
  //   }, [editor, cursorPosition, gesture, mode]);

  React.useEffect(() => {
    if (editor) {
      execute(editor, command, cursorPosition);
    }
  }, [editor, command, cursorPosition]);

  //   // execute commands
  //   React.useEffect(() => {
  //     if (gesture.id) {
  //       executeCommand(gesture, editor);
  //     }
  //   }, [gesture.id, editor, gesture]);

  //   // execute operator command
  //   React.useEffect(() => {
  //     if (!userActive && mode === "Operator") {
  //       executeOperatorCommand(gesture, editor, cursorPosition, clipBoard);
  //     }
  //     return () => {
  //       if (mode === "Operator") {
  //       }
  //     };
  //   }, [editor, gesture, userActive, mode, cursorPosition, clipBoard]);

  // setting clipboard state
  // -----------------------
  //   React.useEffect(() => {
  //     if (gesture.name === "copy" || gesture.name === "cut") {
  //       const lineContent = editor.getLine(cursorPosition.lineNumber);
  //       setClipBoard(lineContent);
  //     }
  //   }, [editor, gesture, cursorPosition]);

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

// ** utils **
// -----------
function execute(editor, command, { lineNumber }, clipBoard) {
  switch (command) {
    case "moveLineUp":
      editor.execCommand("goLineUp");
      break;
    case "moveLineDown":
      editor.execCommand("goLineDown");
      break;
    case "deleteLine":
      setCursor(editor, lineNumber);
      editor.execCommand("deleteLine");
      break;
    case "pasteFromClipboard":
      setCursor(editor, lineNumber);
      editor.execCommand("newlineAndIndent");
      setCursor(editor, lineNumber);
      editor.replaceSelection(clipBoard);
      break;
    default:
      return;
  }
}

// ** helper functions **
// ----------------------
function setCursor(editor, lineNumber) {
  editor.setCursor({
    line: lineNumber,
    ch: 0
  });
}

export default CodeEditor;
