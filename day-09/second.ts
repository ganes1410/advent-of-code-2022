import {
  Direction,
  headMovements,
  moveHead,
  moveTailtoHead,
  Position,
} from "./utils.ts";

// First is head, last is tail
const rope: Position[] = Array.from({ length: 10 }, () => ({ x: 0, y: 0 }));

const visitTailPoints = new Set<string>();

// Add initial tail position
visitTailPoints.add(JSON.stringify({ x: 0, y: 0 }));

for (let index = 0; index < headMovements.length; index++) {
  const [direction, amount] = headMovements[index].split(" ");
  let directionCount = Number(amount);

  while (directionCount) {
    rope[0] = moveHead(rope[0], direction as Direction);

    for (let ropeIndex = 1; ropeIndex < rope.length; ropeIndex++) {
      rope[ropeIndex] = moveTailtoHead(rope[ropeIndex], rope[ropeIndex - 1]);
    }

    // Add Tail
    visitTailPoints.add(JSON.stringify(rope[rope.length - 1]));

    directionCount--;
  }
}

console.log({ visitTailPoints: visitTailPoints.size }); // 2734
