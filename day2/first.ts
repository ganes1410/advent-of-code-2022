import { Choices, ChoiceValues, gamesList, mappings } from "./utils.ts";

const myDefaultScores: Record<Choices, number> = {
  X: 1,
  Y: 2,
  Z: 3,
  A: 1,
  B: 2,
  C: 3,
};

function calculateScore(opponentValue: ChoiceValues, myValue: ChoiceValues) {
  if (opponentValue === myValue) return 3; //Tie

  switch (opponentValue) {
    case "Rock": {
      if (myValue === "Scissors") {
        return 0;
      } else if (myValue === "Paper") {
        return 6;
      }
      break;
    }
    case "Paper": {
      if (myValue === "Rock") {
        return 0;
      } else if (myValue === "Scissors") {
        return 6;
      }
      break;
    }
    case "Scissors": {
      if (myValue === "Paper") {
        return 0;
      } else if (myValue === "Rock") {
        return 6;
      }
      break;
    }
  }
  return 0;
}

let total = 0;

for (let index = 0; index < gamesList.length; index++) {
  const element = gamesList[index]?.split(" ") as Choices[];
  const opponentChoice = mappings[element[0]];
  const myChoice = mappings[element[1]];

  total +=
    calculateScore(opponentChoice, myChoice) + myDefaultScores[element[1]];
}

console.log({ total }); //13005
