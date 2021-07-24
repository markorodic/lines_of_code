import { gestureCommands } from "./commands";

export const executeCommand = (editor, gesture) => {
  const command = gestureCommands[gesture.name];
  editor.execCommand(command);
};

export const setCursorPosition = (editor, cursorPosition) =>
  editor.setCursor({
    line: cursorPosition,
    ch: 0,
  });

export const setInitialCusor = (editor) => {
  if (editor) {
    setCursorPosition(editor, 0);
    addOperationCursor(editor, 0);
  }
};

export const addOperationCursor = (editor, cursorPosition) => {
  editor.clearGutter("position");
  editor.setGutterMarker(cursorPosition, "position", makeMarker());
};

export const makeMarker = () => {
  const marker = document.createElement("div");
  marker.innerHTML = "●";
  marker.classList.add("position-gutter-marker");
  return marker;
};

export const clearMarks = (editor) => {
  if (editor.getAllMarks()[0]) {
    editor.getAllMarks()[0].clear();
  }
};

export const addTextCursor = (editor, mode, cursorPosition) => {
  clearMarks(editor);
  const line = editor.getCursor().line;
  if (mode === "Motion" || mode === "Inactive") {
    // TODO: cursor is moved to the cursor editor line (41) instead of the component cursor position
    // Can use gesture.type ==== "Operator", but this causes a bug on deletion
    editor.markText(
      { line, ch: 0 },
      { line, ch: 1 },
      { readOnly: true, className: "cursor" },
    );
  }
};

export const highlightLine = (
  editor,
  cursorPosition,
  gesture,
  gestureActive,
) => {
  if (gestureActive && editor.getLine(cursorPosition)) {
    const lastCh = editor.getLine(cursorPosition).length;
    editor.markText(
      { line: cursorPosition, ch: 0 },
      { line: cursorPosition, ch: lastCh },
      { readOnly: false, className: `cursor-${gesture.name}` },
    );
  }
};

// TODO: Fix bug - cursor is moved at the end of each motion command
export const shouldUpdateCursor = (gestureActive, gesture) =>
  !gestureActive && gesture.type !== "Operator";
