import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { getPathFrom, matchedGesture, trimArray } from "./GesturePadHelpers";
import { validGestures } from "./gestures/gesturePatterns";
import _ from "lodash";

function inputIsAnErase(inputPositions, gesture) {
  const lastGestureReversed = gesture.positions
    .slice(
      gesture.positions.length - inputPositions.length,
      gesture.positions.length
    )
    .reverse();
  return _.isEqual(inputPositions, lastGestureReversed);
}

const initialState = {
  each: {},
  positions: [],
  path: [],
  numberAdded: 0
};

function removeLastGesture(gestureState, inputPositions) {
  const inputLength = inputPositions.length;
  const newGestureState = gestureState;
  delete newGestureState.each[newGestureState.numberAdded];
  const positionsWithoutLastGesture = gestureState.positions.slice(
    0,
    gestureState.positions.length - inputLength + 1
  );
  const pathWithoutLastGesture = gestureState.path.slice(
    0,
    gestureState.path.length - inputLength + 1
  );
  return {
    each: { ...newGestureState.each },
    positions: positionsWithoutLastGesture,
    path: pathWithoutLastGesture,
    numberAdded: gestureState.numberAdded - 1
  };
}

function inputNotStartedFromLastGesture(inputPositions, gesturePositions) {
  return !_.isEqual(
    inputPositions[0],
    gesturePositions[gesturePositions.length - 1]
  );
}

function GesturePad(props) {
  const [gesture, setGesture] = React.useState(initialState);

  const updatePatternState = (inputPositions, position) => {
    const inputPath = getPathFrom(inputPositions);

    if (gesture.numberAdded && inputIsAnErase(inputPositions, gesture)) {
      setGesture(removeLastGesture(gesture, inputPositions, inputPath));
    } else {
      const gestureFound = matchedGesture(inputPath, validGestures);

      if (gestureFound) {
        const validInputPath = gestureFound.pattern;
        const validInputPositions = trimArray(
          inputPositions,
          validInputPath.length
        );
        const validInputPositions2 = trimArray(
          inputPositions,
          validInputPath.length + 1
        );
        if (
          gesture.numberAdded &&
          inputNotStartedFromLastGesture(
            validInputPositions2,
            gesture.positions
          )
        ) {
          return;
        }
        const newGesture = {};
        newGesture[gesture.numberAdded + 1] = {
          positions: validInputPositions,
          path: validInputPath,
          length: validInputPath.length
        };

        setGesture({
          each: { ...gesture.each, ...newGesture },
          positions: gesture.positions.concat(validInputPositions),
          path: gesture.path.concat(validInputPath),
          numberAdded: gesture.numberAdded + 1
        });
      }
    }
  };

  React.useEffect(() => {
    props.setInterfaceGesture(gesture);
  }, [gesture]);

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
