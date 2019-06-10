export function getExecutionCommandFrom({ name }) {
  switch (name) {
    case "up":
      return "moveLineUp";
    case "down":
      return "moveLineDown";
    case "next":
      return "moveLineDown";
    case "previous":
      return "moveLineUp";
    case "delete":
      return "deleteLine";
    case "cut":
      return "deleteLine";
    case "paste":
      return "pasteFromClipboard";
    case "copy":
      return "copyToClipboard";
    default:
      return;
  }
}

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
