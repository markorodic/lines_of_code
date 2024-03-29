import { useState, useEffect } from "react";
import { Gesture } from "../../provider/types";
import { shouldUpdateCursor } from "./helpers/cursor";

export function useGetCursorPosition(
  editor: any,
  gestureActive: boolean,
  gesture: Gesture,
) {
  const [cursorPosition, setCursorPosition] = useState(0);

  useEffect(() => {
    if (editor && shouldUpdateCursor(gestureActive, gesture)) {
      const cursorPosition = editor.getCursor().line;
      setCursorPosition(cursorPosition);
    }
  }, [editor, gestureActive, gesture]);

  return cursorPosition;
}
