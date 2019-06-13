export function motionHasFinished(editor, gestureActive, mode) {
  return editor && !gestureActive && mode === "Motion";
}

export function validExecution({ type }, userActive) {
  return (userActive && type === "Motion") || type === "Operator";
}

// ** Marker Helpers **
// --------------------
function showRelativeLines(cm) {
  const lineNum = cm.getCursor().line + 1;
  if (cm.state.curLineNum === lineNum) {
    return;
  }
  cm.state.curLineNum = lineNum;
  cm.setOption("lineNumberFormatter", l =>
    l === lineNum ? lineNum : Math.abs(lineNum - l)
  );
}

export function markGutter(editor, { lineNumber }) {
  editor.clearGutter("position");
  editor.setGutterMarker(lineNumber, "position", makeMarker());
}

function makeMarker() {
  var marker = document.createElement("div");
  marker.innerHTML = "●";
  marker.classList.add("position-gutter-marker");
  return marker;
}

export function markGutterIcon(editor, cursorPosition) {
  if (editor) {
    markGutter(editor, cursorPosition, "cursor");
  }
}

export function markText(editor, mode, cursorPosition, command, userActive) {
  if (editor) {
    clearMarks(editor);
    markCursor(editor, mode, userActive);
    markLine(editor, cursorPosition, command, userActive);
  }
}

function clearMarks(editor) {
  if (editor.getAllMarks()[0]) {
    editor.getAllMarks()[0].clear();
  }
}

function markCursor(editor, mode, userActive) {
  // investigate why removing this causes cursor not to be reset, since we do this in markText();
  clearMarks(editor);
  const line = editor.getCursor().line;
  const ch = editor.getCursor().ch;

  if (mode === "Motion" || (mode = "Operation" && !userActive)) {
    editor.markText(
      { line, ch },
      { line, ch: ch + 1 },
      { readOnly: true, className: "cursor" }
    );
  }
}

function markLine(editor, { lineNumber }, { name }, userActive) {
  if (userActive && editor.getLine(lineNumber)) {
    const lastCh = editor.getLine(lineNumber).length;
    editor.markText(
      { line: lineNumber, ch: 0 },
      { line: lineNumber, ch: lastCh },
      { readOnly: false, className: `cursor-${name}` }
    );
  }
}

export function relativeLinesOn(editor) {
  if (editor) {
    editor.on("cursorActivity", showRelativeLines);
  }
}
