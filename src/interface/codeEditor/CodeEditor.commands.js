export function executeCommand({ name }, editor) {
  switch (name) {
    case "up":
      editor.execCommand("goLineUp");
      break;
    case "down":
      editor.execCommand("goLineDown");
      break;
    case "next":
      editor.execCommand("goLineDown");
      break;
    case "previous":
      editor.execCommand("goLineUp");
      break;
    default:
      return;
  }
}

export function executeOperatorCommand(
  { name },
  editor,
  { lineNumber },
  clipBoard
) {
  console.log(name);
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
