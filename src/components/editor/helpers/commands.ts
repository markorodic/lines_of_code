import { Gesture } from "../../../provider/types";
import { gestureCommands } from "../commands";

export const executeCommand = (editor: any, gesture: Gesture) => {
  const command = gestureCommands[gesture.name];
  editor.execCommand(command);
};
