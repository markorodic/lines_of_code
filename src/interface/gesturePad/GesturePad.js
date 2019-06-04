import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { matchGesture, getGesture } from "./GesturePad.helpers";
import { validGestures } from "./gestures/gesturePatterns";
import { useInterfaceDispatch } from "../Interface.customHooks";

function GesturePad(props) {
  const { setGesture, setMode } = useInterfaceDispatch();

  const inputAdded = input => {
    const gestureMatched = matchGesture(input, validGestures);

    if (gestureMatched.name) {
      const gesture = getGesture(validGestures, gestureMatched, props.count);
      setMode(gesture.type);
      setGesture(gesture);
    }
  };

  return (
    <GestureInput
      updateGestureState={inputAdded}
      count={props.count}
      containerProperties={props.containerProperties}
    />
  );
}

export default GesturePad;
