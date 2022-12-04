import { readFileSync } from "fs";
import { join } from "path";
import { getContainingSectionsCount } from ".";

console.log(
  getContainingSectionsCount(
    readFileSync(join(__dirname, "./input.txt"), "utf-8").toString()
  )
);
