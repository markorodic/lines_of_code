import React, { useState, useRef, useEffect } from "react";
import {
  getGridPosition,
  getElementProperties,
  getUserPosition
} from "./GesturePadHelpers";
import _ from "lodash";

import GestureView from "./gestureView/GestureView";

export default function GesturePad(props) {
  const [position, setPosition] = useState({});
  const [count, setCount] = useState(0);
  const [deathQueue, setDeathQueue] = useState([]);
  const gesturePadElement = useRef();
  let containerProperties = useContainerProperties(gesturePadElement);

  const renderView = () => {
    setCount(prevCount => prevCount + 1);
    window.requestAnimationFrame(renderView);
  };

  useRequestAnimationFrameOnLoad(renderView);

  const savePosition = event => {
    event.preventDefault();
    const documentPosition = getDocumentPositionFrom(event);
    const newPosition = getGridPosition(documentPosition, containerProperties);

    if (mouseGridPositionHasChanged(position, newPosition)) {
      setDeathQueue(deathQueueItem(position, count));
      setPosition(newPosition);
    }
  };

  return (
    <div
      onMouseMove={savePosition}
      onTouchMove={savePosition}
      className="gesture-pad"
      ref={gesturePadElement}
      data-testid="gesture-pad"
    >
      <GestureView
        containerWidth={containerProperties.width}
        gridPosition={position}
        count={count}
        deathQueue={deathQueue}
      />
    </div>
  );
}

function getDocumentPositionFrom(event) {
  let position;
  if (event.type === "mousemove") {
    position = { x: event.clientX, y: event.clientY };
  }

  if (event.type === "touchmove") {
    position = {
      x: event.changedTouches[0].clientX,
      y: event.changedTouches[0].clientY
    };
  }

  return position;
}

function mouseGridPositionHasChanged(currentPosition, newPosition) {
  return !_.isEqual(currentPosition, newPosition);
}

function useRequestAnimationFrameOnLoad(renderView) {
  useEffect(() => {
    window.requestAnimationFrame(renderView);
  }, []);
}

function useContainerProperties(gesturePadElement) {
  const [containerProperties, setContainerProperties] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  useEffect(() => {
    const { x, y, width, height } = getElementProperties(gesturePadElement);
    setContainerProperties({
      x,
      y,
      width,
      height
    });
  }, []);
  return containerProperties;
}

function deathQueueItem(gridPosition, count) {
  return {
    gridPosition,
    timeAdded: count,
    expired: false
  };
}
