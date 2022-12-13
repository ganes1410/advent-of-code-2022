import {
  headMovements,
  moveHead,
  moveTailtoHead,
  Direction,
  Position,
} from "./utils.ts";

let headPosition: Position = { x: 0, y: 0 };
let tailPosition: Position = { x: 0, y: 0 };
const visitTailPoints = new Set<string>();

// Add initial position
visitTailPoints.add(JSON.stringify({ x: 0, y: 0 }));

for (let index = 0; index < headMovements.length; index++) {
  const [direction, amount] = headMovements[index].split(" ");
  let directionCount = Number(amount);

  while (directionCount) {
    headPosition = moveHead(headPosition, direction as Direction);
    tailPosition = moveTailtoHead(tailPosition, headPosition);

    visitTailPoints.add(JSON.stringify(tailPosition));

    directionCount--;
  }
}

console.log({ visitTailPoints: visitTailPoints.size }); // 6384
