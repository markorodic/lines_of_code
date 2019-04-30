import React, { Component } from "react";
import {
  getRelativeMousePositionFrom,
  getRelativeTouchPositionFrom,
  getElementPosition
} from "./utils";

class GesturePad extends Component {
  state = {
    x: null,
    y: null,
    width: null,
    height: null
  };
  gesturePadElement = React.createRef();

  componentDidMount() {
    const { x, y, width, height } = getElementPosition(this.gesturePadElement);

    this.setState(currentState => ({
      x,
      y,
      width,
      height
    }));
  }

  onMouseMove = e => {
    e.preventDefault();
    getRelativeMousePositionFrom(e, this.state);
  };

  onTouchMove = e => {
    e.preventDefault();
    getRelativeTouchPositionFrom(e, this.state);
  };

  render() {
    return (
      <div
        onMouseMove={this.onMouseMove}
        onTouchMove={this.onTouchMove}
        className="gesture-pad"
        ref={this.gesturePadElement}
      >
        Gesture
      </div>
    );
  }
}

export default GesturePad;
