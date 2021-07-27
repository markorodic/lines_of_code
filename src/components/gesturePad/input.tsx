import React, { useRef } from "react";
import { Section } from "./styles";
import GestureView from "./view";
import { useGesture } from "../../provider/customHooks";
import { useHandleInput, useContainerProperties } from "./customHooks";

const GestureInput = () => {
  const {
    state: { mode },
  } = useGesture();
  // Q.3 Refs
  // A. If you hover over inputElement it shows the type as React.RefObject<HTMLElement>
  // so a ref contains a property that is the element, but the ref is not. But the useRef
  // type signature on line 15 is correct
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

export default GestureInput;
