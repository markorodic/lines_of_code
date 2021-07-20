import React, { useState, useEffect, useCallback } from "react";
import "./styles.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
import { UnControlled as CodeMirror } from "react-codemirror2";
import {
  setInitialCusor,
  clearMarks,
  addTextCursor,
  addOperationCursor,
  highlightLine,
} from "./helpers";
import { useGestureState } from "../../provider/customHooks";
import { codeEditorText } from "./codeText";
import { useCursorPosition } from "./customHooks";

const options = {
  lineNumbers: true,
  autofocus: true,
  lineWrapping: true,
  gutters: ["CodeMirror-linenumbers", "position"],
};

const EditorView = ({ editor, setEditor, cursorPosition }) => {
  const { mode, gestureActive, gesture } = useGestureState();

  useEffect(() => {
    setInitialCusor(editor);
  }, [editor]);

  // TODO: Split these up as text cursor is being updated additonal times
  useEffect(() => {
    if (editor) {
      clearMarks(editor);
      addTextCursor(editor, mode, cursorPosition);
      highlightLine(editor, cursorPosition, gesture, gestureActive);
      addOperationCursor(editor, cursorPosition);
    }
  }, [editor, cursorPosition, gesture, gestureActive, mode]);

  return (
    <CodeMirror
      value={codeEditorText}
      options={options}
      editorDidMount={(editor) => setEditor(editor)}
      className={"code-editor"}
    />
  );
};

export default EditorView;
