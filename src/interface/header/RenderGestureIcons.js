export function renderGestureIcon(
  ctx,
  marginX,
  marginY,
  boxWidth,
  count,
  gesture
) {
  const mid = boxWidth / 6;
  ctx.beginPath();
  switch (count) {
    case 0:
      ctx.moveTo(marginX + mid * 3, marginY + mid * 5);
      ctx.lineTo(marginX + mid * 3, marginY + mid * 1);
      ctx.lineTo(marginX + mid * 5, marginY + mid * 1);
      ctx.lineWidth = 2;
      if (gesture.name === "insert") {
        ctx.fillStyle = "red";
        ctx.strokeStyle = "red";
      } else {
        ctx.fillStyle = "#4e4e4e";
        ctx.strokeStyle = "white";
      }
      ctx.stroke();
      ctx.font = "lighter 10px Futura";
      ctx.fillText("Insert", marginX, marginY + mid * 8);
      break;
    case 1:
      ctx.moveTo(marginX + mid, marginY + mid * 5);
      ctx.lineTo(marginX + mid * 5, marginY + mid * 5);
      ctx.lineTo(marginX + mid * 5, marginY + mid * 3);
      ctx.lineWidth = 2;
      if (gesture.name === "delete") {
        ctx.fillStyle = "#FC5081";
        ctx.strokeStyle = "#FC5081";
      } else {
        ctx.fillStyle = "#4e4e4e";
        ctx.strokeStyle = "white";
      }
      ctx.stroke();
      ctx.font = "lighter 10px Futura";
      ctx.fillText("Delete", marginX, marginY + mid * 8);
      break;
    case 2:
      ctx.moveTo(marginX + mid * 3, marginY + mid * 1);
      ctx.lineTo(marginX + mid * 1, marginY + mid * 1);
      ctx.lineTo(marginX + mid * 1, marginY + mid * 5);
      ctx.lineTo(marginX + mid * 3, marginY + mid * 5);
      ctx.lineWidth = 2;
      if (gesture.name === "copy") {
        ctx.fillStyle = "#5CB290";
        ctx.strokeStyle = "#5CB290";
      } else {
        ctx.fillStyle = "#4e4e4e";
        ctx.strokeStyle = "white";
      }
      ctx.stroke();
      ctx.font = "lighter 10px Futura";
      ctx.fillText("Yank", marginX, marginY + mid * 8);
      break;
    case 3:
      ctx.moveTo(marginX + mid * 3, marginY + mid * 5);
      ctx.lineTo(marginX + mid * 3, marginY + mid * 1);
      ctx.lineTo(marginX + mid * 5, marginY + mid * 1);
      ctx.lineTo(marginX + mid * 5, marginY + mid * 3);
      ctx.lineWidth = 2;
      if (gesture.name === "paste") {
        ctx.strokeStyle = "red";
      } else {
        ctx.fillStyle = "#4e4e4e";
        ctx.strokeStyle = "white";
      }
      ctx.stroke();
      ctx.font = "lighter 10px Futura";
      ctx.fillText("Paste", marginX, marginY + mid * 8);
      break;
    case 4:
      ctx.moveTo(marginX + mid * 1, marginY + mid * 3);
      ctx.lineTo(marginX + mid * 1, marginY + mid * 5);
      ctx.lineTo(marginX + mid * 5, marginY + mid * 5);
      ctx.lineTo(marginX + mid * 5, marginY + mid * 3);
      ctx.lineWidth = 2;
      if (gesture.name === "cut") {
        ctx.fillStyle = "#A56FA3";
        ctx.strokeStyle = "#A56FA3";
      } else {
        ctx.fillStyle = "#4e4e4e";
        ctx.strokeStyle = "white";
      }
      ctx.stroke();
      ctx.font = "lighter 10px Futura";
      ctx.fillText("Cut", marginX, marginY + mid * 8);
      break;
    case 5:
      ctx.moveTo(marginX + mid * 1, marginY + mid * 3);
      ctx.lineTo(marginX + mid * 1, marginY + mid * 5);
      ctx.lineTo(marginX + mid * 5, marginY + mid * 5);
      ctx.lineTo(marginX + mid * 5, marginY + mid * 1);
      ctx.lineTo(marginX + mid * 3, marginY + mid * 1);
      ctx.lineWidth = 2;
      if (gesture.name === "change") {
        ctx.fillStyle = "#4E8DC4";
        ctx.strokeStyle = "#4E8DC4";
      } else {
        ctx.fillStyle = "#4e4e4e";
        ctx.strokeStyle = "white";
      }
      ctx.stroke();
      ctx.font = "lighter 10px Futura";
      ctx.fillText("Change", marginX, marginY + mid * 8);
      break;
    default:
      return;
  }
}
