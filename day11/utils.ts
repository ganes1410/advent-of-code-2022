// const notes = Deno.readTextFileSync("./testInput.txt").split("\n\n");
const notes = Deno.readTextFileSync("./input.txt").split("\n\n");

type IMonkey = {
  name: string;
  items: number[];
  operations: string;
  inspectionCount: number;
  divisbleBy: number;
  positiveCaseMonkeyName: string;
  negativeCaseMonkeyname: string;
};

class Monkey {
  name: IMonkey["name"];
  items: IMonkey["items"];
  operations: IMonkey["name"];
  inspectionCount: IMonkey["inspectionCount"];
  divisbleBy: IMonkey["divisbleBy"];
  positiveCaseMonkeyName: IMonkey["positiveCaseMonkeyName"];
  negativeCaseMonkeyname: IMonkey["negativeCaseMonkeyname"];

  constructor(params: Omit<IMonkey, "inspectionCount">) {
    this.name = params.name;
    this.items = params.items;
    this.divisbleBy = params.divisbleBy;
    this.positiveCaseMonkeyName = params.positiveCaseMonkeyName;
    this.negativeCaseMonkeyname = params.negativeCaseMonkeyname;
    this.operations = params.operations;
    this.inspectionCount = 0;
  }

  inspect(item: number, solutionType: "one" | "two", modulo?: number) {
    const operation = this.operations.split(" ").slice(1);
    let totalWorryLevel = 0;

    // Remove item from current monkey
    this.items = this.items.filter((item) => item !== item);

    if (operation[1] === "old") {
      totalWorryLevel =
        solutionType === "one" ? Math.floor((item * item) / 3) : item * item;
    } else {
      switch (operation[0]) {
        case "+":
          totalWorryLevel =
            solutionType === "one"
              ? Math.floor((item + Number(operation[1])) / 3)
              : item + Number(operation[1]);
          break;
        case "*":
          totalWorryLevel =
            solutionType === "one"
              ? Math.floor((item * Number(operation[1])) / 3)
              : item * Number(operation[1]);
          break;
      }
    }

    if (solutionType === "two" && modulo) {
      totalWorryLevel %= modulo;
    }

    this.divide(totalWorryLevel);

    this.inspectionCount += 1;
  }

  divide(totalWorryLevel: number) {
    const isDivisble = totalWorryLevel % this.divisbleBy === 0;
    const monkeyToThrow = monkeys.find((monkey) => {
      if (isDivisble) {
        return monkey.name === this.positiveCaseMonkeyName;
      } else {
        return monkey.name === this.negativeCaseMonkeyname;
      }
    });

    if (monkeyToThrow) {
      monkeyToThrow.items.push(totalWorryLevel);
    }
  }
}

const monkeys: Array<Monkey> = [];

for (let index = 0; index < notes.length; index++) {
  const note = notes[index].split("\n");
  const name = note[0].split(" ")[1].replace(":", "");
  const items = Array.from(note[1].split(":")[1].split(","), (val) =>
    Number(val.trim())
  );
  const operations = note[2].split("=").at(-1)?.trim() ?? "";
  const divisbleBy = Number(note[3].split(" ").at(-1));
  const [positiveCaseMonkeyName, negativeCaseMonkeyname] = [
    note[4].split(" ").at(-1) ?? "",
    note[5].split(" ").at(-1) ?? "",
  ];

  monkeys.push(
    new Monkey({
      name,
      items,
      operations,
      divisbleBy,
      positiveCaseMonkeyName,
      negativeCaseMonkeyname,
    })
  );
}

export { monkeys };
