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

export function markGutter(editor, lineNumber) {
  editor.clearGutter("position");
  editor.setGutterMarker(lineNumber, "position", makeMarker());
}

function makeMarker() {
  var marker = document.createElement("div");
  marker.innerHTML = "●";
  marker.classList.add("position-gutter-marker");
  return marker;
}

export function markCursor(editor, cursorPosition, mode, cursorSet = true) {
  if (!cursorSet) {
    editor.setCursor(cursorPosition);
  }

  if (editor.getAllMarks()[0]) {
    editor.getAllMarks()[0].clear();
  }

  if (mode !== "motion") {
    console.log(mode);
    const { line } = cursorPosition;
    const lastCh = editor.getLine(line).length;

    editor.markText(
      { line, ch: 0 },
      { line, ch: lastCh },
      { readOnly: true, className: "cursor-delete" }
    );
  } else {
    const line = editor.getCursor().line;
    const ch = editor.getCursor().ch;

    editor.markText(
      { line, ch },
      { line, ch: ch + 1 },
      { readOnly: true, className: "cursor" }
    );
  }
}

export function relativeLinesOn(editor) {
  editor.on("cursorActivity", showRelativeLines);
}
