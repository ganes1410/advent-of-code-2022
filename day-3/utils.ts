const file = await Deno.readTextFile("./input.txt");
const rucksackItems = file.split("\n");

const lowerCaseLetters = Array.from(Array(26)).map((_, i) =>
  String.fromCharCode(i + 97)
);
const upperCaseLetters = Array.from(Array(26)).map((_, i) =>
  String.fromCharCode(i + 65)
);
const priorties = [...lowerCaseLetters, ...upperCaseLetters];

function intersection(arr: Array<string[]>) {
  const intersectionItems = arr.reduce((prev, curr) => {
    const result: string[] = [];

    for (const item of prev) {
      if (curr.includes(item)) {
        result.push(item);
      }
    }
    return result;
  });

  return [...new Set(intersectionItems)];
}

export { priorties, rucksackItems, intersection };
