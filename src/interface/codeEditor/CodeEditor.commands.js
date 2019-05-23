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