import { MAX_PATH_LENGTH } from "../../CONSTANTS";
import _ from "lodash";

function trim(pattern) {
  const patternLength = pattern.length;
  let trimmedPattern = pattern;

  if (patternLength > MAX_PATH_LENGTH) {
    trimmedPattern = pattern.slice(
      patternLength - MAX_PATH_LENGTH - 1,
      patternLength
    );
  }
  return trimmedPattern;
}

function getDirectionsFrom(trimmedPattern) {
  let count = 0;
  let stringPath = [];
  while (count < trimmedPattern.length - 1) {
    const firstPosition = trimmedPattern[count];
    const secondPosition = trimmedPattern[count + 1];

    if (firstPosition.y === secondPosition.y) {
      if (firstPosition.x - secondPosition.x === 1) {
        stringPath.push("Left");
      } else {
        stringPath.push("Right");
      }
    } else {
      if (firstPosition.y - secondPosition.y === 1) {
        stringPath.push("Up");
      } else {
        stringPath.push("Down");
      }
    }
    count++;
  }
  return stringPath;
}

export function getPathFrom(pattern) {
  const trimmedPattern = trim(pattern);
  return getDirectionsFrom(trimmedPattern);
}

export function userHasPaused(gestureActive, pattern) {
  return !gestureActive && !_.isEmpty(pattern);
}

export function matchedGesture(gestureState, inputPositions, validGestures) {
  const inputPath = getPathFrom(inputPositions);

  if (inputIsAnErase(gestureState, inputPositions)) {
    return removeLastGesture(gestureState, inputPositions, inputPath);
  }

  const matchedGesture = validGestures.edit.allEditPaths.find(gesture => {
    const pathTrimmed = trimArray(inputPath, gesture.length);
    return _.isEqual(pathTrimmed, gesture.path);
  });
  return (
    matchedGesture &&
    validGestures.edit[matchedGesture.type][matchedGesture.name]
  );
}

export function trimArray(array, length) {
  return array.slice(array.length - length, array.length);
}

export function findStartingPosition(gesturePattern, validGesture) {
  return gesturePattern.slice(
    gesturePattern.length - validGesture.pattern.length - 1,
    gesturePattern.length - validGesture.pattern.length
  );
}

export function inputIsAnErase(gestureState, inputPositions) {
  const previousGestureReversed = gestureState.positions
    .slice(
      gestureState.positions.length - inputPositions.length,
      gestureState.positions.length
    )
    .reverse();
  return (
    gestureState.length && _.isEqual(inputPositions, previousGestureReversed)
  );
}

export function removeLastGesture(gestureState, inputPositions) {
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

export function inputNotStartedFromLastGesture(
  inputPositions,
  gesturePositions
) {
  return !_.isEqual(
    inputPositions[0],
    gesturePositions[gesturePositions.length - 1]
  );
}

export function getGestureState(gesture, inputPositions, gestureState) {
  const gesturePostions = trimArray(inputPositions, gesture.length);
  switch (gesture.type) {
    case "Motion":
      if (gestureState.gestures.type === "Delete") {
        return {
          gestures: gesture,
          positions: gestureState.positions.concat(gesturePostions),
          path: gestureState.path.concat(gesture.path),
          length: gestureState.length + 1,
          combo: true,
          finished: true
        };
      } else {
        return {
          name: gesture.name,
          gestures: gesture,
          positions: gesturePostions,
          path: gesture.path,
          length: 1,
          combo: true,
          finished: true
        };
      }
    // if there are no gestures
    // return new motion
    // if there is one operator
    // concat
    case "Operation":
      console.log("Operation");
      break;
    case "Object":
      console.log("Object");
      break;
    default:
      debugger;
      throw new Error();
  }

  // let positions, path;
  // if (gestureState.length) {
  //   positions = gestureState.positions.concat(gesturePostions);
  //   path = gestureState.path.concat(gesture.path);
  // } else {
  //   positions = gesturePostions;
  //   path = gesture.path;
  // }

  // return {
  //   gestures: { ...gestureState.gestures, ...gesture },
  //   positions,
  //   path,
  //   length: 1
  // };
}

function followsPrevious(gestureStatePositions, gestureInputPositions) {
  return false;
}

export function gestureCanBeCombined(gestureState, gestureInputPositions) {
  return (
    followsPrevious(gestureState.positions, gestureInputPositions) &&
    gestureState.length
    // typeIsValid(gesture, inputType) &&
  );
}
