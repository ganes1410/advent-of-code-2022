type Choices = "A" | "B" | "C" | "X" | "Y" | "Z";
type ChoiceValues = "Rock" | "Paper" | "Scissors";
enum Result {
  WIN = 6,
  LOSS = 0,
  DRAW = 3,
}

const defaultPoints: Record<string, number> = {
  X: 1,
  Y: 2,
  Z: 3,
};

const file = await Deno.readTextFile("./input.txt");
const gamesList = file.split("\n");

export type { ChoiceValues, Choices };
export { gamesList, Result, defaultPoints };
