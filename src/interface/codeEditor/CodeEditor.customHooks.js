import React from "react";
import { markCursor, relativeLinesOn } from "./CodeEditor.helpers";
import { executeCommand } from "./CodeEditor.commands";

export function useUpdateCursor(editor, props) {
  React.useEffect(() => {
    if (editor) {
      markCursor(editor, "cursor");
    }
  }, [props, editor]);

  React.useEffect(() => {
    if (editor) {
      relativeLinesOn(editor);
      markCursor(editor, "cursor", false);
    }
  }, [editor]);
}

export function useExecuteCommand(editor, { interfaceGesture, gestureReady }) {
  React.useEffect(() => {
    if (gestureReady && interfaceGesture.finished) {
      executeCommand(interfaceGesture, editor);
    }
  }, [interfaceGesture, gestureReady, editor]);
}
