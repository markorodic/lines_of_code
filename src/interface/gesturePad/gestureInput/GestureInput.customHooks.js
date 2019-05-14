import React from "react";
import { getElementProperties } from "./GestureInputHelpers";
import { InterfaceContext } from "../../Interface.context";

export function useInterface() {
  const context = React.useContext(InterfaceContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  const {
    count,
    userActive,
    gestureActive,
    setGestureActive,
    setGestureInactive,
    setUserActive,
    setUserInactive
  } = context;
  // const increment = React.useCallback(() => setCount(c => c + 1), [setCount]);
  return {
    count,
    userActive,
    gestureActive,
    setGestureActive,
    setGestureInactive,
    setUserActive,
    setUserInactive
  };
}

// export function useCount() {
//   const context = React.useContext(InterfaceContext);
//   if (!context) {
//     throw new Error("useCount must be used within a CountProvider");
//   }
//   const { count, setCount } = context;
//   const increment = React.useCallback(() => setCount(c => c + 1), [setCount]);
//   return {
//     count,
//     increment
//   };
// }

export function useContainerProperties(GestureInputElement) {
  const [containerProperties, setContainerProperties] = React.useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  React.useEffect(() => {
    const { x, y, width, height } = getElementProperties(GestureInputElement);
    setContainerProperties({
      x,
      y,
      width,
      height
    });
  }, [GestureInputElement]);
  return containerProperties;
}
