export function executeCommand({ name }, editor) {
  switch (name) {
    case "Up":
      editor.execCommand("goLineUp");
      break;
    case "Down":
      editor.execCommand("goLineDown");
      break;
    case "Right":
      editor.execCommand("goLineDown");
      break;
    case "Left":
      editor.execCommand("goLineUp");
      break;
    default:
      return;
  }
}
