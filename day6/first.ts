const file = await Deno.readTextFile("./input.txt");
const dataStream = file.split("");

let markerIndex = 0;

for (let index = 3; index < dataStream.length; index++) {
  const startIndex = index - 3;
  const endIndex = index + 1;

  const last4Messages = dataStream.slice(startIndex, endIndex);
  const messagesSet = new Set(last4Messages);

  // Break out after marker is found
  if (last4Messages.length === messagesSet.size) {
    markerIndex = index + 1;
    break;
  }
}

console.log({ markerIndex }); //1804
