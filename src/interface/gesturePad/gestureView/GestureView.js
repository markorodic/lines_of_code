import React, { Component } from "react";
import { connect } from "react-redux";
import { NUMBER_OF_BOXES } from "./../CONSTANTS";
import { INCREMENT_COUNT } from "./../GesturePad.actions";

class GestureView extends Component {
  state = {
    ctx: null,
    count: 0
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

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  renderView = () => {
    const { canvas, ctx, count } = this.state;
    const { currentPosition, deathQueue } = this.props.state;
    const { containerWidth } = this.props;
    const boxWidth = containerWidth / NUMBER_OF_BOXES.X;
    this.incrementCount();
    canvas.width = containerWidth;
    canvas.height = containerWidth;
    ctx.clearRect(0, 0, containerWidth, containerWidth);
    renderGrid(ctx, containerWidth, boxWidth);
    renderPoints(ctx, containerWidth, boxWidth);
    renderBox(ctx, currentPosition, boxWidth);
    renderDeathQueue(ctx, boxWidth, deathQueue, count);
    window.requestAnimationFrame(this.renderView);
  };

  render() {
    return <canvas id="canvas" ref={this.canvasDOMElement} />;
  }
}

function renderPoints(ctx, containerWidth, boxWidth) {
  let countX, countY;
  countY = 1;
  while (NUMBER_OF_BOXES.Y > countY) {
    countX = 1;
    while (NUMBER_OF_BOXES.X > countX) {
      const x = countX * boxWidth;
      const y = countY * boxWidth;
      ctx.fillStyle = "#9e9e9e";
      ctx.fillRect(x - 1, y - 1, 2, 2);
      countX++;
    }
    countY++;
  }
}

function renderGrid(ctx, containerWidth, boxWidth) {
  let count = 0;
  while (NUMBER_OF_BOXES.X > count) {
    const x = count * boxWidth;
    const y = 0 * boxWidth;
    ctx.fillStyle = "#f7f7f7";
    ctx.fillRect(x, y, 0.5, containerWidth);
    count = count + 1;
  }
  count = 0;
  while (NUMBER_OF_BOXES.X > count) {
    const x = 0 * boxWidth;
    const y = count * boxWidth;
    ctx.fillStyle = "#f7f7f7";
    ctx.fillRect(x, y, containerWidth, 0.5);
    count = count + 1;
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
  // incrementCount: () => dispatch({ type: INCREMENT_COUNT })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GestureView);
