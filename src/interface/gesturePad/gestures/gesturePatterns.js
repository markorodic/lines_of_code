import { editGestures } from "./editPatterns";
import { writeGestures } from "./writePatterns";

export const validGestures = {
  ...editGestures,
  ...writeGestures
};
