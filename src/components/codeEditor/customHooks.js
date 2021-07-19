import { useState, useEffect } from "react";

import { shouldUpdateCursor } from "./helpers";

export function useGetCursorPosition(editor, gestureActive, mode, gesture) {
  const [cursorPosition, setCursorPosition] = useState(0);

  useEffect(() => {
    if (editor && shouldUpdateCursor(gestureActive, mode, gesture)) {
      const cursorPosition = editor.getCursor().line;
      setCursorPosition(cursorPosition);
    }
  }, [editor, gestureActive, mode, gesture]);

  return cursorPosition;
}
