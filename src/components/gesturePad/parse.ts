import { isEmpty, isEqual } from "lodash";
import { Gesture } from "../../provider/reducer";
import { gesturePatterns } from "./patterns";

export interface Position {
  x: number;
  y: number;
}

// export interface GesturePattern extends Gesture {
//   pattern: Pattern;
// }

export type Pattern = Position[];

export type Direction = "Up" | "Down" | "Left" | "Right";

const MAX_PATH_LENGTH = 6;

// should be a pure function - app handles state
export const parse = (
  previousPosition: Position,
  newPosition: Position,
  pattern: Pattern,
): { gesture: Gesture; newPattern: Pattern } => {
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
  const matchedGesture = gesturePatterns.find(({ path: gesturePath }) => {
    const inputPath = getDirectionsFrom(pattern);
    return findMatches(gesturePath, inputPath);
  }) as Gesture;
  const gesturePattern = trimPattern(pattern, matchedGesture);

  return { ...matchedGesture, pattern: gesturePattern };
};

const findMatches = (gesturePath: string[], inputPath: string[]) =>
  isEqual(trimPath(gesturePath, inputPath), gesturePath);

const trimPath = (gesturePath: string[], inputPath: string[]) =>
  inputPath.slice(inputPath.length - gesturePath.length, inputPath.length);

const getDirectionsFrom = (pattern: Position[]) =>
  pattern.reduce((directions: Direction[], position: Position, index) => {
    if (pattern.length === index + 1) return directions;

    const secondPosition = pattern[index + 1];
    const direction = getDirection(position, secondPosition);
    directions.push(direction);

    return directions;
  }, []);

const getDirection = (position: Position, secondPosition: Position) => {
  if (position.x - secondPosition.x >= 1) {
    return "Left";
  } else if (position.x - secondPosition.x <= -1) {
    return "Right";
  } else if (position.y - secondPosition.y >= 1) {
    return "Up";
  } else if (position.y - secondPosition.y <= -1) {
    return "Down";
  }

  return "Up";
};

const trimPattern = (pattern: Position[], { path }: { path: string[] }) =>
  pattern.slice(pattern.length - path.length - 1, pattern.length);
