import React from "react";

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

export function useGestureReady(userActive, gestureActive, count) {
  const [lastGestureCount, setLastGestureCount] = React.useState(0);
  let [gestureReady, setGestureReady] = React.useState(false);

  React.useEffect(() => {
    if (gestureActive) {
      setLastGestureCount(count);
    }

    if (userActive && lastGestureCount + 20 < count) {
      setGestureReady(true);
    } else {
      setGestureReady(false);
    }
  }, [userActive, gestureActive, count, lastGestureCount]);

  return gestureReady;
}
