import {
  INCREMENT_COUNT,
  GESTURE_ACTIVE,
  GESTURE_INACTIVE,
  USER_ACTIVE,
  USER_INACTIVE
} from "./Interface.actions";

export default function InterfaceReducer(state, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };
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
