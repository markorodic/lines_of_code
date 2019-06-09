import _ from "lodash";
import { getPathFrom } from "./GesturePadHelpers";

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

export function gestureComboMatched(pattern, validGestures, count, mode) {
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
  if (gestureMatched) {
    gestureMatched.id = count;
  }
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
