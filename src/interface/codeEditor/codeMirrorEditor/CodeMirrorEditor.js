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
import {
  markGutterIcon,
  markText,
  relativeLinesOn
} from "../CodeEditor.markerHelpers";

function CodeEditor({ command, gesture }) {
  const [editor, setEditor] = React.useState(null);
  const [clipBoard, setClipBoard] = React.useState("");
  const { gestureActive, userActive, mode } = useInterfaceState();
  const cursorPosition = useCursorPosition(
    editor,
    gestureActive,
    mode,
    gesture
  );

  React.useEffect(() => {
    executeCommand(gesture, editor);
  }, [gesture.id, editor, gesture]);

  React.useEffect(() => {
    relativeLinesOn(editor);
  }, [editor]);

  React.useEffect(() => {
    markGutterIcon(editor, cursorPosition, "cursor");
  }, [editor, cursorPosition]);

  React.useEffect(() => {
    markText(editor, mode, cursorPosition, gesture);
  }, [editor, cursorPosition, gesture, mode]);

  // setting clipboard state
  // -----------------------
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

// ** utils **
// -----------
function execute(editor, { name }, { lineNumber }, clipBoard) {
  switch (name) {
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
