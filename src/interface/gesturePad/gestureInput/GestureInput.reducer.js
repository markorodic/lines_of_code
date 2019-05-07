import {
  INCREMENT_COUNT,
  ADD_TO_EXPIRED,
  SAVE_NEW_POSITION
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
    default:
      throw new Error();
  }
}
