import React from "react";
// import { markGutter, relativeLinesOn } from "./CodeEditor.markerHelpers";
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
    if (editor && !gestureActive && mode === "Motion") {
      const lineNumber = editor.getCursor().line;
      const characterPosition = editor.getCursor().ch;
      setCursorPosition({ lineNumber, characterPosition });
    }
  }, [editor, mode, gesture, gestureActive]);

  return cursorPosition;
}

// export function useMarkGutter(editor, { lineNumber }) {
//   React.useEffect(() => {
//     if (editor) {
//       relativeLinesOn(editor);
//       markGutter(editor, lineNumber, "cursor");
//     }
//   }, [editor, lineNumber]);
// }

// export function useMarkCursor(editor, cursorPosition, { name }, props, mode) {
//   React.useEffect(() => {
//     if (editor) {
//       markCursor(editor, cursorPosition, name, mode);
//     }
//   }, [editor, props, cursorPosition, name, mode]);
// }

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
