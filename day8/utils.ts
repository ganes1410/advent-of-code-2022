const file = await Deno.readTextFile("./testInput.txt");
// const file = await Deno.readTextFile("./input.txt");
const treeMapsList = file.split("\n");
const treeMaps = treeMapsList.map((tree) => Array.from(tree).map(Number));

export { treeMaps };
