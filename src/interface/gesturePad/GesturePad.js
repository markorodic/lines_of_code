import React, { useState, useRef } from "react";
import _ from "lodash";
import { getGridPosition } from "./GesturePadHelpers";
import {
  useRequestAnimationFrameOnLoad,
  useContainerProperties
} from "./GesturePad.customHooks";

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
      setDeathQueue(currentQueue => {
        currentQueue.push(deathQueueItem(position, count));
        return currentQueue;
      });
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

function deathQueueItem(position, count) {
  return {
    position,
    timeAdded: count,
    expired: false
  };
}
