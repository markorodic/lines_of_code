import { NEW_POSITION } from "./GesturePad.actions";
import { mergeStates } from "../helpers/storeHelpers";

export default function gesturePadReducer(state = {}, action) {
  switch (action.type) {
    case NEW_POSITION:
      return Object.assign({}, state, {
        currentPosition: action.position
      });
    default:
      return state;
  }
}
