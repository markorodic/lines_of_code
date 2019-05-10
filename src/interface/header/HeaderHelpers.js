export function clearCanvas(ctx, containerWidth) {
  ctx.clearRect(0, 0, containerWidth, containerWidth);
}

export function renderPattern(ctx, boxWidth) {
  const x = 0;
  const y = 0;
  ctx.fillStyle = "red";
  ctx.fillRect(x, y, 40, 40);
  ctx.fillStyle = "white";
  ctx.font = "10px";
  ctx.fillText("Delete", 0, 55);
}
