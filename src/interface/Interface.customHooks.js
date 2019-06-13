import React from "react";
import {
  InterfaceGestureStateContext,
  InterfaceGestureDispatchContext
} from "./Interface.gestureContext";
import { InterfaceCountStateContext } from "./Interface.countContext";
import {
  SET_GESTURE,
  ADD_COMBINATION,
  USER_ACTIVE,
  USER_INACTIVE,
  GESTURE_ACTIVE,
  GESTURE_INACTIVE,
  SET_MODE,
  RESET_CODE_TEXT,
  SET_CODE_STATE
} from "./Interface.actions";

export const useAnimationFrame = callback => {
  const callbackRef = React.useRef(callback);
  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  const loop = () => {
    frameRef.current = requestAnimationFrame(loop);
    const cb = callbackRef.current;
    cb();
  };
  const frameRef = React.useRef();
  React.useLayoutEffect(() => {
    frameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);
};

export function useInterfaceGestureState() {
  const context = React.useContext(InterfaceGestureStateContext);
  if (context === undefined) {
    throw new Error(
      "useInterfaceState must be used within a InterfaceProvider"
    );
  }
  return context;
}

export function useInterfaceGestureDispatch() {
  const dispatch = React.useContext(InterfaceGestureDispatchContext);
  if (dispatch === undefined) {
    throw new Error(
      "useInterfaceDispatch must be used within a InterfaceProvider"
    );
  }
  const setUserActive = () => dispatch({ type: USER_ACTIVE });
  const setUserInactive = () => dispatch({ type: USER_INACTIVE });
  const setGestureActive = () => dispatch({ type: GESTURE_ACTIVE });
  const setGestureInactive = () => dispatch({ type: GESTURE_INACTIVE });
  const setGesture = gesture => dispatch({ type: SET_GESTURE, gesture });
  const addCombination = pattern =>
    dispatch({ type: ADD_COMBINATION, pattern });
  const setMode = mode => dispatch({ type: SET_MODE, mode });
  const setResetCodeText = newCodeText =>
    dispatch({ type: RESET_CODE_TEXT, newCodeText });
  const setCodeState = newState => dispatch({ type: SET_CODE_STATE, newState });

  return {
    setUserActive,
    setUserInactive,
    setGestureActive,
    setGestureInactive,
    setGesture,
    setMode,
    addCombination,
    setResetCodeText,
    setCodeState
  };
}

export function useInterfaceCountState() {
  const context = React.useContext(InterfaceCountStateContext);
  if (context === undefined) {
    throw new Error(
      "useInterfaceGestureState must be used within a InterfaceProvider"
    );
  }
  return context;
}
