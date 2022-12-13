const notes = Deno.readTextFileSync("./testInput.txt").split("\n\n");

let TOTAL_ROUNDS = 1;

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

while (TOTAL_ROUNDS) {
  for (let index = 0; index < monkeys.length; index++) {
    const monkey = monkeys[index];
    console.log({ monkey });
  }
  TOTAL_ROUNDS -= 1;
}
