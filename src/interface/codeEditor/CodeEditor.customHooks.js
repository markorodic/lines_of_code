import React from "react";
import { markGutter, markCursor, relativeLinesOn } from "./CodeEditor.helpers";
import { executeCommand } from "./CodeEditor.commands";

export function useMarkGutter(editor, cursorLineNumber) {
  React.useEffect(() => {
    if (editor) {
      relativeLinesOn(editor);
      markGutter(editor, cursorLineNumber, "cursor", false);
    }
  }, [editor, cursorLineNumber]);
}

export function useMarkCursor(editor, props, cursorPosition) {
  React.useEffect(() => {
    if (editor) {
      markCursor(editor, cursorPosition, false);
    }
  }, [editor]);
  React.useEffect(() => {
    if (editor) {
      markCursor(editor, cursorPosition);
    }
  }, [editor, props]);
}

export function useExecuteCommand(editor, { interfaceGesture }) {
  React.useEffect(() => {
    if (interfaceGesture.id) {
      executeCommand(interfaceGesture, editor);
    }
  }, [interfaceGesture.id]);
}
