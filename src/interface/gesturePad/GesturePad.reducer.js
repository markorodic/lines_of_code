import {
  INCREMENT_COUNT,
  ADD_POSITION_TO_EXPIRED,
  SAVE_NEW_POSITION
} from "./GesturePad.actions";

export default function GesturePadReducer(state, action) {
  switch (action.type) {
    case SAVE_NEW_POSITION:
      return { ...state, position: action.position };
    case ADD_POSITION_TO_EXPIRED:
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
