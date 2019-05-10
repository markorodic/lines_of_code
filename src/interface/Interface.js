import React, { Component } from "react";
import Header from "./header/Header";
import CodeEditor from "./codeEditor/CodeEditor";
import GesturePad from "./gesturePad/GesturePad";
import "./Interface.css";
import logo from "../logo.svg";

export const useAnimationFrame = callback => {
  const callbackRef = React.useRef(callback);
  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  const loop = () => {
    frameRef.current = requestAnimationFrame(loop);
    const cb = callbackRef.current;
    cb();
  };
  const frameRef = React.useRef();
  React.useLayoutEffect(() => {
    frameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);
};

export default function Interface() {
  const [userIsActive, setUserIsActive] = React.useState(false);
  const [count, setCount] = React.useState(0);
  useAnimationFrame(() => {
    setCount(count + 1);
    console.log(userIsActive);
    // whenGestureIsInactive(state, () => {
    //   clearExpiringPositions();
    //   props.updatePatternState(state.pattern);
    //   clearPattern(state.position);
    // });
  });

  return (
    <div className="interface">
      <img src={logo} alt="" />
      <Header count={count} />
      <Views>
        <CodeEditor count={count} />
        <GesturePad
          count={count}
          userIsActive={userIsActive}
          setUserIsActive={setUserIsActive}
        />
      </Views>
    </div>
  );
}

class Views extends Component {
  render() {
    return <div className="views">{this.props.children}</div>;
  }
}
