type Choices = "A" | "B" | "C" | "X" | "Y" | "Z";
type ChoiceValues = "Rock" | "Paper" | "Scissors";

const file = await Deno.readTextFile("./input.txt");
const gamesList = file.split("\n");

const mappings: Record<Choices, ChoiceValues> = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};

export type { ChoiceValues, Choices };
export { mappings, gamesList };
