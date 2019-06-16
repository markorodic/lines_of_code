import React from "react";
import "./CodeEditor.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { executeCommand } from "../Code.commands";
import {
  instructionsText,
  initialCodeText,
  finalCodeState,
  taskCompleteCodeText
} from "./codeText";
import {
  markGutterIcon,
  markText,
  relativeLinesOn
} from "./CodeEditor.helpers";
import { useCursorPosition, useClipboard } from "../Code.customHooks";
import {
  useInterfaceGestureState,
  useInterfaceGestureDispatch
} from "../../Interface.customHooks";

function CodeEditor({ command, history, setHistory }) {
  const {
    gesture,
    userActive,
    mode,
    gestureActive,
    resetCodeText,
    codeState
  } = useInterfaceGestureState();
  const { setResetCodeText, setCodeState } = useInterfaceGestureDispatch();

  const [editor, setEditor] = React.useState(null);
  const cursorPosition = useCursorPosition(
    editor,
    gestureActive,
    mode,
    gesture
  );
  const clipboard = useClipboard(editor, gesture, cursorPosition);

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
    setHistory,
    codeState
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
      if (editor.getValue() === finalCodeState && codeState === "Code") {
        setCodeState("Finished");
      }
    }
  }, [editor, command, codeState]);

  React.useEffect(() => {
    if (editor && resetCodeText) {
      editor.setValue(initialCodeText);
      setResetCodeText();
    }
  }, [editor, resetCodeText]);

  React.useEffect(() => {
    if (editor) {
      switch (codeState) {
        case "Instructions":
          editor.setValue(instructionsText);
          break;
        case "Code":
          editor.setValue(initialCodeText);
          break;
        case "Completed":
          editor.setValue(taskCompleteCodeText);
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
