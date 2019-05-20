import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import {
  getPathFrom,
  matchedGesture,
  trimArray,
  inputNotStartedFromLastGesture,
  removeLastGesture,
  inputIsAnErase
} from "./GesturePadHelpers";
import { validGestures } from "./gestures/gesturePatterns";
import _ from "lodash";

function GesturePad(props) {
  const [gesture, setGesture] = React.useState({
    each: {},
    positions: [],
    path: [],
    numberAdded: 0
  });

  const updatePatternState = (inputPositions, position) => {
    const inputPath = getPathFrom(inputPositions);

    if (inputIsAnErase(inputPositions, gesture)) {
      setGesture(removeLastGesture(gesture, inputPositions, inputPath));
    } else {
      // find matched gesture path
      const gestureFound = matchedGesture(inputPath, validGestures);

      // if gesture has been found - path and position
      if (gestureFound) {
        const inputPath = gestureFound.pattern;
        const inputPostions = trimArray(inputPositions, inputPath.length);
        const inputLength = gestureFound.pattern.length;
        const gestureName = gestureFound.name;
        const gestureType = gestureFound.type;

        // const validInputPositions = trimArray(
        //   inputPositions,
        //   validInputPath.length
        // );

        const validInputPositions2 = trimArray(
          inputPositions,
          inputPath.length + 1
        );

        if (
          gesture.numberAdded &&
          gestureType !== "motion" &&
          inputNotStartedFromLastGesture(
            validInputPositions2,
            gesture.positions
          )
        ) {
          return;
        }

        const newGesture = createNewGestureFrom(
          gesture,
          inputPositions,
          inputPath,
          inputLength
        );

        // const newGestureState = createNewGestureState(
        //   gesture,
        //   inputPositions,
        //   inputPath,
        //   inputLength,
        //   newGesture
        // );

        // setGesture(newGestureState);

        setGesture({
          each: { ...gesture.each, ...newGesture },
          positions: gesture.positions.concat(inputPostions),
          path: gesture.path.concat(inputPath),
          numberAdded: gesture.numberAdded + 1,
          name: gestureName,
          type: gestureType
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
