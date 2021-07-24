import { writeGestures } from "./writePatterns";
import { editGestures } from "./editPatterns";

export const validGestures = {
  ...writeGestures,
  ...editGestures,
};
