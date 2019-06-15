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
      return "cutLine";
    case "paste":
      return "pasteFromClipboard";
    case "copy":
      return "copyToClipboard";
    case "undo":
      return "undoLastCommand";
    default:
      return;
  }
}

export function executeCommand(
  editor,
  { name },
  { lineNumber },
  clipboard,
  userActive,
  history,
  setHistory
) {
  switch (name) {
    case "moveLineUp":
      editor.execCommand("goLineUp");
      break;
    case "moveLineDown":
      editor.execCommand("goLineDown");
      break;
    case "deleteLine":
      // move this check somewhere else
      if (!userActive) {
        setCursor(editor, lineNumber);
        editor.execCommand("deleteLine");
        setHistory(editor.getHistory());
      }
      break;
    case "cutLine":
      // move this check somewhere else
      if (!userActive) {
        setCursor(editor, lineNumber);
        editor.execCommand("deleteLine");
        setHistory(editor.getHistory());
      }
      break;
    case "pasteFromClipboard":
      // and this one
      if (!userActive) {
        setCursor(editor, lineNumber);
        editor.execCommand("newlineAndIndent");
        setCursor(editor, lineNumber);
        editor.replaceSelection(clipboard);
        setHistory(editor.getHistory());
      }
      break;
    case "undoLastCommand":
      // and this
      if (!userActive && history) {
        editor.setHistory(history);
        editor.undo();
        setHistory(null);
      }
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

function currentHistory() {}
