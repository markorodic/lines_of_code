import {
  gestureComboMatched,
  getNewPattern,
  trimPattern,
} from "./helpers/gesture";

export const parse = (position, newPosition, pattern) => {
  const newPattern = getNewPattern(position, newPosition, pattern);
  const gesture = gestureComboMatched(newPattern);
  const gesturePattern = trimPattern(newPattern, gesture);

  return { gesture: { ...gesture, pattern: gesturePattern }, newPattern };
};
