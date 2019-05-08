import React from "react";
import GestureInput from "./gestureInput/GestureInput";
import { getPathFrom } from "./GesturePadHelpers";

function GesturePad(props) {
  const [pattern, setPattern] = React.useState([]);
  const [path, setPath] = React.useState([]);
  const updatePatternState = pattern => setPattern(pattern);

  React.useEffect(() => {
    setPath(getPathFrom(pattern));
  }, [pattern]);

  return <GestureInput updatePatternState={updatePatternState} />;
}

export default GesturePad;
