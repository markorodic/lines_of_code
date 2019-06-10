import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { executeCommand } from "../CodeEditor.commands";
import { initialCodeState } from "../initialCode";
import {
  markGutterIcon,
  markText,
  relativeLinesOn
} from "../CodeEditor.markerHelpers";

function CodeEditor({
  command,
  mode,
  editor,
  setEditor,
  cursorPosition,
  clipBoard
}) {
  const [prevCommandId, setPrevCommandId] = React.useState(0);
  React.useEffect(() => {
    // check the command id against the previous command passed down
    // otherwise command will execute each time command is passed down
    // which, due to RAF being in the root if happening on every count
    if (prevCommandId === command.id) {
      executeCommand(editor, command, cursorPosition, clipBoard);
      setPrevCommandId(prevCommandId + 1);
    }
  }, [editor, command]);

  React.useEffect(() => {
    relativeLinesOn(editor);
  }, [editor]);

  React.useEffect(() => {
    markGutterIcon(editor, cursorPosition, "cursor");
  }, [editor, cursorPosition]);

  React.useEffect(() => {
    markText(editor, mode, cursorPosition, command);
  }, [editor, cursorPosition, command, mode]);

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
