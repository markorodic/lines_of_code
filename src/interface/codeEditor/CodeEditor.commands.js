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

export function executeOperatorCommand({ name }, editor, { lineNumber }) {
  switch (name) {
    case "delete":
      editor.setCursor({
        line: lineNumber,
        ch: 0
      });
      editor.execCommand("deleteLine");
      break;
    default:
      return;
  }
}
