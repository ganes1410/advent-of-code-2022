const file = await Deno.readTextFile("./input.txt");
const elfCaloriesList = file.split("\n\n");

let max = Number.MIN_VALUE;

for (let index = 0; index < elfCaloriesList.length; index++) {
  const element = elfCaloriesList[index].split("\n");
  const total = element.reduce((acc, curr) => Number(acc) + Number(curr), 0);
  if (total > max) {
    max = total;
  }
}
console.log({ max });
