import React, { Component } from "react";
import { connect } from "react-redux";
import { NUMBER_OF_BOXES } from "./../CONSTANTS";

class GestureView extends Component {
  state = {
    ctx: null
  };
  canvasDOMElement = React.createRef();

  componentDidMount() {
    const canvas = this.canvasDOMElement.current;
    const { containerWidth } = this.props;
    const ctx = canvas.getContext("2d");

    this.setState(currentState => ({
      canvas,
      ctx
    }));
    window.requestAnimationFrame(this.renderView);
  }

  renderView = () => {
    const { canvas, ctx } = this.state;
    let { currentPosition, count } = this.props.state;
    const { containerWidth } = this.props;
    const boxWidth = containerWidth / NUMBER_OF_BOXES.X;
    count += 1;
    canvas.width = containerWidth;
    canvas.height = containerWidth;
    ctx.clearRect(0, 0, containerWidth, containerWidth);
    drawBox(ctx, currentPosition, boxWidth);
    window.requestAnimationFrame(this.renderView);
  };

  render() {
    return <canvas id="canvas" ref={this.canvasDOMElement} />;
  }
}

function drawBox(ctx, position, boxWidth) {
  if (position.x) {
    const x = (position.x - 1) * boxWidth;
    const y = (position.y - 1) * boxWidth;
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, boxWidth, boxWidth);
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

export default connect(mapStateToProps)(GestureView);
