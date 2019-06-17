import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { validGestures } from "../gesturesPatterns/gesturePatterns";
import {
  gestureComboMatched,
  trimPattern,
  userHasBeenActive,
  getNewPattern
} from "./GesturePad.helpers";
import {
  useInterfaceGestureState,
  useInterfaceGestureDispatch
} from "../Interface.customHooks";
import _ from "lodash";

function GesturePad({ containerProperties }) {
  const { setGesture, setMode } = useInterfaceGestureDispatch();
  const { userActive, mode, gesture } = useInterfaceGestureState();
  const [lastPattern, setLastPattern] = React.useState([]);
  const [lastMatchedGesture, setLastMatchedGesture] = React.useState([]);

  const inputAdded = input => {
    const pattern = getNewPattern(input, lastPattern);
    const gesture = gestureComboMatched(pattern, validGestures, mode);

    if (gesture) {
      setMode(gesture.type);
      setGesture({ ...gesture, pattern: trimPattern(pattern, gesture) });
      setLastMatchedGesture({
        ...gesture,
        pattern: trimPattern(pattern, gesture)
      });
    }
    setLastPattern(pattern);
  };

  React.useEffect(() => {
    if (userHasBeenActive(gesture, userActive)) {
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
