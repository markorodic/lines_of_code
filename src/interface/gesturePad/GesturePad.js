import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { validGestures } from "../gesturesPatterns/gesturePatterns";
import { gestureComboMatched, trimPattern } from "./GesturePad.helpers";
import {
  useInterfaceGestureState,
  useInterfaceGestureDispatch
} from "../Interface.customHooks";
import _ from "lodash";

function getNewPattern(input, lastPattern) {
  let pattern;
  if (lastPattern.length) {
    pattern = [...lastPattern, input[1]];
  } else {
    pattern = [...lastPattern, input[0], input[1]];
  }
  return pattern;
}

function GesturePad({ containerProperties }) {
  const { setGesture, setMode } = useInterfaceGestureDispatch();
  const { userActive, mode, gesture } = useInterfaceGestureState();
  const [lastPattern, setLastPattern] = React.useState([]);
  const [lastMatchedGesture, setLastMatchedGesture] = React.useState([]);

  const inputAdded = input => {
    let pattern = getNewPattern(input, lastPattern);

    setLastPattern(pattern);

    const gesture = gestureComboMatched(pattern, validGestures, mode);

    if (gesture) {
      setMode(gesture.type);
      setGesture({ ...gesture, pattern: trimPattern(pattern, gesture) });
      setLastMatchedGesture({
        ...gesture,
        pattern: trimPattern(pattern, gesture)
      });
    }
  };

  React.useEffect(() => {
    if (!userActive && gesture && gesture.type === "Insert") {
      setMode(gesture.type);
    }
    if (!userActive && !_.isEmpty(gesture)) {
      setLastPattern([]);
      setGesture({});
    }
  }, [userActive, gesture]);

  return (
    <GestureInput
      updateGestureState={inputAdded}
      containerProperties={containerProperties}
      lastMatchedGesture={lastMatchedGesture}
    />
  );
}

export default GesturePad;
