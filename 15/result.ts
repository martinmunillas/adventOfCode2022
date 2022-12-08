import { readFileSync } from "fs";
import { join } from "path";
import { getVisibleTrees } from ".";

console.log(
  getVisibleTrees(
    readFileSync(join(__dirname, "./input.txt"), "utf-8").toString()
  )
);
