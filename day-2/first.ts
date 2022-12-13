import {
  Choices,
  ChoiceValues,
  defaultPoints,
  gamesList,
  Result,
} from "./utils.ts";

let total = 0;

const moveMappings: Record<Choices, ChoiceValues> = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};

function calculateScore(opponentChoice: Choices, myChoice: Choices) {
  const opponentValue = moveMappings[opponentChoice];
  const myValue = moveMappings[myChoice];

  if (opponentValue === myValue) return Result.DRAW; //Tie

  switch (opponentValue) {
    case "Rock": {
      if (myValue === "Scissors") {
        return Result.LOSS;
      } else if (myValue === "Paper") {
        return Result.WIN;
      }
      break;
    }
    case "Paper": {
      if (myValue === "Rock") {
        return Result.LOSS;
      } else if (myValue === "Scissors") {
        return Result.WIN;
      }
      break;
    }
    case "Scissors": {
      if (myValue === "Paper") {
        return Result.LOSS;
      } else if (myValue === "Rock") {
        return Result.WIN;
      }
      break;
    }
  }
}

for (let index = 0; index < gamesList.length; index++) {
  const element = gamesList[index]?.split(" ") as Choices[];
  const score = calculateScore(element[0], element[1]) ?? 0;

  total += score + defaultPoints[element[1]];
}

console.log({ total }); //13005
