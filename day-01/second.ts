const file = await Deno.readTextFile("./input.txt");
const elfCaloriesList = file.split("\n\n");

const totalCountArr: number[] = [];

for (let index = 0; index < elfCaloriesList.length; index++) {
  const element = elfCaloriesList[index].split("\n");
  const total = element.reduce((acc, curr) => Number(acc) + Number(curr), 0);
  totalCountArr.push(total);
}

// Get top 3 max values
const sortedTotals = totalCountArr.sort((a, b) => b - a);
const top3Total = sortedTotals[0] + sortedTotals[1] + sortedTotals[2];
console.log({ top3Total });
