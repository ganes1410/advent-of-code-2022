import { orderedStacks, instructionSteps } from "./utils.ts";

function moveStacks(instructionItem: number[]) {
  const [count, from, to] = instructionItem;

  const fromItem = orderedStacks[from - 1];
  const toItem = orderedStacks[to - 1];

  const splicedItems = fromItem.splice(0, count);
  toItem.unshift(...splicedItems);
}

for (const instruction of instructionSteps) {
  const instructionItem = instruction?.map(Number);

  moveStacks(instructionItem);
}

let topRow = "";
for (const stack of orderedStacks) {
  topRow += stack.at(0) ?? "";
}

console.log({ topRow }); //RNRGDNFQG
