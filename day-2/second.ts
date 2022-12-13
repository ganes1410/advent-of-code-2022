import { Choices, defaultPoints, gamesList, Result } from "./utils.ts";

let total = 0;

// Get Score based on my move
function getMyScore(myChoice: Choices) {
  if (myChoice === "Y") {
    return Result.DRAW;
  } else if (myChoice === "X") {
    return Result.LOSS;
  } else {
    return Result.WIN;
  }
}

// Get score based on opponents choice and my choice(player)
function getMyMove(opponentChoice: Choices, myChoice: Choices) {
  const myMoveMappings: Record<string, Record<string, string>> = {
    A: {
      X: "Z",
      Y: "X",
      Z: "Y",
    },
    B: { X: "X", Y: "Y", Z: "Z" },
    C: { X: "Y", Y: "Z", Z: "X" },
  };

  return defaultPoints[myMoveMappings[opponentChoice][myChoice]];
}

for (let index = 0; index < gamesList.length; index++) {
  const element = gamesList[index]?.split(" ") as Choices[];

  total += getMyScore(element[1]) + getMyMove(element[0], element[1]);
}

console.log({ total }); //11373
