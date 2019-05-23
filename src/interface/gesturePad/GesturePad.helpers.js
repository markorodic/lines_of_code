import _ from "lodash";

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
