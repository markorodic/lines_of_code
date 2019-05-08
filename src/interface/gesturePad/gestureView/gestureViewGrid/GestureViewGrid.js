export function renderGiridPointGuides(ctx, position, boxWidth, gestureActive) {
  if (position.x && gestureActive) {
    const guidePoints = [];
    let x, y;

    x = (position.x - 1) * boxWidth - boxWidth;
    y = (position.y - 1) * boxWidth;
    guidePoints.push({ x, y });

    x = (position.x - 1) * boxWidth - boxWidth;
    y = (position.y - 1) * boxWidth + boxWidth;
    guidePoints.push({ x, y });

    x = (position.x - 1) * boxWidth;
    y = (position.y - 1) * boxWidth - boxWidth;
    guidePoints.push({ x, y });

    x = (position.x - 1) * boxWidth + boxWidth;
    y = (position.y - 1) * boxWidth - boxWidth;
    guidePoints.push({ x, y });

    x = (position.x - 1) * boxWidth + 2 * boxWidth;
    y = (position.y - 1) * boxWidth;
    guidePoints.push({ x, y });

    x = (position.x - 1) * boxWidth + 2 * boxWidth;
    y = (position.y - 1) * boxWidth + boxWidth;
    guidePoints.push({ x, y });

    x = (position.x - 1) * boxWidth;
    y = (position.y - 1) * boxWidth + 2 * boxWidth;
    guidePoints.push({ x, y });

    x = (position.x - 1) * boxWidth + boxWidth;
    y = (position.y - 1) * boxWidth + 2 * boxWidth;
    guidePoints.push({ x, y });

    guidePoints.forEach(point => {
      ctx.fillStyle = "#969696";
      ctx.fillRect(point.x - 1, point.y - 1, 2, 2);
    });
  }
}
