import React, { useRef } from "react";
import { Section } from "./styles";
import GestureView from "./gestureView";
import { useGestureState } from "../../provider/customHooks";
import { useContainerProperties } from "../../customHooks";
import { useHandleInput } from "./customHooks";

const GestureInput = () => {
  const { mode } = useGestureState();
  const inputElement = useRef(null);
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

export default GestureInput;
