import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { getPathFrom, matchedGesture, trimArray } from "./GesturePadHelpers";
import { gesturePatterns } from "./gestures/gesturePatterns";

function GesturePad(props) {
  const [gesture, setGesture] = React.useState([]);

  const updatePatternState = gesturePattern => {
    const gesturePath = getPathFrom(gesturePattern);
    if (gesturePath.length) {
      const validGesture = matchedGesture(gesturePatterns, gesturePath);
      if (validGesture) {
        const trimmedPath = trimArray(
          gesturePattern,
          validGesture.pattern.length
        );
        setGesture(gesture.concat(trimmedPath));
      }
    }
  };

  return (
    <GestureInput
      updatePatternState={updatePatternState}
      count={props.count}
      gestureActive={props.gestureActive}
      setgestureActive={props.setgestureActive}
      userActive={props.userActive}
      setUserActive={props.setUserActive}
      containerProperties={props.containerProperties}
      gesture={gesture}
    />
  );
}

export default GesturePad;
