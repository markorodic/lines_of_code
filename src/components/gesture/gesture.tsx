import React, { useRef } from "react";
import { Section } from "./styles";
import GestureView from "./view";
import { useGesture } from "../../provider/customHooks";
import { useHandleInput, useContainerProperties } from "./customHooks";

const Gesture = () => {
  const {
    state: { mode },
  } = useGesture();
  const inputElement = useRef<HTMLElement>(null);
  const containerProperties = useContainerProperties(inputElement);

  const { position, onMove, onMoveEnd } = useHandleInput(containerProperties);

  return (
    <Section
      ref={inputElement}
      onMouseMove={onMove}
      onTouchMove={onMove}
      onMouseLeave={onMoveEnd}
      onTouchEnd={onMoveEnd}
    >
      <GestureView
        position={position}
        isOnPad={mode !== "Inactive"}
        containerWidth={containerProperties.width}
      />
    </Section>
  );
};

export default Gesture;
