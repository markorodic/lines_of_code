import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { validGestures } from "../gesturesPatterns/gesturePatterns";
import { gestureComboMatched, trimPattern } from "./GesturePad.helpers";
import {
  useInterfaceDispatch,
  useInterfaceState
} from "../Interface.customHooks";

function GesturePad({ containerProperties }) {
  const { setGesture, setMode } = useInterfaceDispatch();
  const { userActive, mode, gesture, count } = useInterfaceState();
  const [lastPattern, setLastPattern] = React.useState([]);

  const inputAdded = input => {
    const pattern = [...lastPattern, input[1]];
    setLastPattern(pattern);

    const gesture = gestureComboMatched(pattern, validGestures, mode);

    if (gesture) {
      setMode(gesture.type);
      setGesture({ ...gesture, pattern: trimPattern(pattern, gesture) });
    }
  };

  React.useEffect(() => {
    if (!userActive && gesture && gesture.type === "Insert") {
      setMode(gesture.type);
    }
    if (!userActive) {
      setLastPattern([]);
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
