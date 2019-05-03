import { NEW_POSITION, INCREMENT_COUNT } from "./GesturePad.actions";
import { mergeStates } from "../helpers/storeHelpers";

export default function gesturePadReducer(state = {}, action) {
  switch (action.type) {
    case NEW_POSITION:
      return Object.assign({}, state, {
        currentPosition: action.position
      });
    case INCREMENT_COUNT:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    default:
      return state;
  }
}
