export const getTopOfFinalStacks = (input: string): string => {
  const stacks: Record<number, string[]> = {};
  let stacksComplete = false;
  let stackCount = 0;

  let numbers: number[] = [];
  let currentNumber = "";
  for (let i = 0; i <= input.length; i++) {
    const char = input[i];
    if (stacksComplete) {
      if (char === "\n" || char === undefined) {
        numbers.push(Number(currentNumber));
        currentNumber = "";
        for (let j = 0; j < numbers[0]; j++) {
          const toPush = stacks[numbers[1]].pop();
          if (toPush) {
            stacks[numbers[2]].push(toPush);
          }
        }
        numbers = [];
      } else if (!isNaN(Number(char))) {
        currentNumber += char;
      } else if (currentNumber) {
        numbers.push(Number(currentNumber));
        currentNumber = "";
      }
    } else {
      if (char === "\n") {
        if (!stackCount) {
          stackCount = (i + 1) / 4;
        }
        continue;
      }
      if (i % 4 !== 1) {
        continue;
      }
      if (Number(char)) {
        stacksComplete = true;
        i += (stackCount - 1) * 4 + 3;
        continue;
      }
      const currentStack = Math.ceil(
        (stackCount ? i % (stackCount * 4) : i) / 4
      );
      stacks[currentStack] ??= [];
      if (char.match(/[a-zA-Z]/)) {
        stacks[currentStack].unshift(char);
      }
    }
  }
  let result = "";
  for (let i = 1; i <= stackCount; i++) {
    const top = stacks[i].pop();
    result += top || " ";
  }

  return result;
};
