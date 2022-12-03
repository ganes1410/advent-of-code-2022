import { intersection, priorties, rucksackItems } from "./utils.ts";

const groupedElfItems: string[][] = [];

while (rucksackItems.length) {
  groupedElfItems.push(rucksackItems.splice(0, 3));
}

const commonItems: number[] = [];

for (let index = 0; index < groupedElfItems.length; index++) {
  const element = groupedElfItems[index];
  const groups = element.map((el) => Array.from(el));

  const commonItem = intersection(groups)[0];

  commonItems.push(priorties.indexOf(commonItem) + 1);
}

const total = commonItems.reduce((acc, curr) => acc + curr, 0);

console.log({ total }); //2790
