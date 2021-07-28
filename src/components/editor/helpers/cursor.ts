import { Gesture, Mode } from "../../../provider/types";

export const setCursorPosition = (editor: any, cursorPosition: number) =>
  editor.setCursor({
    line: cursorPosition,
    ch: 0,
  });

export const setInitialCusor = (editor: any) => {
  if (editor) {
    setCursorPosition(editor, 0);
    addOperationCursor(editor, 0);
  }
};

export const addOperationCursor = (editor: any, cursorPosition: number) => {
  editor.clearGutter("position");
  editor.setGutterMarker(cursorPosition, "position", makeMarker());
};

export const makeMarker = () => {
  const marker = document.createElement("div");
  marker.innerHTML = "●";
  marker.classList.add("position-gutter-marker");
  return marker;
};

export const clearMarks = (editor: any) => {
  if (editor.getAllMarks()[0]) {
    editor.getAllMarks()[0].clear();
  }
};

export const addTextCursor = (editor: any, mode: Mode) => {
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
  editor: any,
  cursorPosition: number,
  gesture: Gesture,
  gestureActive: boolean,
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
export const shouldUpdateCursor = (gestureActive: boolean, gesture: Gesture) =>
  !gestureActive && gesture.type !== "Operation";
