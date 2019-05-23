import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { matchMotionGesture } from "./GesturePad.helpers";
import { validGestures } from "./gestures/gesturePatterns";
import _ from "lodash";

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
    setPath(motionGesture);
    motionGesture.id = props.count;
    props.setInterfaceGesture(motionGesture);
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
