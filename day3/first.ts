import { rucksackItems, priorties, intersection } from "./utils.ts";

// common items in both compartments
const commonItems: number[] = [];

for (let index = 0; index < rucksackItems.length; index++) {
  const element = rucksackItems[index].split("");
  const middleElement = element.length / 2;

  const compartments = [
    element.slice(0, middleElement),
    element.slice(middleElement),
  ];

  const commonItem = intersection(compartments)[0];
  commonItems.push(priorties.indexOf(commonItem) + 1);
}

const total = commonItems.reduce((acc, curr) => acc + curr, 0);

console.log({ total }); // 7845
