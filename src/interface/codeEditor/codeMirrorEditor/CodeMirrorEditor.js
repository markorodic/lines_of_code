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
} from "../CodeMirror.helpers";

function CodeEditor({
  command,
  mode,
  editor,
  setEditor,
  cursorPosition,
  clipboard,
  userActive
}) {
  const [prevCommandId, setPrevCommandId] = React.useState(0);
  React.useEffect(() => {
    // check the command id against the previous command passed down
    // otherwise command will execute each time command is passed down
    // which, due to RAF being in the root if happening on every count
    if (prevCommandId === command.id) {
      executeCommand(editor, command, cursorPosition, clipboard, userActive);
      setPrevCommandId(prevCommandId => prevCommandId + 1);
    }
  }, [editor, command, cursorPosition, clipboard, prevCommandId, userActive]);

  React.useEffect(() => {
    relativeLinesOn(editor);
  }, [editor]);

  React.useEffect(() => {
    markGutterIcon(editor, cursorPosition, "cursor");
  }, [editor, cursorPosition]);

  React.useEffect(() => {
    markText(editor, mode, cursorPosition, command, userActive);
  }, [editor, cursorPosition, command, mode, userActive]);

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
