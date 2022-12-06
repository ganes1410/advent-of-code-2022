const file = await Deno.readTextFile("./input.txt");
const dataStream = file.split("");

let markerProcessedMessages = 0;

for (let index = 13; index < dataStream.length; index++) {
  const startIndex = index - 13;
  const endIndex = index + 1;

  const last14Messages = dataStream.slice(startIndex, endIndex);
  const messagesSet = new Set(last14Messages);

  // Break out after marker is found
  if (last14Messages.length === messagesSet.size) {
    markerProcessedMessages = endIndex;
    break;
  }
}

console.log({ markerProcessedMessages }); //2508
