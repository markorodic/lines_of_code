import { editPatterns } from "./editPatterns";
import { writePatterns } from "./writePatterns";

export const validGestures = {
  ...editPatterns,
  ...writePatterns
};
