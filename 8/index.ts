const partialContainsRange = (main: TwoNumbers, child: TwoNumbers) => {
  return (
    (child[0] <= main[1] && child[0] >= main[0]) ||
    (child[1] >= main[0] && child[1] <= main[1])
  );
};

type TwoNumbers = [number, number];

export const getContainingSectionsCount = (input: string): number => {
  let currentRanges: number[] = [];
  let result = 0;
  let currentNumber = "";
  for (let i = 0; i <= input.length; i++) {
    const char = input[i];

    if (char === "\n" || i === input.length) {
      currentRanges.push(Number(currentNumber));
      currentNumber = "";
      if (
        partialContainsRange(
          [currentRanges[0], currentRanges[1]],
          [currentRanges[2], currentRanges[3]]
        ) ||
        partialContainsRange(
          [currentRanges[2], currentRanges[3]],
          [currentRanges[0], currentRanges[1]]
        )
      ) {
        result++;
      }
      currentRanges = [];
    } else if (char === "-" || char === ",") {
      currentRanges.push(Number(currentNumber));
      currentNumber = "";
    } else {
      currentNumber += char;
    }
  }

  return result;
};
