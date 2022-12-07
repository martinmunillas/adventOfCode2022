import { readFileSync } from "fs";
import { join } from "path";
import { getDirsUnder100000 } from ".";

console.log(
  getDirsUnder100000(
    readFileSync(join(__dirname, "./input.txt"), "utf-8").toString()
  )
);
