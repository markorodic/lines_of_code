import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { getPathFrom } from "./GesturePadHelpers";
import { gesturePatterns } from "./gestures/gesturePatterns";

function GesturePad(props) {
  const [pattern, setPattern] = React.useState([]);
  const [path, setPath] = React.useState([]);
  const updatePatternState = pattern => setPattern(pattern);

  React.useEffect(() => {
    console.log(path);
  }, [path]);

  React.useEffect(() => {
    setPath(getPathFrom(pattern));
    console.log(path);
  }, [pattern]);

  return (
    <GestureInput
      updatePatternState={updatePatternState}
      count={props.count}
      gestureActive={props.gestureActive}
      setgestureActive={props.setgestureActive}
      containerProperties={props.containerProperties}
    />
  );
}

export default GesturePad;
