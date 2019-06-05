import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { matchMotionGesture, gestureComboMatched } from "./GesturePad.helpers";
import { validGestures } from "../gesturesPatterns/gesturePatterns";
import {
  useInterfaceDispatch,
  useInterfaceState
} from "../Interface.customHooks";

function GesturePad({ count, containerProperties }) {
  const { setGesture } = useInterfaceDispatch();
  const { gestureActive } = useInterfaceState();
  const [currentPattern, setCurrentPattern] = React.useState([]);

  const inputAdded = input => {
    const currentPosition = input[1];
    setCurrentPattern([...currentPattern, currentPosition]);

    const gestureMatched = matchMotionGesture(input, validGestures, count);

    if (gestureMatched) {
      setGesture(gestureMatched);
    }
  };

  React.useEffect(() => {
    if (!gestureActive && currentPattern.length) {
      const gestureMatched = gestureComboMatched(currentPattern, validGestures);
      console.log(gestureMatched);
      if (gestureMatched) {
        setGesture(gestureMatched);
      }
    }
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
