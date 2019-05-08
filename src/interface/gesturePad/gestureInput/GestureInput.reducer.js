import {
  INCREMENT_COUNT,
  ADD_TO_EXPIRED,
  SAVE_NEW_POSITION,
  GESTURE_IN_PROGRESS,
  GESTURE_NOT_IN_PROGRESS,
  CLEAR_EXPIRED_POSITIONS
} from "./GestureInput.actions";

export default function GestureInputReducer(state, action) {
  switch (action.type) {
    case SAVE_NEW_POSITION:
      return { ...state, position: action.position };
    case ADD_TO_EXPIRED:
      return {
        ...state,
        expiredPositions: [...state.expiredPositions, action.expiredPositions]
      };
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };
    case GESTURE_IN_PROGRESS:
      return { ...state, gestureActive: true };
    case GESTURE_NOT_IN_PROGRESS:
      return { ...state, gestureActive: false };
    case CLEAR_EXPIRED_POSITIONS:
      return { ...state, expiredPositions: [] };
    default:
      throw new Error();
  }
}
