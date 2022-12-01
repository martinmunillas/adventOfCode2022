export const getTop3CaloriesAddedUp = (input: string): number => {
  let elfs = [];
  let currNumber = "";
  let currElf = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === "\n") {
      currElf += Number(currNumber);
      currNumber = "";
      if (input[i + 1] === "\n") {
        elfs.push(currElf);
        currElf = 0;
        i++;
      }
    }
    if (char.match(/\d/)) {
      currNumber += char;
    }
    if (i === input.length - 1) {
      elfs.push(currElf + Number(currNumber));
    }
  }
  const used = [];
  let sum = 0;

  for (let i = 0; i < 3; i++) {
    let currMaxIdx = 0;
    j: for (let j = 0; j < elfs.length; j++) {
      for (let k = 0; k < used.length; k++) {
        if (used[k] === j) {
          continue j;
        }
      }
      if (elfs[j] > elfs[currMaxIdx]) {
        currMaxIdx = j;
      }
    }
    used.push(currMaxIdx);
    sum += elfs[currMaxIdx];
  }
  return sum;
};
