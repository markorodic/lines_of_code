import React from "react";
import "./CodeView.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
import { UnControlled as CodeMirror } from "react-codemirror2";
import {
  instructionsText,
  initialCodeText,
  taskCompleteCodeText
} from "../codeText";

function CodeView({
  editor,
  setEditor,
  codeState,
  resetCodeText,
  setResetCodeText
}) {
  React.useEffect(() => {
    if (editor) {
      const editorText = textToDisplay(editor, codeState);
      editor.setValue(editorText);
    }
  }, [editor, codeState]);
  React.useEffect(() => {
    if (editor && resetCodeText) {
      editor.setValue(initialCodeText);
      setResetCodeText();
    }
  }, [editor, resetCodeText]);

  return (
    <div className="code">
      <CodeMirror
        value={instructionsText}
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

function textToDisplay(editor, codeState) {
  switch (codeState) {
    case "Instructions":
      return instructionsText;
    case "Code":
      return initialCodeText;
    case "Finished":
      return taskCompleteCodeText;
    default:
      return "";
  }
}

export default CodeView;
