import {
  INCREMENT_COUNT,
  ADD_TO_EXPIRED,
  SAVE_NEW_POSITION,
  GESTURE_IN_PROGRESS,
  GESTURE_NOT_IN_PROGRESS,
  CLEAR_EXPIRED_POSITIONS,
  ADD_POSITION_TO_PATTERN,
  CLEAR_PATTERN
} from "./GestureInput.actions";

export default function GestureInputReducer(state, action) {
  switch (action.type) {
    case SAVE_NEW_POSITION:
      return { ...state, position: action.position };
    case ADD_POSITION_TO_PATTERN:
      return { ...state, pattern: [...state.pattern, action.position] };
    case CLEAR_PATTERN:
      return { ...state, pattern: [] };
    case ADD_TO_EXPIRED:
      return {
        ...state,
        expiringPositions: [
          ...state.expiringPositions,
          action.expiringPositions
        ]
      };
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };
    case GESTURE_IN_PROGRESS:
      return { ...state, gestureActive: true };
    case GESTURE_NOT_IN_PROGRESS:
      return { ...state, gestureActive: false };
    case CLEAR_EXPIRED_POSITIONS:
      return { ...state, expiringPositions: [] };
    default:
      throw new Error();
  }
}
