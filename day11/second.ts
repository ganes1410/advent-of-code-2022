import { monkeys } from "./utils.ts";

let TOTAL_ROUNDS = 20;

while (TOTAL_ROUNDS) {
  for (let index = 0; index < monkeys.length; index++) {
    const monkey = monkeys[index];
    const monkeyItems = monkey.items;
    for (let itemIndex = 0; itemIndex < monkeyItems.length; itemIndex++) {
      const item = monkeyItems[itemIndex];
      monkey.inspect(item, "two");
    }
  }
  TOTAL_ROUNDS -= 1;
}

const top2InspectionCount = monkeys
  .sort(
    (monkeya, monekeyb) => monekeyb.inspectionCount - monkeya.inspectionCount
  )
  .slice(0, 2);

const monkeyBusiness =
  top2InspectionCount[0].inspectionCount *
  top2InspectionCount[1].inspectionCount;

console.log({ monkeyBusiness }); //57348
