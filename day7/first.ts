const file = await Deno.readTextFile("./input.txt");
// const file = await Deno.readTextFile("./testInput.txt");
const commandsAndOutputs = file.split("\n");

const ROOT_DIR = "/";
const directoryList = [ROOT_DIR];
const directorySizes: Record<string, number> = { [ROOT_DIR]: 0 };

for (let index = 1; index < commandsAndOutputs.length; index++) {
  const currentCommand = commandsAndOutputs[index];

  if (currentCommand?.startsWith("$")) {
    const command = currentCommand.replace("$", "").trim();

    if (command === "ls") continue;

    if (command.startsWith("cd")) {
      const [_, dirName] = command.split(" ");

      if (dirName === "..") {
        directoryList.pop();
      } else {
        directoryList.push(dirName);
      }
    }
  } else {
    if (currentCommand.startsWith("dir")) {
      const [, dirName] = currentCommand.split(" ");
      const fullPath = [...directoryList, dirName].join("");

      directorySizes[fullPath] = 0;
    } else {
      const [fileSize, _] = currentCommand.split(" ");

      // Add fileSize all directories in array
      // compute full path because of same name issue
      directoryList.forEach((_, idx) => {
        const fullPath = directoryList.slice(0, idx + 1).join("");
        directorySizes[fullPath] += Number(fileSize);
      });
    }
  }
}

const total = Object.values(directorySizes).reduce((acc, curr) => {
  return curr <= 100000 ? acc + curr : acc;
}, 0);

console.log({ total }); //1350966
