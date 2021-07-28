import { MouseEvent, TouchEvent } from "react";

export type Event = MouseEvent<HTMLElement> | TouchEvent<HTMLElement>;

export interface ContainerProperties {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type Canvas = CanvasRenderingContext2D;
