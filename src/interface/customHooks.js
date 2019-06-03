import React from "react";

export function getElementProperties(element) {
  return element.current.getBoundingClientRect();
}

export function useContainerProperties(GestureInputElement) {
  const [containerProperties, setContainerProperties] = React.useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  React.useEffect(() => {
    const { x, y, width, height } = getElementProperties(GestureInputElement);
    setContainerProperties({
      x,
      y,
      width,
      height
    });
  }, [GestureInputElement]);
  return containerProperties;
}
