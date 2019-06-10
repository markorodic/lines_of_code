import _ from "lodash";
import { MAX_PATH_LENGTH } from "../../CONSTANTS";

export function getGesture(validGestures, gestureMatched, count) {
  const gesture = validGestures.edit[gestureMatched.type][gestureMatched.name];
  if (gestureMatched.type === "motion") {
    gesture.id = count;
    return gesture;
  }
}

export function trimPattern(pattern, gesture) {
  return pattern.slice(
    pattern.length - gesture.path.length - 1,
    pattern.length
  );
}

export function gestureComboMatched(pattern, validGestures, mode) {
  let gestureMatched;

  const path = getPathFrom(pattern);

  validGestures.edit.allTypes.forEach(gestureType => {
    if (!gestureMatched) {
      gestureMatched = validGestures.edit[gestureType].all.find(gesture => {
        const pathTrimmed = trimArray(path, gesture.path.length);
        return _.isEqual(pathTrimmed, gesture.path);
      });
    }
  });
  return gestureMatched;
}

function trimArray(array, length) {
  return array.slice(array.length - length, array.length);
}

export function getNewPath(path, gestureMatched) {
  const newPath = path;
  const gestureDirection = gestureMatched.path;

  if (path.length === 7) {
    newPath.shift();
  }
  newPath.push(gestureDirection);

  return newPath;
}

export function getPathFrom(pattern) {
  const trimmedPattern = trim(pattern);
  return getDirectionsFrom(trimmedPattern);
}

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
