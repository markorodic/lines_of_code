import React from "react";
import { getExecutionCommandFrom } from "./Code.commands";
import { getCursorPosition } from "./Code.utils";
import {
  motionHasFinished,
  validExecution
} from "./codeEditor/CodeEditor.helpers";

export function useCursorPosition(editor, gestureActive, mode, gesture) {
  const [cursorPosition, setCursorPosition] = React.useState({
    lineNumber: 0,
    characterPosition: 0
  });

  React.useEffect(() => {
    if (editor) {
      editor.setCursor({ line: 0, ch: 0 });
    }
  }, [editor]);

  React.useEffect(() => {
    if (motionHasFinished(editor, gestureActive, mode)) {
      const { lineNumber, characterPosition } = getCursorPosition(editor);
      setCursorPosition({ lineNumber, characterPosition });
    }
  }, [editor, mode, gesture, gestureActive]);

  return cursorPosition;
}

export function useCommand(gesture, userActive) {
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState(0);

  React.useEffect(() => {
    if (validExecution(gesture, userActive)) {
      setName(getExecutionCommandFrom(gesture));
      setId(id => id + 1);
    }
  }, [gesture, userActive]);

  return {
    name,
    id
  };
}

export function useClipboard(editor, gesture, cursorPosition) {
  const [clipBoard, setClipBoard] = React.useState("");
  React.useEffect(() => {
    if (gesture.name === "copy" || gesture.name === "cut") {
      const lineContent = editor.getLine(cursorPosition.lineNumber);
      setClipBoard(lineContent);
    }
  }, [editor, gesture, cursorPosition]);

  return clipBoard;
}