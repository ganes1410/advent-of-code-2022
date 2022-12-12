// const headMovements = Deno.readTextFileSync("./testInput.txt").split("\n");
const headMovements = Deno.readTextFileSync("./input.txt").split("\n");

type Direction = "R" | "L" | "U" | "D";
type Position = { x: number; y: number };

function moveHead(position: Position, direction: Direction): Position {
  switch (direction) {
    case "R":
      return { x: position.x + 1, y: position.y };
    case "L":
      return { x: position.x - 1, y: position.y };
    case "U":
      return { x: position.x, y: position.y + 1 };
    case "D":
      return { x: position.x, y: position.y - 1 };
  }
}

function moveTailtoHead(
  tailPosition: Position,
  headPosition: Position
): Position {
  const diff: Position = {
    x: headPosition.x - tailPosition.x,
    y: headPosition.y - tailPosition.y,
  };

  // Already touching
  if (Math.abs(diff.x) <= 1 && Math.abs(diff.y) <= 1) return tailPosition;

  if (diff.y === 0) {
    return {
      x: diff.x === 2 ? tailPosition.x + 1 : tailPosition.x - 1,
      y: tailPosition.y,
    };
  } else if (diff.x === 0) {
    return {
      x: tailPosition.x,
      y: diff.y === 2 ? tailPosition.y + 1 : tailPosition.y - 1,
    };
  } else {
    return {
      x: diff.x > 0 ? tailPosition.x + 1 : tailPosition.x - 1,
      y: diff.y > 0 ? tailPosition.y + 1 : tailPosition.y - 1,
    };
  }
}

export type { Direction, Position };
export { headMovements, moveHead, moveTailtoHead };
