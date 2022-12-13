// const file = await Deno.readTextFile("./testInput.txt");
const file = await Deno.readTextFile("./input.txt");
const assignmentsList = file.split("\n");

export { assignmentsList };
