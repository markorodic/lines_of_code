import { useEffect, useState } from "react";

export function useContainerProperties(element) {
  const [containerProperties, setContainerProperties] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const { x, y, width, height } = element.current.getBoundingClientRect();
    setContainerProperties({
      x,
      y,
      width,
      height,
    });
  }, [element]);
  return containerProperties;
}
