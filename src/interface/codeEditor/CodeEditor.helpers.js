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

export function markCursor(
  editor,
  { lineNumber, characterPosition },
  name,
  mode
) {
  if (editor.getAllMarks()[0]) {
    editor.getAllMarks()[0].clear();
  }

  if (name === "delete") {
    const lastCh = editor.getLine(lineNumber).length;

    editor.markText(
      { line: lineNumber, ch: 0 },
      { line: lineNumber, ch: lastCh },
      { readOnly: false, className: "cursor-delete" }
    );
  } else if (name === "change") {
    const lastCh = editor.getLine(lineNumber).length;
    editor.markText(
      { line: lineNumber, ch: 0 },
      { line: lineNumber, ch: lastCh },
      { readOnly: false, className: "cursor-change" }
    );
  } else if (name === "cut") {
    const lastCh = editor.getLine(lineNumber).length;
    editor.markText(
      { line: lineNumber, ch: 0 },
      { line: lineNumber, ch: lastCh },
      { readOnly: false, className: "cursor-cut" }
    );
  } else if (name === "copy") {
    console.log(name);
    const lastCh = editor.getLine(lineNumber).length;
    editor.markText(
      { line: lineNumber, ch: 0 },
      { line: lineNumber, ch: lastCh },
      { readOnly: false, className: "cursor-copy" }
    );
  } else if (name === "paste") {
  } else if (name === "insert") {
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
