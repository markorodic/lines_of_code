import React, { useState, useEffect, useCallback } from "react";
import "./styles.css";
import { useGestureState } from "../../provider/customHooks";
import { useGetCursorPosition } from "./customHooks";
import EditorView from "./editorView";
import { executeCommand, setCursorPosition } from "./helpers";

function Editor() {
  const { gestureActive, gesture } = useGestureState();
  const [editor, setEditor] = useState(null);
  const cursorPosition = useGetCursorPosition(editor, gestureActive, gesture);

  const updateCursor = useCallback(
    (cursorPosition) => {
      setCursorPosition(editor, cursorPosition);
    },
    [editor],
  );

  // TODO: should skip over multi lines to the next operable line
  // it's CodeMirror bug
  const handleMotionCommand = useCallback(
    (gesture) => {
      executeCommand(editor, gesture);
    },
    [editor],
  );

  // TODO: Fix bug - cursor and text line are deleted/operate on
  const handleOperatorCommand = useCallback(
    (gesture, cursorPosition) => {
      updateCursor(cursorPosition);
      executeCommand(editor, gesture);
    },
    [editor, updateCursor],
  );

  useEffect(() => {
    if (gesture.type === "Motion") handleMotionCommand(gesture);
  }, [gesture, handleMotionCommand]);

  useEffect(() => {
    if (!gestureActive && gesture.type === "Operation")
      handleOperatorCommand(gesture, cursorPosition);
  }, [gesture, cursorPosition, gestureActive, handleOperatorCommand]);

  return (
    <div className="code">
      <EditorView
        editor={editor}
        setEditor={setEditor}
        cursorPosition={cursorPosition}
      />
    </div>
  );
}

export default Editor;
