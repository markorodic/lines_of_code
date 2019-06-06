import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import {
  gestureComboMatched,
  inputIsAnErase,
  matchMotionGesture
} from "./GesturePad.helpers";
import { validGestures } from "../gesturesPatterns/gesturePatterns";
import {
  useInterfaceDispatch,
  useInterfaceState
} from "../Interface.customHooks";

function GesturePad({ count, containerProperties }) {
  const { setGesture, setMode } = useInterfaceDispatch();
  const { gestureActive, mode } = useInterfaceState();
  const [currentPattern, setCurrentPattern] = React.useState([]);
  const [savedPattern, setSavedPattern] = React.useState([]);

  const inputAdded = input => {
    let gestureMatched;
    const currentPosition = input[1];
    const newPattern = [...currentPattern, currentPosition];
    setCurrentPattern(newPattern);

    if (mode === "Motion") {
      gestureMatched = gestureComboMatched(newPattern, validGestures, count);
    } else {
      if (inputIsAnErase(savedPattern, newPattern)) {
        setSavedPattern([]);
      }
      gestureMatched = matchMotionGesture(input, validGestures, count);
    }

    if (gestureMatched) {
      if (gestureMatched.type === "Operator") {
        const trimmedPattern = newPattern.slice(
          newPattern.length - gestureMatched.path.length - 1,
          newPattern.length
        );
        gestureMatched.pattern = trimmedPattern;
        setSavedPattern(newPattern);
      }

      setMode(gestureMatched.type);
      setGesture(gestureMatched);
    }
  };

  React.useEffect(() => {
    // if (!gestureActive && currentPattern.length) {
    //   console.log("use effect");
    //   if (mode === "Motion") {
    //     const gestureMatched = gestureComboMatched(
    //       currentPattern,
    //       validGestures
    //     );
    //     if (gestureMatched) {
    //       const trimmedPattern = currentPattern.slice(
    //         currentPattern.length - gestureMatched.path.length - 1,
    //         currentPattern.length
    //       );
    //       // console.log(trimmedPattern, gestureMatched.path);
    //       gestureMatched.pattern = trimmedPattern;
    //       setMode(gestureMatched.type);
    //       setGesture(gestureMatched);
    //     }
    //   }
    // }
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
