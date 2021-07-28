import { SET_GESTURE, SET_MODE, GESTURE_ACTIVE } from "./actions";

export type GestureProviderProps = { children: React.ReactNode };

export interface Context {
  state: State;
  dispatch: Dispatch;
}

export interface State {
  gesture: Gesture;
  mode: Mode;
  gestureActive: boolean;
}

export type Direction = "Up" | "Down" | "Left" | "Right";

export interface Gesture {
  id: number;
  length: number;
  name: string;
  path: Direction[];
  type: Mode;
  pattern: Pattern;
}

export type GestureName = "Up" | "Down" | "Previous" | "Next" | "Delete";

export type Mode = "Motion" | "Operation" | "Inactive";

export type Dispatch = (action: Action) => void;

export type Action =
  | {
      type: typeof SET_GESTURE;
      gesture: Gesture;
    }
  | { type: typeof GESTURE_ACTIVE; value: boolean }
  | { type: typeof SET_MODE; mode: Mode };

export interface Position {
  x: number;
  y: number;
}

export type Pattern = Position[];
