import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { matchGesture, getGesture } from "./GesturePad.helpers";
import { validGestures } from "../gesturesPatterns/gesturePatterns";
import {
  useInterfaceDispatch,
  useInterfaceState
} from "../Interface.customHooks";

function GesturePad({ count, containerProperties }) {
  const { setGesture, setMode } = useInterfaceDispatch();
  const { gestureActive } = useInterfaceState();
  const [currentPattern, setCurrentPattern] = React.useState([]);

  const inputAdded = input => {
    const currentPosition = input[1];
    setCurrentPattern([...currentPattern, currentPosition]);

    const gestureMatched = matchGesture(input, validGestures);

    if (gestureMatched.name) {
      const gesture = getGesture(validGestures, gestureMatched, count);
      setMode(gesture.type);
      setGesture(gesture);
    }
  };

  React.useEffect(() => {
    setCurrentPattern([]);
  }, [gestureActive]);

  return (
    <GestureInput
      updateGestureState={inputAdded}
      count={count}
      containerProperties={containerProperties}
    />
  );
}

export default GesturePad;
