import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import {
  matchMotionGesture,
  matchGesture,
  getNewPath,
  getFullGesture
} from "./GesturePad.helpers";
import { validGestures } from "./gestures/gesturePatterns";
import _ from "lodash";

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
      userActive={props.userActive}
      setUserActive={props.setUserActive}
      containerProperties={props.containerProperties}
    />
  );
}

export default GesturePad;
