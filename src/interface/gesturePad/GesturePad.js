import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { matchGesture, getFullGesture } from "./GesturePad.helpers";
import { validGestures } from "./gestures/gesturePatterns";
import {
  useInterfaceState,
  useInterfaceDispatch
} from "../Interface.customHooks";

function GesturePad(props) {
  const { gesture } = useInterfaceState();
  const { setGesture } = useInterfaceDispatch();

  const inputAdded = input => {
    const gestureMatched = matchGesture(input, validGestures);

    if (gestureMatched.name) {
      const gesture = getFullGesture(
        validGestures,
        gestureMatched,
        props.count
      );
      setGesture(gesture);
    }
  };

  return (
    <GestureInput
      updatePositionGestureState={inputAdded}
      count={props.count}
      updatePatternState={inputAdded}
      containerProperties={props.containerProperties}
    />
  );
}

export default GesturePad;
