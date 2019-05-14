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
