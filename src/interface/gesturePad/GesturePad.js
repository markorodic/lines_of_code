import React from "react";
import GestureInput from "./gestureInput/GestureInput";

function GesturePad(props) {
  const [pattern, setPattern] = React.useState([]);
  const updatePatternState = pattern => setPattern(pattern);
  return <GestureInput updatePatternState={updatePatternState} />;
}

export default GesturePad;
