const file = await Deno.readTextFile("./input.txt");
const rucksackItems = file.split("\n");

const lowerCaseLetters = Array.from(Array(26)).map((_, i) =>
  String.fromCharCode(i + 97)
);
const upperCaseLetters = Array.from(Array(26)).map((_, i) =>
  String.fromCharCode(i + 65)
);
const priorties = [...lowerCaseLetters, ...upperCaseLetters];

// common items in both compartments
const commonItems = [];
for (let index = 0; index < rucksackItems.length; index++) {
  const element = rucksackItems[index].split("");
  const middleElement = element.length / 2;

  const [firstCompartment, secondCompartment] = [
    element.slice(0, middleElement),
    element.slice(middleElement),
  ];

  const secondCompartmentSet = new Set(secondCompartment);
  const commonItem = [...new Set(firstCompartment)].find((item) =>
    secondCompartmentSet.has(item)
  );

  if (!commonItem) continue;

  commonItems.push(priorties.indexOf(commonItem) + 1);
}

const total = commonItems.reduce((acc, curr) => acc + curr, 0);

console.log({ total }); // 7845
