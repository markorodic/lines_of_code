import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { initialCodeState } from "./initialCode";
import {
  useMarkGutter,
  useMarkCursor,
  useExecuteCommand,
  useMarkLineOperator
} from "./CodeEditor.customHooks";
import { useInterfaceState } from "../Interface.customHooks";

function CodeEditor(props) {
  const [editor, setEditor] = React.useState(null);
  const [cursorPosition, setCursorPosition] = React.useState({
    line: 0,
    ch: 0
  });
  const { gesture, gestureActive, mode } = useInterfaceState();

  useExecuteCommand(editor, gesture);
  useMarkGutter(editor, cursorPosition.line);
  useMarkCursor(editor, props, cursorPosition, mode);

  React.useEffect(() => {
    if (editor && !gestureActive) {
      // set the cursor state, which keeps track of where we are
      if (mode === "motion") {
        const line = editor.getCursor().line;
        const ch = editor.getCursor().ch;
        setCursorPosition({ line, ch });
      }
    }
  }, [gestureActive, editor, mode]);

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
