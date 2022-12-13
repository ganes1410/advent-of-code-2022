// const instructions = Deno.readTextFileSync("./testInput.txt").split("\n");
const instructions = Deno.readTextFileSync("./input.txt").split("\n");

let index = 0;
let addxCyclestoRun = 2;
const pixels: string[] = [];
let spriteStartPosition = 0;

function addPixel() {
  const currentPixel = pixels.length % 40;

  const spritePixels = [
    spriteStartPosition,
    spriteStartPosition + 1,
    spriteStartPosition + 2,
  ];

  if (spritePixels.includes(currentPixel)) {
    pixels.push("#");
  } else {
    pixels.push(".");
  }
}
while (instructions.length) {
  if (index === instructions.length) break;

  const instruction = instructions[index];
  if (instruction === "noop") {
    index += 1;
    addPixel();
  } else {
    const [_, value] = instruction.split(" ");
    const updatedValue = Number(value);

    if (addxCyclestoRun === 2) {
      addxCyclestoRun -= 1;
      addPixel();
      continue;
    } else {
      addPixel();
      index += 1;
      spriteStartPosition += updatedValue;
      // reset addX cycle
      addxCyclestoRun = 2;
    }
  }
}

const renderedImage = [
  pixels.slice(0, 40).join(""),
  pixels.slice(40, 80).join(""),
  pixels.slice(80, 120).join(""),
  pixels.slice(120, 160).join(""),
  pixels.slice(160, 200).join(""),
  pixels.slice(200).join(""),
];

console.log({ renderedImage }); // BACEKLHF
