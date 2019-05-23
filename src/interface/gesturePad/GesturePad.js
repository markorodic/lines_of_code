import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import {
  getPathFrom,
  matchedGesture,
  trimArray,
  inputNotStartedFromLastGesture,
  removeLastGesture,
  inputIsAnErase,
  getGestureState,
  gestureCanBeCombined
} from "./GesturePadHelpers";
import { validGestures } from "./gestures/gesturePatterns";
import _ from "lodash";

function GesturePad(props) {
  const [gestureState, setGestureState] = React.useState({
    gestures: {},
    positions: [],
    path: [],
    length: 0,
    combo: false,
    finished: false
  });

  const inputAdded = inputPositions => {
    const gesture = matchedGesture(gestureState, inputPositions, validGestures);
    if (gesture) {
      const newGestureState = getGestureState(
        gesture,
        inputPositions,
        gestureState
      );
      setGestureState(newGestureState);
    }
  };

  React.useEffect(() => {
    props.setInterfaceGesture(gestureState);
  }, [gestureState]);

  return (
    <GestureInput
      count={props.count}
      updatePatternState={inputAdded}
      gestureActive={props.gestureActive}
      setGestureActive={props.setGestureActive}
      userActive={props.userActive}
      setUserActive={props.setUserActive}
      containerProperties={props.containerProperties}
      gesture={gestureState}
    />
  );
}

function createNewGestureState(
  gesture,
  inputPositions,
  inputPath,
  inputLength,
  newGesture
) {
  return {
    each: { ...gesture.each, ...newGesture },
    positions: gesture.positions.concat(inputPositions),
    path: gesture.path.concat(inputPath),
    numberAdded: gesture.numberAdded + 1
  };
}

function createNewGestureFrom(
  { numberAdded },
  inputPositions,
  inputPath,
  inputLength
) {
  const newGesture = {};

  newGesture[numberAdded + 1] = {
    positions: inputPositions,
    path: inputPath,
    length: inputLength
  };
  return newGesture;
}

export default GesturePad;
