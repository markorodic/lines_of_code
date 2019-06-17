export function executeMotionCommand(editor, { name }) {
  switch (name) {
    case "up":
      editor.execCommand("goLineUp");
      break;
    case "down":
      editor.execCommand("goLineDown");
      break;
    case "previous":
      editor.execCommand("goLineUp");
      break;
    case "next":
      editor.execCommand("goLineDown");
      break;
    default:
      return;
  }
}

export function executeOperationCommand(
  editor,
  { name },
  { lineNumber },
  clipboard,
  userActive
) {
  switch (name) {
    case "delete":
      // move this check somewhere else
      if (!userActive) {
        setCursor(editor, lineNumber);
        editor.execCommand("deleteLine");
        // setHistory(editor.getHistory());
      }
      break;
    case "cut":
      // move this check somewhere else
      if (!userActive) {
        setCursor(editor, lineNumber);
        editor.execCommand("deleteLine");
        // setHistory(editor.getHistory());
      }
      break;
    case "paste":
      // and this one
      if (!userActive) {
        setCursor(editor, lineNumber);
        editor.execCommand("newlineAndIndent");
        setCursor(editor, lineNumber);
        editor.replaceSelection(clipboard);
        // setHistory(editor.getHistory());
      }
      break;
      // case "undo":
      //   // and this
      //   if (!userActive && history) {
      //     editor.setHistory(history);
      //     editor.undo();
      //     setHistory(null);
      //   }
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
