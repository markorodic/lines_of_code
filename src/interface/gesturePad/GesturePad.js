import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { matchGesture, getFullGesture } from "./GesturePad.helpers";
import { validGestures } from "./gestures/gesturePatterns";

function GesturePad(props) {
  const inputAdded = input => {
    const { setGesture } = props;
    const gestureMatched = matchGesture(input, validGestures);

    if (gestureMatched.name) {
      setGesture(getFullGesture(validGestures, gestureMatched, props.count));
    }
  };

  return (
    <GestureInput
      updatePositionGestureState={inputAdded}
      count={props.count}
      updatePatternState={inputAdded}
      gestureActive={props.gestureActive}
      setGestureActive={props.setGestureActive}
      containerProperties={props.containerProperties}
    />
  );
}

export default GesturePad;
