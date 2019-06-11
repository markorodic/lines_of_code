import {
  SET_GESTURE,
  ADD_COMBINATION,
  SET_MODE,
  GESTURE_ACTIVE,
  GESTURE_INACTIVE,
  USER_ACTIVE,
  USER_INACTIVE
} from "./Interface.actions";

export default function InterfaceReducer(state, action) {
  switch (action.type) {
    case SET_GESTURE:
      return { ...state, gesture: action.gesture };
    case ADD_COMBINATION:
      return { ...state, combination: action.pattern };
    case SET_MODE:
      return { ...state, mode: action.mode };
    case GESTURE_ACTIVE:
      return { ...state, gestureActive: true };
    case GESTURE_INACTIVE:
      return { ...state, gestureActive: false };
    case USER_ACTIVE:
      return { ...state, userActive: true };
    case USER_INACTIVE:
      return { ...state, userActive: false };
    default:
      throw new Error();
  }
}
