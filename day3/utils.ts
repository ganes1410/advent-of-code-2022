const file = await Deno.readTextFile("./input.txt");
const rucksackItems = file.split("\n");

const lowerCaseLetters = Array.from(Array(26)).map((_, i) =>
  String.fromCharCode(i + 97)
);
const upperCaseLetters = Array.from(Array(26)).map((_, i) =>
  String.fromCharCode(i + 65)
);
const priorties = [...lowerCaseLetters, ...upperCaseLetters];

export { priorties, rucksackItems };
