import React, { useState, useEffect } from "react";
import "./styles.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
import { UnControlled as CodeMirror } from "react-codemirror2";
import {
  gestureToOperation,
  gestureToCommand,
  NEW_LINE_AND_INDENT,
} from "./commands";
import {
  markGutterIcon,
  markText,
  relativeLinesOn,
  setCursor,
} from "./helpers";
import { useInterfaceGestureState } from "../Interface.customHooks";
import { codeEditorText } from "./codeText";
import { motionHasFinished } from "./helpers";
import { getCursorPosition } from "./utils";

const cursorInitialState = {
  lineNumber: 0,
  characterPosition: 0,
};

const options = {
  lineNumbers: true,
  autofocus: true,
  lineWrapping: true,
  gutters: ["CodeMirror-linenumbers", "position"],
};

function CodeEditor() {
  const { userActive, mode, gestureActive, gesture } =
    useInterfaceGestureState();

  const [editor, setEditor] = useState(null);
  const [cursorPosition, setCursorPosition] = useState(cursorInitialState);
  const [clipBoard, setClipBoard] = useState("");
  const motionEntered = motionHasFinished(gestureActive, mode) && editor;

  // update the cursor position state
  useEffect(() => {
    if (motionEntered) {
      setCursorPosition(getCursorPosition(editor));
    }
  }, [editor, gesture, motionEntered]);

  // update the clipboard state
  useEffect(() => {
    if (gesture.name === "copy" || gesture.name === "cut") {
      const lineContent = editor.getLine(cursorPosition.lineNumber);
      setClipBoard(lineContent);
    }
  }, [editor, gesture, cursorPosition]);

  // execute commands
  useEffect(() => {
    const motionCommand = gestureToCommand[gesture.name];
    if (motionCommand) editor.execCommand(motionCommand);
  }, [editor, gesture]);

  useEffect(() => {
    const operationCommand = gestureToOperation[gesture.name];
    if (!userActive && operationCommand) {
      setCursor(editor, cursorPosition.lineNumber);
      editor.execCommand(operationCommand);
    }
    if (!userActive && operationCommand === NEW_LINE_AND_INDENT) {
      setCursor(editor, cursorPosition.lineNumber);
      editor.replaceSelection(clipBoard);
    }
  }, [editor, gesture, cursorPosition, clipBoard, userActive]);

  // mark text
  useEffect(() => {
    markText(editor, mode, cursorPosition, gesture, userActive);
  }, [editor, cursorPosition, gesture, mode, userActive]);

  useEffect(() => {
    relativeLinesOn(editor);
    if (editor) {
      editor.setCursor({ line: 0, ch: 0 });
    }
  }, [editor]);

  useEffect(() => {
    markGutterIcon(editor, cursorPosition, "cursor");
  }, [editor, cursorPosition]);

  return (
    <div className="code">
      <CodeMirror
        value={codeEditorText}
        options={options}
        editorDidMount={(editor) => {
          setEditor(editor);
        }}
        className={"code-editor"}
      />
    </div>
  );
}

export default CodeEditor;
