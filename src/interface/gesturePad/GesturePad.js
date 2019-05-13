import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { getPathFrom } from "./GesturePadHelpers";
import { gesturePatterns } from "./gestures/gesturePatterns";
import _ from "lodash";

function GesturePad(props) {
  const [pattern, setPattern] = React.useState([]);
  const [path, setPath] = React.useState([]);
  const [gesture, setGesture] = React.useState([]);
  const updatePatternState = pattern => setPattern(pattern);

  React.useEffect(() => {
    let patternTrimmed = null;
    if (path.length) {
      const validGesture = gesturePatterns.edit.find(gesture => {
        const pathTrimmed = path.slice(
          path.length - gesture.pattern.length,
          path.length
        );
        return _.isEqual(pathTrimmed, gesture.pattern);
      });
      if (validGesture) {
        patternTrimmed = pattern.slice(
          pattern.length - validGesture.pattern.length,
          pattern.length
        );
      }
      if (patternTrimmed) {
        setGesture(gesture.concat(patternTrimmed));
      }
    }
  }, [path, pattern]);

  React.useEffect(() => {
    setPath(getPathFrom(pattern));
  }, [pattern]);

  return (
    <GestureInput
      updatePatternState={updatePatternState}
      count={props.count}
      gestureActive={props.gestureActive}
      setgestureActive={props.setgestureActive}
      userActive={props.userActive}
      setUserActive={props.setUserActive}
      containerProperties={props.containerProperties}
      gesture={gesture}
    />
  );
}

export default GesturePad;
