import React, { useEffect } from "react";
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
import { useGesture } from "../../provider/customHooks";
import { codeEditorText } from "./codeText";

const options = {
  lineNumbers: true,
  autofocus: true,
  lineWrapping: true,
  gutters: ["CodeMirror-linenumbers", "position"],
};

// Typing the Codemirror editor as any as it doesn't have TS support currently
interface Props {
  editor: any;
  setEditor: (value: any) => void;
  cursorPosition: number;
}

const EditorView = ({ editor, setEditor, cursorPosition }: Props) => {
  const {
    state: { mode, gestureActive, gesture },
  } = useGesture();

  useEffect(() => {
    setInitialCusor(editor);
  }, [editor]);

  useEffect(() => {
    if (editor) {
      clearMarks(editor);
      addTextCursor(editor, mode);
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
