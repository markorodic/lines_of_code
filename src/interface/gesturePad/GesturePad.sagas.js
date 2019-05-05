import { put, takeLatest, fork } from "redux-saga/effects";
import { NEW_POSITION, SHOW_NEW_POSITION_IN_VIEW } from "./GesturePad.actions";

export const commentsSagaWorkers = [fork(newPosition)];

function* newPosition() {
  yield takeLatest(NEW_POSITION, newPositionFunction);
}

function* newPositionFunction(action) {
  yield put({
    type: SHOW_NEW_POSITION_IN_VIEW,
    position: action.position
  });
}
