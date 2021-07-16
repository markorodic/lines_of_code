const GO_LINE_UP = "goLineUp";
const GO_LINE_DOWN = "goLineDown";
const DELETE_LINE = "deleteLine";
export const NEW_LINE_AND_INDENT = "newlineAndIndent";

export const gestureToCommand = {
  up: GO_LINE_UP,
  down: GO_LINE_DOWN,
  previous: GO_LINE_UP,
  next: GO_LINE_UP,
};

export const gestureToOperation = {
  delete: DELETE_LINE,
  cut: DELETE_LINE,
  paste: NEW_LINE_AND_INDENT,
};
