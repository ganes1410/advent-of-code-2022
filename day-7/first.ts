import { directorySizes } from "./utils.ts";

const total = Object.values(directorySizes).reduce((acc, curr) => {
  return curr <= 100000 ? acc + curr : acc;
}, 0);

console.log({ total }); //1350966
