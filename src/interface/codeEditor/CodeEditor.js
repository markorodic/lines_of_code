import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { initialCodeState } from "./initialCode";
import { useUpdateCursor, useExecuteCommand } from "./CodeEditor.customHooks";

function CodeEditor(props) {
  const [editor, setEditor] = React.useState(null);

  useExecuteCommand(editor, props);
  useUpdateCursor(editor, props);

  return (
    <div className="code">
      <CodeMirror
        value={initialCodeState}
        options={{ lineNumbers: true, autofocus: true, lineWrapping: true }}
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
