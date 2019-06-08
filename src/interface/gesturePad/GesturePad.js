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
  const { gestureActive, userActive, mode, gesture } = useInterfaceState();
  const [currentPattern, setCurrentPattern] = React.useState([]);
  const [savedPattern, setSavedPattern] = React.useState([]);

  const inputAdded = input => {
    let gestureMatched;
    const currentPosition = input[1];
    const newPattern = [...currentPattern, currentPosition];
    setCurrentPattern(newPattern);

    if (mode !== "Insert") {
      gestureMatched = gestureComboMatched(newPattern, validGestures, count);
    }

    if (gestureMatched) {
      if (
        gestureMatched.type === "Operator" ||
        gestureMatched.type === "Insert"
      ) {
        const trimmedPattern = newPattern.slice(
          newPattern.length - gestureMatched.path.length - 1,
          newPattern.length
        );
        gestureMatched.pattern = trimmedPattern;
        setSavedPattern(newPattern);
      }

      // if (gestureMatched.name !== "insert") {
      console.log(gestureMatched.type, gestureMatched.name);
      if (gestureMatched.type === "Insert") {
        setMode("Operator");
      } else {
        setMode(gestureMatched.type);
      }
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
    if (!userActive && gesture && gesture.type === "Insert") {
      setMode(gesture.type);
    }
    if (!userActive) {
      setCurrentPattern([]);
    }
  }, [userActive, gesture]);

  return (
    <GestureInput
      updateGestureState={inputAdded}
      count={count}
      containerProperties={containerProperties}
    />
  );
}

export default GesturePad;
