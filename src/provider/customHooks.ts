import { useContext } from "react";
import { GestureContext } from "./gestureContext";
import { gestureActions } from "./actions";

export function useGesture() {
  const { state, dispatch } = useContext(GestureContext);

  return {
    state,
    ...gestureActions(dispatch),
  };
}
