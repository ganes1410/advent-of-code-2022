const file = await Deno.readTextFile("./input.txt");
const dataStream = file.split("");

let markerProcessedMessages = 0;

for (let index = 3; index < dataStream.length; index++) {
  const startIndex = index - 3;
  const endIndex = index + 1;

  const last4Messages = dataStream.slice(startIndex, endIndex);
  const messagesSet = new Set(last4Messages);

  // Break out after marker is found
  if (last4Messages.length === messagesSet.size) {
    markerProcessedMessages = index + 1;
    break;
  }
}

console.log({ markerProcessedMessages }); //1804
