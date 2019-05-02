import React, { Component } from "react";
import { connect } from "react-redux";
import { NEW_POSITION } from "./GesturePad.actions";
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
    const { x, y, width, height } = this.state;
    const xPosition = e.clientX;
    const yPosition = e.clientY;

    // abstract this inside currentGridPosition
    const mousePosition = pointerPosition(xPosition, yPosition, x, y);

    const position = pointerGridPosition(mousePosition, width, height);
    console.log(position);
    this.props.saveNewPosition(position);

    // test the onMouseMove and onTouchMove functions

    // connect component to the store

    // if grid position is new
    // dispatch action to save the position to the store
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

function mapStateToProps(state) {
  return {
    state: state
  };
}

const mapDispatchToProps = dispatch => ({
  saveNewPosition: position => dispatch({ type: NEW_POSITION, position })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GesturePad);
