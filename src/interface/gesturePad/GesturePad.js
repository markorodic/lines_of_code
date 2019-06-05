import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { matchMotionGesture, gestureComboMatched } from "./GesturePad.helpers";
import { validGestures } from "../gesturesPatterns/gesturePatterns";
import {
  useInterfaceDispatch,
  useInterfaceState
} from "../Interface.customHooks";

function GesturePad({ count, containerProperties }) {
  const { setGesture, setMode } = useInterfaceDispatch();
  const { gestureActive, mode } = useInterfaceState();
  const [currentPattern, setCurrentPattern] = React.useState([]);

  const inputAdded = input => {
    const currentPosition = input[1];
    setCurrentPattern([...currentPattern, currentPosition]);

    const gestureMatched = matchMotionGesture(input, validGestures, count);

    if (gestureMatched && mode === "Motion") {
      setGesture(gestureMatched);
    }
  };

  React.useEffect(() => {
    if (!gestureActive && currentPattern.length) {
      if (mode === "Motion") {
        const gestureMatched = gestureComboMatched(
          currentPattern,
          validGestures
        );
        if (gestureMatched) {
          setMode(gestureMatched.type);
          setGesture(gestureMatched);
        }
      }

      if (mode === "Operation") {
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
