export function renderGestureIcon(
  ctx,
  marginX,
  marginY,
  boxWidth,
  count,
  gesture
) {
  marginX += 0.5;
  marginY += 0.5;
  const mid = boxWidth / 6;
  ctx.beginPath();
  switch (count) {
    // case 0:
    //   ctx.moveTo(marginX + mid * 3, marginY + mid * 5);
    //   ctx.lineTo(marginX + mid * 3, marginY + mid * 1);
    //   ctx.lineTo(marginX + mid * 5, marginY + mid * 1);
    //   ctx.lineWidth = 1;
    //   if (gesture.name === "insert") {
    //     ctx.fillStyle = "red";
    //     ctx.strokeStyle = "red";
    //   } else {
    //     ctx.fillStyle = "white";
    //     ctx.strokeStyle = "white";
    //   }
    //   ctx.stroke();
    //   ctx.font = "lighter 8px Futura";
    //   ctx.fillText("INSERT", marginX, marginY + mid * 8);
    //   break;
    case 0:
      ctx.moveTo(marginX + mid, marginY + mid * 5);
      ctx.lineTo(marginX + mid * 5, marginY + mid * 5);
      ctx.lineTo(marginX + mid * 5, marginY + mid * 3);
      if (gesture.name === "delete") {
        ctx.lineWidth = 2;
        ctx.fillStyle = "#FC5081";
        ctx.strokeStyle = "#FC5081";
      } else {
        ctx.lineWidth = 1;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
      }
      ctx.stroke();
      ctx.font = "lighter 8px Futura";
      ctx.fillText("DELETE", marginX, marginY + mid * 8);
      break;
    case 1:
      ctx.moveTo(marginX + mid * 3, marginY + mid * 1);
      ctx.lineTo(marginX + mid * 1, marginY + mid * 1);
      ctx.lineTo(marginX + mid * 1, marginY + mid * 5);
      ctx.lineTo(marginX + mid * 3, marginY + mid * 5);
      if (gesture.name === "copy") {
        ctx.lineWidth = 2;
        ctx.fillStyle = "#5CB290";
        ctx.strokeStyle = "#5CB290";
      } else {
        ctx.lineWidth = 1;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
      }
      ctx.stroke();
      ctx.font = "lighter 8px Futura";
      ctx.fillText("COPY", marginX, marginY + mid * 8);
      break;
    case 2:
      ctx.moveTo(marginX + mid * 3, marginY + mid * 5);
      ctx.lineTo(marginX + mid * 3, marginY + mid * 1);
      ctx.lineTo(marginX + mid * 5, marginY + mid * 1);
      ctx.lineTo(marginX + mid * 5, marginY + mid * 3);
      if (gesture.name === "paste") {
        ctx.lineWidth = 2;
        ctx.fillStyle = "#FEDD32";
        ctx.strokeStyle = "#FEDD32";
      } else {
        ctx.lineWidth = 1;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
      }
      ctx.stroke();
      ctx.font = "lighter 8px Futura";
      ctx.fillText("PASTE", marginX, marginY + mid * 8);
      break;
    case 3:
      ctx.moveTo(marginX + mid * 1, marginY + mid * 3);
      ctx.lineTo(marginX + mid * 1, marginY + mid * 5);
      ctx.lineTo(marginX + mid * 5, marginY + mid * 5);
      ctx.lineTo(marginX + mid * 5, marginY + mid * 3);
      if (gesture.name === "cut") {
        ctx.lineWidth = 2;
        ctx.fillStyle = "#A56FA3";
        ctx.strokeStyle = "#A56FA3";
      } else {
        ctx.lineWidth = 1;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
      }
      ctx.stroke();
      ctx.font = "lighter 8px Futura";
      ctx.fillText("CUT", marginX, marginY + mid * 8);
      break;
    // case 5:
    //   ctx.moveTo(marginX + mid * 1, marginY + mid * 3);
    //   ctx.lineTo(marginX + mid * 1, marginY + mid * 5);
    //   ctx.lineTo(marginX + mid * 5, marginY + mid * 5);
    //   ctx.lineTo(marginX + mid * 5, marginY + mid * 1);
    //   ctx.lineTo(marginX + mid * 3, marginY + mid * 1);
    //   ctx.lineWidth = 1;
    //   if (gesture.name === "change") {
    //     ctx.fillStyle = "#4E8DC4";
    //     ctx.strokeStyle = "#4E8DC4";
    //   } else {
    //     ctx.fillStyle = "white";
    //     ctx.strokeStyle = "white";
    //   }
    //   ctx.stroke();
    //   ctx.font = "lighter 8px Futura";
    //   ctx.fillText("CHANGE", marginX, marginY + mid * 8);
    //   break;
    default:
      return;
  }
}
