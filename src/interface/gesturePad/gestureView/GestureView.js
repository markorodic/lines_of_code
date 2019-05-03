import React, { Component } from "react";
import { connect } from "react-redux";
import { NUMBER_OF_BOXES } from "./../CONSTANTS";
import { INCREMENT_COUNT } from "./../GesturePad.actions";

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
    const { currentPosition, count, deathQueue } = this.props.state;
    const { containerWidth } = this.props;
    const boxWidth = containerWidth / NUMBER_OF_BOXES.X;
    this.props.incrementCount();
    canvas.width = containerWidth;
    canvas.height = containerWidth;
    ctx.clearRect(0, 0, containerWidth, containerWidth);
    renderBox(ctx, currentPosition, boxWidth);
    renderDeathQueue(ctx, boxWidth, deathQueue, count);
    window.requestAnimationFrame(this.renderView);
  };

  render() {
    return <canvas id="canvas" ref={this.canvasDOMElement} />;
  }
}

function renderBox(ctx, position, boxWidth) {
  if (position.x) {
    const x = (position.x - 1) * boxWidth;
    const y = (position.y - 1) * boxWidth;
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, boxWidth, boxWidth);
  }
}

function renderDeathQueue(ctx, boxWidth, deathQueue, count) {
  if (deathQueue.length) {
    deathQueue.forEach(box => {
      const diff = count - box.timeAdded;
      if (diff < 20) {
        const alphaValue = 1 - diff / 20;
        ctx.fillStyle = `rgba(0, 0, 0, ${alphaValue})`;
      } else {
        ctx.fillStyle = "rgba(0,0,0,0)";
        box.expired = true;
      }
      const x = (box.position.x - 1) * boxWidth;
      const y = (box.position.y - 1) * boxWidth;
      ctx.fillRect(x, y, boxWidth, boxWidth);
    });
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

const mapDispatchToProps = dispatch => ({
  incrementCount: () => dispatch({ type: INCREMENT_COUNT })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GestureView);
