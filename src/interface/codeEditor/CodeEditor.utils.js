export function getCursorPosition(editor) {
  const lineNumber = editor.getCursor().line;
  const characterPosition = editor.getCursor().ch;
  return { lineNumber, characterPosition };
}
