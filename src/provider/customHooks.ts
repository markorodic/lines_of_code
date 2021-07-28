import { useContext } from "react";
import { GestureContext } from "./context";
import { gestureActions } from "./actions";

export function useGesture() {
  const { state, dispatch } = useContext(GestureContext);

  return {
    state,
    ...gestureActions(dispatch),
  };
}
