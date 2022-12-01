export const getMostCalories = (input: string): number => {
  let max = 0;
  let currElf = 0;
  let currNumber = "";
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === "\n") {
      currElf += Number(currNumber);
      currNumber = "";
      if (input[i + 1] === "\n") {
        max = Math.max(currElf, max);
        currElf = 0;
        i++;
      }
    }
    if (char.match(/\d/)) {
      currNumber += char;
    }
  }
  return max;
};

// export const getMostCalories = (input: string): number => {
//   return input.split("\n").reduce(
//     (acc, l) => {
//       if (l.length > 0) {
//         acc.curr += Number(l);
//       } else {
//         acc.max = Math.max(acc.curr, acc.max);
//         acc.curr = 0;
//       }
//       return acc;
//     },
//     { curr: 0, max: 0 }
//   ).max;
// };
