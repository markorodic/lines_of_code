import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { matchMotionGesture } from "./GesturePad.helpers";
import { trimArray } from "./GesturePadHelpers";
import { validGestures } from "./gestures/gesturePatterns";
import _ from "lodash";
import { realpathSync } from "fs";

function GesturePad(props) {
  const [path, setPath] = React.useState([]);
  const [gestureState, setGestureState] = React.useState({
    gestures: {},
    positions: [],
    path: [],
    length: 0
  });

  const inputAdded = input => {
    const motionGesture = matchMotionGesture(input, validGestures);
    const motionGestureDirection = motionGesture.path;
    const newPath = path;
    if (path.length === 7) {
      newPath.shift();
    }
    newPath.push(motionGestureDirection);
    setPath(newPath);

    const matchedGesture = validGestures.edit.operator.all.find(operator => {
      const pathTrimmed = trimArray(newPath, operator.path.length);

      return _.isEqual(pathTrimmed, operator.path);
    });
    if (matchedGesture) {
      const gesture = validGestures.edit.operator[matchedGesture.name];
      props.setInterfaceGesture(gesture);
    } else {
      motionGesture.id = props.count;
      props.setMove(motionGesture);
    }

    // if (gesture) {
    //   const newGestureState = getGestureState(
    //     gesture,
    //     inputPositions,
    //     gestureState
    //   );
    //   setGestureState(newGestureState);
    // }
  };

  return (
    <GestureInput
      updatePositionGestureState={inputAdded}
      count={props.count}
      updatePatternState={inputAdded}
      gestureActive={props.gestureActive}
      setGestureActive={props.setGestureActive}
      userActive={props.userActive}
      setUserActive={props.setUserActive}
      containerProperties={props.containerProperties}
      gesture={gestureState}
    />
  );
}

export default GesturePad;
