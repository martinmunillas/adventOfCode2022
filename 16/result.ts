import { readFileSync } from "fs";
import { join } from "path";
import { getHighestScenicScore } from ".";

console.log(
  getHighestScenicScore(
    readFileSync(join(__dirname, "./input.txt"), "utf-8").toString()
  )
);
