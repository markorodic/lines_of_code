import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { getPathFrom } from "./GesturePadHelpers";
import { gesturePatterns } from "./gestures/gesturePatterns";

function GesturePad(props) {
  const [pattern, setPattern] = React.useState([]);
  const [path, setPath] = React.useState([]);
  const updatePatternState = pattern => setPattern(pattern);

  React.useEffect(() => {
    // gesturePatterns.forEach(pattern => {
    //   console.log(pattern);
    // });
    // console.log(gesturePatterns);
  }, [path]);

  React.useEffect(() => {
    setPath(getPathFrom(pattern));
  }, [pattern]);

  return (
    <GestureInput
      updatePatternState={updatePatternState}
      count={props.count}
      userIsActive={props.userIsActive}
      setUserIsActive={props.setUserIsActive}
    />
  );
}

export default GesturePad;
