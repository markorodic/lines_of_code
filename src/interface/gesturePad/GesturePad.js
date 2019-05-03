import React, { Component } from "react";
import { connect } from "react-redux";
import { NEW_POSITION } from "./GesturePad.actions";
import { getGridPosition, getElementPosition } from "./GesturePadHelpers";

class GesturePad extends Component {
  state = {
    containerX: null,
    containerY: null,
    containerWidth: null,
    containerHeight: null
  };
  gesturePadElement = React.createRef();

  componentDidMount() {
    const {
      x: containerX,
      y: containerY,
      width: containerWidth,
      height: containerHeight
    } = getElementPosition(this.gesturePadElement);

    this.setState(currentState => ({
      containerX,
      containerY,
      containerWidth,
      containerHeight
    }));
  }

  onMouseMove = e => {
    e.preventDefault();
    const documentPosition = { x: e.clientX, y: e.clientY };
    const containerProperties = this.state;
    const gridPosition = getGridPosition(documentPosition, containerProperties);

    if (gridPosition != this.props.state.currentPosition) {
      this.props.saveNewPosition(gridPosition);
    }
  };

  onTouchMove = e => {
    e.preventDefault();
    const documentPosition = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    };
    const containerProperties = this.state;
    const gridPosition = getGridPosition(documentPosition, containerProperties);

    if (gridPosition != this.props.state.currentPosition) {
      this.props.saveNewPosition(gridPosition);
    }
  };

  render() {
    return (
      <div
        onMouseMove={this.onMouseMove}
        onTouchMove={this.onTouchMove}
        className="gesture-pad"
        ref={this.gesturePadElement}
        data-testid="gesture-pad"
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
