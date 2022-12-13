import { assignmentsList } from "./utils.ts";

let overlappingPairs = 0;

function range(numbers: number[]) {
  let [start, end] = numbers;
  const rangeElements: number[] = [];

  while (start <= end) {
    rangeElements.push(start);
    start++;
  }
  return rangeElements;
}

for (let index = 0; index < assignmentsList.length; index++) {
  const assignments: string[] = assignmentsList[index]?.split(",");

  const [firstAssignment, secondAssignment] = assignments.map((assignment) =>
    assignment.split("-").map(Number)
  );

  const totalAssignments: number[] = [
    ...range(firstAssignment),
    ...range(secondAssignment),
  ];

  const assignmentSet = new Set(totalAssignments);

  // If size does not match after removing non duplicate items, increment overlapping pair
  if (assignmentSet.size !== totalAssignments.length) {
    overlappingPairs++;
  }
}

console.log({ overlappingPairs }); //779
