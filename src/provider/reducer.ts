import { SET_GESTURE, SET_MODE, GESTURE_ACTIVE } from "./actions";
import { Action, Gesture, Mode, State } from "./types";

export const initialState = {
  gesture: {} as Gesture,
  mode: "Inactive" as Mode,
  gestureActive: false,
};

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
