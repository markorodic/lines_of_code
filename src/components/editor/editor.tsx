import React, { useState, useEffect, useCallback } from "react";
import "./styles.css";
import { useGesture } from "../../provider/customHooks";
import { useGetCursorPosition } from "./customHooks";
import EditorView from "./view";
import { executeCommand } from "./helpers/commands";
import { setCursorPosition } from "./helpers/cursor";
import { Gesture } from "../../provider/types";

function Editor() {
  const {
    state: { gestureActive, gesture },
  } = useGesture();
  const [editor, setEditor] = useState(null);
  const cursorPosition = useGetCursorPosition(editor, gestureActive, gesture);

  const updateCursor = useCallback(
    (cursorPosition: number) => {
      setCursorPosition(editor, cursorPosition);
    },
    [editor],
  );

  // TODO: should skip over multi lines to the next operable line
  // it's a CodeMirror bug
  const handleMotionCommand = useCallback(
    (gesture: Gesture) => {
      executeCommand(editor, gesture);
    },
    [editor],
  );

  // TODO: Fix bug - cursor and text line are deleted/operate on
  const handleOperatorCommand = useCallback(
    (gesture: Gesture, cursorPosition: number) => {
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
