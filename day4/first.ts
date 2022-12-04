// const file = await Deno.readTextFile("./testInput.txt");
const file = await Deno.readTextFile("./input.txt");
const assignmentsList = file.split("\n");

let overlappingPairs = 0;

for (let index = 0; index < assignmentsList.length; index++) {
  const assignments: string[] = assignmentsList[index]?.split(",");

  const [firstAssignment, secondAssignment] = assignments.map((assignment) =>
    assignment.split("-").map(Number)
  );

  const [firstAssignmentStart, firstAssignmentEnd] = firstAssignment;
  const [secondAssignmentStart, secondAssignmentEnd] = secondAssignment;

  // Based on start and end elements, check if the all the items are present inside
  if (
    firstAssignmentStart >= secondAssignmentStart &&
    firstAssignmentEnd <= secondAssignmentEnd
  ) {
    overlappingPairs++;
  } else if (
    secondAssignmentStart >= firstAssignmentStart &&
    secondAssignmentEnd <= firstAssignmentEnd
  ) {
    {
      overlappingPairs++;
    }
  }
}

console.log({ overlappingPairs }); // 459
