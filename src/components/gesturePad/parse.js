import _ from "lodash";
import { validGestures } from "../../gesturesPatterns/gesturePatterns";
import { MAX_PATH_LENGTH } from "./CONSTANTS";

export const parse = (position, newPosition, pattern) => {
  const newPattern = getNewPattern(position, newPosition, pattern);
  const gesture = gestureComboMatched(newPattern);
  const gesturePattern = trimPattern(newPattern, gesture);

  return { gesture: { ...gesture, pattern: gesturePattern }, newPattern };
};

const getNewPattern = (position, newPosition, pattern) => {
  let newPattern;
  if (pattern.length > 0) {
    newPattern = pattern.concat(newPosition);
  } else {
    if (_.isEmpty(position)) {
      newPattern = pattern.concat(
        { ...newPosition, y: newPosition.y - 1 },
        newPosition,
      );
    } else {
      newPattern = pattern.concat(position, newPosition);
    }
  }
  return newPattern;
};

const gestureComboMatched = (pattern) => {
  return validGestures.edit2.allPaths.find((gesture) => {
    const pathTrimmed = trimArray(getPathFrom(pattern), gesture.path.length);
    return _.isEqual(pathTrimmed, gesture.path);
  });
};

const trimArray = (array, length) => {
  return array.slice(array.length - length, array.length);
};

const getPathFrom = (pattern) => {
  const trimmedPattern = trim(pattern);
  return getDirectionsFrom(trimmedPattern);
};

const getDirectionsFrom = (trimmedPattern) => {
  let count = 0;
  let stringPath = [];
  while (count < trimmedPattern.length - 1) {
    const firstPosition = trimmedPattern[count];
    const secondPosition = trimmedPattern[count + 1];

    if (firstPosition.x - secondPosition.x >= 1) {
      stringPath.push("Left");
    } else if (firstPosition.x - secondPosition.x <= -1) {
      stringPath.push("Right");
    } else if (firstPosition.y - secondPosition.y >= 1) {
      stringPath.push("Up");
    } else if (firstPosition.y - secondPosition.y <= -1) {
      stringPath.push("Down");
    }

    count++;
  }
  return stringPath;
};

const trim = (pattern) => {
  const patternLength = pattern.length;
  let trimmedPattern = pattern;

  if (patternLength > MAX_PATH_LENGTH) {
    trimmedPattern = pattern.slice(
      patternLength - MAX_PATH_LENGTH - 1,
      patternLength,
    );
  }
  return trimmedPattern;
};

const trimPattern = (pattern, gesture) => {
  return pattern.slice(
    pattern.length - gesture.path.length - 1,
    pattern.length,
  );
};
