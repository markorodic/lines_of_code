import React, { Component } from "react";
import {
  pointerPosition,
  pointerGridPosition,
  getElementPosition
} from "./GesturePadHelpers";

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
    const { width, height } = this.state;
    const xPosition = e.clientX;
    const yPosition = e.clientY;

    // get the grid position
    // if new
    // dispatch an action with new position
    // else
    // do nothing

    const mousePosition = pointerPosition(xPosition, yPosition, width, height);

    pointerGridPosition(mousePosition, width, height);
  };

  onTouchMove = e => {
    e.preventDefault();
    const { width, height } = this.state;
    const xPosition = e.changedTouches[0].clientX;
    const yPosition = e.changedTouches[0].clientY;

    const touchPosition = pointerPosition(xPosition, yPosition, width, height);

    pointerGridPosition(touchPosition, width, height);
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
