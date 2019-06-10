export function executeCommand({ name }, editor) {
  if (editor) {
    switch (name) {
      case "moveLineUp":
        editor.execCommand("goLineUp");
        break;
      case "moveLineDown":
        editor.execCommand("goLineDown");
        break;
      default:
        return;
    }
  }
}

export function executeOperatorCommand(
  { name },
  editor,
  { lineNumber },
  clipBoard
) {
  switch (name) {
    case "delete":
      editor.setCursor({
        line: lineNumber,
        ch: 0
      });
      editor.execCommand("deleteLine");
      break;
    case "cut":
      editor.setCursor({
        line: lineNumber,
        ch: 0
      });
      editor.execCommand("deleteLine");
      break;
    case "paste":
      editor.setCursor({
        line: lineNumber,
        ch: 0
      });
      editor.execCommand("newlineAndIndent");
      editor.setCursor({
        line: lineNumber,
        ch: 0
      });
      editor.replaceSelection(clipBoard);
      break;
    default:
      return;
  }
}
