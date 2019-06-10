import React from "react";
import {
  InterfaceStateContext,
  InterfaceDispatchContext
} from "./Interface.context";
import {
  SET_GESTURE,
  ADD_COMBINATION,
  USER_ACTIVE,
  USER_INACTIVE,
  GESTURE_ACTIVE,
  GESTURE_INACTIVE,
  SET_MODE
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

export function useInterfaceState() {
  const context = React.useContext(InterfaceStateContext);
  if (context === undefined) {
    throw new Error(
      "useInterfaceState must be used within a InterfaceProvider"
    );
  }
  return context;
}

export function useInterfaceDispatch() {
  const dispatch = React.useContext(InterfaceDispatchContext);
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
  return {
    setUserActive,
    setUserInactive,
    setGestureActive,
    setGestureInactive,
    setGesture,
    setMode,
    addCombination
  };
}
