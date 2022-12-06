import { readFileSync } from "fs";
import { join } from "path";
import { getMarker } from ".";

console.log(
  getMarker(readFileSync(join(__dirname, "./input.txt"), "utf-8").toString())
);
