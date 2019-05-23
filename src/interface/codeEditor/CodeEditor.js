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
  useExecuteCommand
} from "./CodeEditor.customHooks";

function CodeEditor(props) {
  const [editor, setEditor] = React.useState(null);
  const [cursorPosition, setCursorPosition] = React.useState({
    line: 0,
    ch: 0
  });

  useExecuteCommand(editor, props);
  useMarkGutter(editor, cursorPosition.line);
  useMarkCursor(editor, props, cursorPosition);

  React.useEffect(() => {
    if (editor && !props.gestureActive) {
      console.log(props.gestureActive);
      const line = editor.getCursor().line;
      const ch = editor.getCursor().ch;
      setCursorPosition({ line, ch });
    }
  }, [props.gestureActive, editor]);

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
