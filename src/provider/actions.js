import { validGestures } from "../gesturesPatterns/gesturePatterns";
import { gestureComboMatched } from "../components/gesturePad/helpers/gesture";

export const SET_GESTURE = "SET_GESTURE";
export const ADD_COMBINATION = "ADD_COMBINATION";
export const SET_MODE = "SET_MODE";
export const GESTURE_ACTIVE = "GESTURE_ACTIVE";
export const GESTURE_INACTIVE = "GESTURE_INACTIVE";
export const USER_ACTIVE = "USER_ACTIVE";
export const USER_INACTIVE = "USER_INACTIVE";
export const RESET_CODE_TEXT = "RESET_CODE_TEXT";
export const SET_CODE_STATE = "SET_CODE_STATE";

export const gestureActions = (dispatch) => {
  const setGestureActive = (value) => dispatch({ type: GESTURE_ACTIVE, value });
  const setGesture = (gesture) => {
    dispatch({ type: SET_GESTURE, gesture });
  };
  const setMode = (mode) => dispatch({ type: SET_MODE, mode });

  return {
    setGestureActive,
    setGesture,
    setMode,
  };
};