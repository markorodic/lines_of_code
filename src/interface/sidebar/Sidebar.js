import React from "react";

function Sidebar(props) {
  const SidebarElement = React.useRef();
  const canvasElement = React.useRef();
  const containerProperties = useContainerProperties(SidebarElement);

  useRenderGestureView(
    containerProperties.width,
    containerProperties.height,
    canvasElement,
    props.gestureActive,
    props.interfaceGesture
  );

  return (
    <section className="sidebar" ref={SidebarElement}>
      <canvas id="canvas" ref={canvasElement} />
    </section>
  );
}

function useRenderView(
  ctx,
  containerWidth,
  containerHeight,
  gestureActive,
  interfaceGesture
) {
  React.useEffect(() => {
    if (ctx) {
      clearCanvas(ctx, containerWidth);
    }
    if (interfaceGesture.numberAdded) {
      const gestureKeys = Object.keys(interfaceGesture.each);
      gestureKeys.forEach(key => {
        const positions = interfaceGesture.each[key].positions;
        const margin = 90 * (key - 1) + 15;
        const textMargin = 90 * key;
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(5, margin, 60, 60);
        drawLine(ctx, positions, margin);
        ctx.fillStyle = "black";
        ctx.font = "8px Verdana";

        ctx.fillText("Move Right", 5, textMargin);
      });
    }
  }, [ctx, containerWidth, gestureActive, interfaceGesture]);
}

function drawLine(ctx, positions, margin) {
  positions = [{ x: 15, y: 30 }, { x: 35, y: 30 }];
  ctx.beginPath();
  positions.forEach((position, index) => {
    if (index) {
      ctx.lineTo(position.x, position.y + margin);
    } else {
      ctx.moveTo(position.x, position.y + margin);
    }
  });
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.stroke();
}

export function clearCanvas(ctx, containerWidth) {
  ctx.clearRect(0, 0, 500, 500);
}

export function useRenderGestureView(
  containerWidth,
  containerHeight,
  canvasElement,
  gestureActive,
  interfaceGesture
) {
  const ctx = useCreateCanvasContext(
    containerWidth,
    containerHeight,
    canvasElement
  );
  useRenderView(
    ctx,
    containerWidth,
    containerHeight,
    gestureActive,
    interfaceGesture
  );
}

function useCreateCanvasContext(
  containerWidth,
  containerHeight,
  canvasElement
) {
  const [ctx, setCtx] = React.useState(null);
  React.useEffect(() => {
    const canvas = canvasElement.current;
    canvas.width = containerWidth;
    canvas.height = containerHeight;
    setCtx(canvas.getContext("2d"));
  }, [containerWidth, containerHeight, canvasElement]);

  return ctx;
}

export function useContainerProperties(SidebarElement) {
  const [containerProperties, setContainerProperties] = React.useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  React.useEffect(() => {
    const { x, y, width, height } = getElementProperties(SidebarElement);
    setContainerProperties({
      x,
      y,
      width,
      height
    });
  }, [SidebarElement]);
  return containerProperties;
}

function getElementProperties(element) {
  return element.current.getBoundingClientRect();
}

export default Sidebar;
