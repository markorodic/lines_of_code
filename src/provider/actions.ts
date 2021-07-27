import { Gesture, Mode } from "./reducer";

export const SET_GESTURE = "SET_GESTURE";
export const SET_MODE = "SET_MODE";
export const GESTURE_ACTIVE = "GESTURE_ACTIVE";

export type Dispatch = (action: Action) => void;

// Possible use case for a generic
export type Action =
  | {
      type: typeof SET_GESTURE;
      gesture: Gesture;
    }
  | { type: typeof GESTURE_ACTIVE; value: boolean }
  | { type: typeof SET_MODE; mode: Mode };

export const gestureActions = (dispatch: Dispatch) => {
  const setGestureActive = (value: boolean) =>
    dispatch({ type: GESTURE_ACTIVE, value });
  const setGesture = (gesture: Gesture) => {
    dispatch({ type: SET_GESTURE, gesture });
  };
  const setMode = (mode: Mode) => dispatch({ type: SET_MODE, mode });

  return {
    setGestureActive,
    setGesture,
    setMode,
  };
};
