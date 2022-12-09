const headMovements = Deno.readTextFileSync("./testInput.txt").split("\n");
// const headMovements = Deno.readTextFileSync("./input.txt").split("\n");

type Direction = "R" | "L" | "U" | "D";
type Position = { x: number; y: number };

const visitTailPoints = new Set<string>();

let headPosition: Position = { x: 0, y: 0 };
let tailPosition: Position = { x: 0, y: 0 };

// Add initial position
visitTailPoints.add(JSON.stringify({ x: 0, y: 0 }));

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

  //  TODO: Do move logic here
  return diff;
}

for (let index = 0; index < headMovements.length; index++) {
  const [direction, amount] = headMovements[index].split(" ");
  let directionCount = Number(amount);

  while (directionCount) {
    headPosition = moveHead(headPosition, direction as Direction);
    tailPosition = moveTailtoHead(tailPosition, headPosition);
    console.log({ headPosition, tailPosition });

    // visitTailPoints.add(JSON.stringify(tailPosition));

    directionCount--;
  }
}

console.log({ visitTailPoints: visitTailPoints.size });
