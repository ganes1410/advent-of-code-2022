// const instructions = Deno.readTextFileSync("./testInput.txt").split("\n");
const instructions = Deno.readTextFileSync("./input.txt").split("\n");

let currentCycle = 1;
let registerValue = 1;

const CYCLES_TO_CAPTURE = [20, 60, 100, 140, 180, 220];
const signalStrengthList: number[] = [];
let index = 0;
let addxCyclestoRun = 2;

const tick = () => (currentCycle += 1);

while (instructions.length) {
  if (index === instructions.length) break;
  const instruction = instructions[index];

  if (CYCLES_TO_CAPTURE.includes(currentCycle)) {
    signalStrengthList.push(currentCycle * registerValue);
  }

  if (instruction === "noop") {
    index += 1;
    tick();
  } else {
    const [_, value] = instruction.split(" ");
    const updatedValue = Number(value);
    tick();
    if (addxCyclestoRun === 2) {
      addxCyclestoRun -= 1;
      continue;
    } else {
      registerValue += updatedValue;
      index += 1;
      addxCyclestoRun = 2;
    }
  }
}

const signalStrength = signalStrengthList.reduce((acc, curr) => acc + curr);

console.log({
  signalStrength,
}); //16060
