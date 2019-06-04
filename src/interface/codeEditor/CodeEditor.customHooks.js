import React from "react";
import { markGutter, markCursor, relativeLinesOn } from "./CodeEditor.helpers";
import { executeCommand } from "./CodeEditor.commands";

export function useCursorPosition(editor, gestureActive) {
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
    if (editor && !gestureActive) {
      const lineNumber = editor.getCursor().line;
      const characterPosition = editor.getCursor().ch;
      setCursorPosition({ lineNumber, characterPosition });
    }
  }, [gestureActive, editor]);

  return cursorPosition;
}

export function useMarkGutter(editor, { lineNumber }) {
  React.useEffect(() => {
    if (editor) {
      relativeLinesOn(editor);
      markGutter(editor, lineNumber, "cursor");
    }
  }, [editor, lineNumber]);
}

export function useMarkCursor(editor, cursorPosition, mode, props) {
  React.useEffect(() => {
    if (editor) {
      markCursor(editor, cursorPosition, mode);
    }
  }, [editor, props]);
}

export function useExecuteCommand(editor, gesture) {
  React.useEffect(() => {
    if (gesture.id) {
      executeCommand(gesture, editor);
    }
  }, [gesture.id]);
}

export function useMarkLineOperator(editor, mode, line) {}
