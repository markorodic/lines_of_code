import React, {
  useContext,
  useLayoutEffect,
  useEffect,
  useRef,
  useCallback,
} from "react";
import {
  InterfaceGestureStateContext,
  InterfaceGestureDispatchContext,
} from "./gestureContext";
import { InterfaceCountStateContext } from "./countContext";
import { gestureActions } from "./actions";

export const useAnimationFrame = (callback) => {
  const callbackRef = useRef(callback);
  const loop = useCallback(() => {
    frameRef.current = requestAnimationFrame(loop);
    callbackRef.current();
  }, [callbackRef]);
  const frameRef = React.useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useLayoutEffect(() => {
    frameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameRef.current);
  }, [loop]);
};

export const useGestureState = () => useContext(InterfaceGestureStateContext);

export function useGestureDispatch() {
  const dispatch = useContext(InterfaceGestureDispatchContext);

  return {
    ...gestureActions(dispatch),
  };
}

export const useInterfaceCountState = () =>
  useContext(InterfaceCountStateContext);
