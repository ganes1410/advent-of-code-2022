import { orderedStacks, instructionSteps } from "./utils.ts";

function moveStacks(instructionItem: number[]) {
  let [count, from, to] = instructionItem;

  while (count) {
    const fromItem = orderedStacks[from - 1];
    const poppedItem = fromItem.shift();
    const toItem = orderedStacks[to - 1];

    if (poppedItem) {
      toItem.unshift(poppedItem);
    }

    count -= 1;
  }
}

for (const instruction of instructionSteps) {
  const instructionItem = instruction?.map(Number);

  moveStacks(instructionItem);
}

let topRow = "";
for (const stack of orderedStacks) {
  topRow += stack.at(0);
}

console.log({ topRow }); //FWNSHLDNZ
