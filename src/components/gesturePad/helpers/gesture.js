import { NUMBER_OF_BOXES, GestureIdleTimeInMs } from "../CONSTANTS";
import _ from "lodash";
import { MAX_PATH_LENGTH } from "../CONSTANTS";
import { validGestures } from "../../../gesturesPatterns/gesturePatterns";

export function gridPositionHasChanged(currentPosition, newPosition) {
  return !_.isEqual(currentPosition, newPosition) && currentPosition;
}

export function getGridPosition(event, container) {
  const documentPosition = getDocumentPositionFrom(event);
  const userPosition = getUserPosition(
    documentPosition,
    container.x,
    container.y,
  );
  const boxWidth = container.width / NUMBER_OF_BOXES.X;
  const boxHeight = container.height / NUMBER_OF_BOXES.Y;

  return gridPosition(userPosition, boxWidth, boxHeight);
}

function getDocumentPositionFrom(event) {
  let position;
  if (event.type === "mousemove") {
    position = { x: event.clientX, y: event.clientY };
  }
  if (event.type === "touchmove") {
    position = {
      x: event.changedTouches[0].clientX,
      y: event.changedTouches[0].clientY,
    };
  }
  return position;
}

export function getUserPosition(documentPosition, containerX, containerY) {
  const x = documentPosition.x - containerX;
  const y = documentPosition.y - containerY;

  return { x, y };
}

export function gridPosition(userPosition, boxWidth, boxHeight) {
  const x = Math.floor(userPosition.x / boxWidth) + 1;
  const y = Math.floor(userPosition.y / boxHeight) + 1;

  return { x, y };
}

export function whenGestureIsInactive(
  gestureActive,
  expiringPositions,
  dispatchCallBack,
) {
  if (!gestureActive && expiringPositions.length) {
    dispatchCallBack();
  }
}

export function ifInputIsIdle(timer, setTimer, dispatchCallBack) {
  clearTimeout(timer);
  setTimer(
    setTimeout(() => {
      dispatchCallBack();
    }, GestureIdleTimeInMs),
  );
}

/// pad helpers

export function trimPattern(pattern, gesture) {
  return pattern.slice(
    pattern.length - gesture.path.length - 1,
    pattern.length,
  );
}

export const gestureComboMatched = (pattern, mode) =>
  validGestures.edit2.allPaths.find((gesture) => {
    const pathTrimmed = trimArray(getPathFrom(pattern), gesture.path.length);
    return _.isEqual(pathTrimmed, gesture.path);
  });

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

function trim(pattern) {
  const patternLength = pattern.length;
  let trimmedPattern = pattern;

  if (patternLength > MAX_PATH_LENGTH) {
    trimmedPattern = pattern.slice(
      patternLength - MAX_PATH_LENGTH - 1,
      patternLength,
    );
  }
  return trimmedPattern;
}

// TODO: Refactor
function getDirectionsFrom(trimmedPattern) {
  let count = 0;
  let stringPath = [];
  while (count < trimmedPattern.length - 1) {
    const firstPosition = trimmedPattern[count];
    const secondPosition = trimmedPattern[count + 1];

    if (firstPosition.y === secondPosition.y) {
      if (firstPosition.x - secondPosition.x === 1) {
        stringPath.push("Left");
      }
      if (firstPosition.x - secondPosition.x === -1) {
        stringPath.push("Right");
      }
    }
    if (firstPosition.x === secondPosition.x) {
      if (firstPosition.y - secondPosition.y === 1) {
        stringPath.push("Up");
      }
      if (firstPosition.y - secondPosition.y === -1) {
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

export function getNewPattern(position, newPosition, pattern) {
  if (pattern.length > 0) {
    return pattern.concat(newPosition);
  } else {
    return pattern.concat(position, newPosition);
  }
}
