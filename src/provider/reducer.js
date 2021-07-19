import { SET_GESTURE, SET_MODE, GESTURE_ACTIVE } from "./actions";

export const initialState = {
  gesture: {},
  mode: "Inactive",
  gestureActive: false,
};

export const InterfaceReducer = (state, action) => {
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
