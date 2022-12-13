// const file = await Deno.readTextFile("./testInput.txt");
const file = await Deno.readTextFile("./input.txt");
const [stacks, instructions] = file.split("\n\n").map((d) => d.split("\n"));

//https://stackoverflow.com/a/17428705/265508
function transpose(arr: Array<string[]>) {
  return arr[0].map((_, colIndex: number) => arr.map((row) => row[colIndex]));
}

// Step 1: Get Data and order it
const stackItems = stacks.map((s) => Array.from(s));
const tranposedStacks = transpose(stackItems);
const orderedStacks = tranposedStacks
  .map((el) => el.join("").replaceAll(/\[|\]/g, "").trim())
  .filter(Boolean)
  .map((el) => el.slice(0, -1).split(""));

// Step2: Apply Instructions
const instructionSteps = instructions.map((instr) =>
  instr.match(/\d+/g)
) as string[][];

export { orderedStacks, instructionSteps };
