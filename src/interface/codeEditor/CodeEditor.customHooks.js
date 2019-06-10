import React from "react";
import { executeCommand, executeOperatorCommand } from "./CodeEditor.commands";

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

export function useExecuteMotionCommand(editor, gesture) {
  React.useEffect(() => {
    if (gesture.id) {
      executeCommand(gesture, editor);
    }
  }, [gesture.id, editor, gesture]);
}

export function useExecuteOperatorCommand(
  editor,
  cursorPosition,
  gesture,
  userActive,
  mode
) {
  React.useEffect(() => {
    if (!userActive && mode === "Operator") {
      executeOperatorCommand(gesture, editor, cursorPosition);
    }
  }, [editor, gesture, userActive, mode, cursorPosition]);
}

function motionHasFinished(editor, gestureActive, mode) {
  return editor && !gestureActive && mode === "Motion";
}

// ** helpers **
// -------------
function getCursorPosition(editor) {
  const lineNumber = editor.getCursor().line;
  const characterPosition = editor.getCursor().ch;
  return { lineNumber, characterPosition };
}
