import { readFileSync } from "fs";
import { join } from "path";
import { getPrioritiesPoints } from ".";

console.log(
  getPrioritiesPoints(
    readFileSync(join(__dirname, "./input.txt"), "utf-8").toString()
  )
);
