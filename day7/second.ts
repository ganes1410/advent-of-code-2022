import { directorySizes, ROOT_DIR } from "./utils.ts";

const TOTAL_DISK_SPACE = 70000000;
const TOTAL_SPACE_NEED_FOR_UPDATE = 30000000;

const SPACE_REQUIRED =
  TOTAL_SPACE_NEED_FOR_UPDATE - (TOTAL_DISK_SPACE - directorySizes[ROOT_DIR]);

let mininumRequired = Number.POSITIVE_INFINITY;

for (const dirSize of Object.values(directorySizes)) {
  if (dirSize >= SPACE_REQUIRED) {
    if (dirSize <= mininumRequired) mininumRequired = dirSize;
  }
}

console.log({ mininumRequired }); //6296435
