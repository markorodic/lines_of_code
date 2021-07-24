import { isEmpty, isEqual } from "lodash";
import { validGestures } from "../../gesturesPatterns/gesturePatterns";
import { MAX_PATH_LENGTH } from "./CONSTANTS";

// should be a pure function - app handles state
export interface Position {
  x: number;
  y: number;
}

interface Gesture {
  id: number;
  length: number;
  name: string;
  path: string[];
  type: "Motion" | "Operation" | "Inactive" | string;
}

interface GesturePattern extends Gesture {
  pattern: Pattern;
}

export type Pattern = Position[];

export const parse = (
  previousPosition: Position,
  newPosition: Position,
  pattern: Pattern,
): { gesture: GesturePattern; newPattern: Pattern } => {
  const newPattern = getNewPattern(previousPosition, newPosition, pattern);
  const gesture = getGesture(newPattern);

  return { gesture, newPattern };
};

const getNewPattern = (
  previousPosition: Position,
  newPosition: Position,
  pattern: Position[],
): Position[] => {
  if (pattern.length > MAX_PATH_LENGTH) pattern.shift();
  if (pattern.length > 0) return pattern.concat(newPosition);

  const firstPosition = isEmpty(previousPosition)
    ? { ...newPosition, y: newPosition.y - 1 }
    : previousPosition;

  return pattern.concat(firstPosition, newPosition);
};

const getGesture = (pattern: Position[]) => {
  const matchedGesture = validGestures.allPaths.find(
    ({ path: gesturePath }) => {
      const inputPath = getDirectionsFrom(pattern);
      return findMatches(gesturePath, inputPath);
    },
  ) as Gesture;
  const gesturePattern = trimPattern(pattern, matchedGesture);

  return { ...matchedGesture, pattern: gesturePattern };
};

const findMatches = (gesturePath: string[], inputPath: string[]) =>
  isEqual(trimPath(gesturePath, inputPath), gesturePath);

const trimPath = (gesturePath: string[], inputPath: string[]) =>
  inputPath.slice(inputPath.length - gesturePath.length, inputPath.length);

enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

const getDirectionsFrom = (pattern: Position[]) =>
  pattern.reduce((acc: Direction[], position: Position, index) => {
    if (pattern.length === index + 1) return acc;

    const secondPosition = pattern[index + 1];
    const direction = getDirection(position, secondPosition);
    acc.push(direction);

    return acc;
  }, []);

const getDirection = (position: Position, secondPosition: Position) => {
  if (position.x - secondPosition.x >= 1) {
    return Direction.Left;
  } else if (position.x - secondPosition.x <= -1) {
    return Direction.Right;
  } else if (position.y - secondPosition.y >= 1) {
    return Direction.Up;
  } else if (position.y - secondPosition.y <= -1) {
    return Direction.Down;
  }

  return Direction.Up;
};

const trimPattern = (pattern: Position[], { path }: { path: string[] }) =>
  pattern.slice(pattern.length - path.length - 1, pattern.length);
