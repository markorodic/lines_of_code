import React, { Component } from "react";
import { connect } from "react-redux";

class GestureView extends Component {
  state = {
    ctx: null
  };
  canvasDOMElement = React.createRef();

  componentDidMount() {
    const canvas = this.canvasDOMElement.current;
    const ctx = canvas.getContext("2d");
    this.setState(currentState => ({
      ctx
    }));
    window.requestAnimationFrame(this.renderView);
  }

  renderView = () => {
    console.log(this.props.state.currentPosition);
    window.requestAnimationFrame(this.renderView);
  };

  render() {
    return <canvas id="canvas" ref={this.canvasDOMElement} />;
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

export default connect(mapStateToProps)(GestureView);
