import { readFileSync } from "fs";
import { join } from "path";
import { getTopOfFinalStacks } from ".";

console.log(
  getTopOfFinalStacks(
    readFileSync(join(__dirname, "./input.txt"), "utf-8").toString()
  )
);
