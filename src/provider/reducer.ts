import { Direction, Pattern } from "../components/gesturePad/parse";
import { SET_GESTURE, SET_MODE, GESTURE_ACTIVE, Action } from "./actions";

// A. Enums are not the best to use because they are not a JS construct? but they
// are limited to build time, they're used at runtime. Better to keep build time
// checks and run time separate
// export enum Mode {
//   Motion = "Motion",
//   Operation = "Operation",
//   Inactive = "Inactive",
// }

export const initialState = {
  gesture: {} as Gesture,
  mode: "Inactive" as Mode,
  gestureActive: false,
};

export type Mode = "Motion" | "Operation" | "Inactive";

export interface State {
  gesture: Gesture;
  mode: Mode;
  gestureActive: boolean;
}

export type GestureName = "Up" | "Down" | "Previous" | "Next" | "Delete";

export interface Gesture {
  id: number;
  length: number;
  name: string;
  path: Direction[];
  // Q.2 Typing a union of strings using an enum (actually same error
  // with the union strings and no explicit string type)
  // A. Enum strings are of type symbol and not string, so they will not be compatible
  // we type string. However this was complaining because initialState was using a string
  // rather than the Enum
  type: Mode;
  pattern: Pattern;
}

export const gestureReducer = (state: State, action: Action) => {
  switch (action.type) {
    case SET_GESTURE:
      return { ...state, gesture: action.gesture };
    case SET_MODE:
      return { ...state, mode: action.mode };
    case GESTURE_ACTIVE:
      return { ...state, gestureActive: action.value };
    default:
      throw new Error();
  }
};
