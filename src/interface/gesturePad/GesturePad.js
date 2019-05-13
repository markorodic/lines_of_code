import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { getPathFrom } from "./GesturePadHelpers";
import { gesturePatterns } from "./gestures/gesturePatterns";
import _ from "lodash";
import { debug } from "util";

function GesturePad(props) {
  const [pattern, setPattern] = React.useState([]);
  const [path, setPath] = React.useState([]);
  const [gesture, setGesture] = React.useState({});
  const updatePatternState = pattern => setPattern(pattern);

  React.useEffect(() => {
    const { count } = props;
    let patternMatched = null;
    if (path.length) {
      const validGesture = gesturePatterns.edit.find(gesture => {
        const pathTrimmed = path.slice(
          path.length - gesture.pattern.length,
          path.length
        );
        return _.isEqual(pathTrimmed, gesture.pattern);
      });
      if (validGesture) {
        patternMatched = pattern.slice(
          pattern.length - validGesture.pattern.length,
          pattern.length
        );
      }
      setGesture({ patternMatched, count });
    }
  }, [path, setGesture, props, pattern]);

  React.useEffect(() => {
    const { count } = props;
    // if (gesture.patternMatched) {
    //   if (gesture.count - 50 > count) {
    //     console.log(gesture.count, count);
    //     setGesture({});
    //   }
    // }
  }, [props, gesture]);

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
