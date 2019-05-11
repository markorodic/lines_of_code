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

export function useContainerProperties(GestureInputElement) {
  const [containerProperties, setContainerProperties] = React.useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  React.useEffect(() => {
    const { x, y, width, height } = getElementProperties(GestureInputElement);
    setContainerProperties({
      x,
      y,
      width,
      height
    });
  }, [GestureInputElement]);
  return containerProperties;
}

export function getElementProperties(element) {
  return element.current.getBoundingClientRect();
}

export default function Interface() {
  const [gestureActive, setgestureActive] = React.useState(false);
  const [userActive, setUserActive] = React.useState(false);
  const [count, setCount] = React.useState(0);

  useAnimationFrame(() => {
    setCount(count + 1);
    // whenGestureIsInactive(state, () => {
    //   clearExpiringPositions();
    //   props.updatePatternState(state.pattern);
    //   clearPattern(state.position);
    // });
  });

  return (
    <div className="interface">
      <img src={logo} alt="" />
      <Header
        count={count}
        gestureActive={gestureActive}
        userActive={userActive}
      />
      <Views>
        <CodeEditor count={count} />
        <GesturePad
          count={count}
          gestureActive={gestureActive}
          setgestureActive={setgestureActive}
          userActive={userActive}
          setUserActive={setUserActive}
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
