import React from "react";
import "./CodeMirrorEditor.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { executeCommand } from "../CodeEditor.commands";
import {
  instructionsText,
  initialCodeText,
  finalCodeState,
  taskCompleteCodeText
} from "../initialCode";
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
  userActive,
  history,
  setHistory,
  resetCodeText,
  setResetCodeText,
  codeState,
  setCodeState
}) {
  const [prevCommandId, setPrevCommandId] = React.useState(0);
  React.useEffect(() => {
    // check the command id against the previous command passed down
    // otherwise command will execute each time command is passed down
    // which, due to RAF being in the root if happening on every count
    if (prevCommandId === command.id) {
      executeCommand(
        editor,
        command,
        cursorPosition,
        clipboard,
        userActive,
        history,
        setHistory
      );
      setPrevCommandId(prevCommandId => prevCommandId + 1);
    }
  }, [
    editor,
    command,
    cursorPosition,
    clipboard,
    prevCommandId,
    userActive,
    history,
    setHistory
  ]);

  React.useEffect(() => {
    relativeLinesOn(editor);
  }, [editor]);

  React.useEffect(() => {
    markGutterIcon(editor, cursorPosition, "cursor");
  }, [editor, cursorPosition]);

  React.useEffect(() => {
    markText(editor, mode, cursorPosition, command, userActive);
  }, [editor, cursorPosition, command, mode, userActive]);

  React.useEffect(() => {
    if (editor) {
      if (editor.getValue() === finalCodeState) {
        setCodeState("Completed");
      }
    }
  }, [editor, command]);

  React.useEffect(() => {
    if (editor && resetCodeText) {
      editor.setValue(initialCodeText);
      setResetCodeText();
    }
  }, [editor, resetCodeText]);

  React.useEffect(() => {
    if (editor) {
      console.log(codeState);
      switch (codeState) {
        case "Instructions":
          console.log("instructions");
          editor.setValue(instructionsText);
          break;
        case "Code":
          console.log("code");
          editor.setValue(initialCodeText);
          break;
        case "Completed":
          editor.setValue(taskCompleteCodeText);
          console.log("completed");
          break;
        default:
          break;
      }
    }
    // setResetCodeText();
  }, [editor, codeState]);

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

export default CodeEditor;
