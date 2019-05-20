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

export function markCursor(editor, className, cursorSet = true) {
  if (!cursorSet) {
    editor.setCursor({ line: 0, ch: 0 });
  }

  if (editor.getAllMarks()[0]) {
    editor.getAllMarks()[0].clear();
  }

  const cursorLine = editor.getCursor().line;
  const cursorChar = editor.getCursor().ch;
  editor.markText(
    { line: cursorLine, ch: cursorChar },
    { line: cursorLine, ch: cursorChar + 1 },
    { readOnly: true, className }
  );
}

export function relativeLinesOn(editor) {
  editor.on("cursorActivity", showRelativeLines);
}
