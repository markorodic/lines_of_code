import _ from "lodash";
import { getPathFrom } from "./GesturePadHelpers";

export function getFullGesture(validGestures, gestureMatched, count) {
  const gesture = validGestures.edit[gestureMatched.type][gestureMatched.name];
  if (gestureMatched.type === "motion") {
    gesture.id = count;
    return gesture;
  }
}

export function matchGesture(input, validGestures) {
  let name, type;

  const path = getPathFrom(input);

  validGestures.edit.allTypes.forEach(gestureType => {
    const gestureMatched = validGestures.edit[gestureType].all.find(gesture => {
      const pathTrimmed = trimArray(path, gesture.path.length);

      return _.isEqual(pathTrimmed, gesture.path);
    });
    if (gestureMatched) {
      name = gestureMatched.name;
    }
    type = gestureType;
  });

  return {
    name,
    type
  };
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

export function matchMotionGesture(input, { edit: { motion } }) {
  if (input.length > 1) {
    const direction = getDirectionFrom(input);
    const motionInput = motion.all.find(nav => {
      return _.isEqual(direction, nav.path);
    });
    return motion[motionInput.name];
  }
}

function getDirectionFrom(positions) {
  if (positions[0].x < positions[1].x) {
    return "Right";
  }
  if (positions[0].x > positions[1].x) {
    return "Left";
  }
  if (positions[0].y < positions[1].y) {
    return "Down";
  }
  if (positions[0].y > positions[1].y) {
    return "Up";
  }
  //   while (count < positions.length - 1) {
  //     const firstPosition = positions[count];
  //     const secondPosition = positions[count + 1];

  //     if (firstPosition.y === secondPosition.y) {
  //       if (firstPosition.x - secondPosition.x === 1) {
  //         stringPath.push("Left");
  //       } else {
  //         stringPath.push("Right");
  //       }
  //     } else {
  //       if (firstPosition.y - secondPosition.y === 1) {
  //         stringPath.push("Up");
  //       } else {
  //         stringPath.push("Down");
  //       }
  //     }
  //     count++;
  //   }
}
