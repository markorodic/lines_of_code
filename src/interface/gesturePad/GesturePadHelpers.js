import { MAX_PATH_LENGTH } from "./CONSTANTS";
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

export function matchedGesture(gesturePatterns, gesturePath) {
  return gesturePatterns.edit.find(gesture => {
    const pathTrimmed = trimArray(gesturePath, gesture.pattern.length);
    return _.isEqual(pathTrimmed, gesture.pattern);
  });
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
