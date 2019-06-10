export function executeCommand(editor, { name }, { lineNumber }, clipBoard) {
  switch (name) {
    case "moveLineUp":
      editor.execCommand("goLineUp");
      break;
    case "moveLineDown":
      editor.execCommand("goLineDown");
      break;
    case "deleteLine":
      setCursor(editor, lineNumber);
      editor.execCommand("deleteLine");
      break;
    case "pasteFromClipboard":
      setCursor(editor, lineNumber);
      editor.execCommand("newlineAndIndent");
      setCursor(editor, lineNumber);
      editor.replaceSelection(clipBoard);
      break;
    default:
      return;
  }
}

// ** helper functions **
// ----------------------
function setCursor(editor, lineNumber) {
  editor.setCursor({
    line: lineNumber,
    ch: 0
  });
}
