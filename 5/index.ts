const getCharPoints = (char: string) => {
  const charCode = char.charCodeAt(0);
  if (charCode >= 97) {
    return charCode - 96;
  } else {
    return charCode - 38;
  }
};

export const getPrioritiesPoints = (input: string): number => {
  let points = 0;
  let currentLine = "";
  i: for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === "\n" || i + 1 === input.length) {
      let repeated = "";
      let isInFirstHalf: Record<string, boolean> = {};
      j: for (let j = 0; j < currentLine.length; j++) {
        if (j < currentLine.length / 2) {
          isInFirstHalf[currentLine[j]] = true;
        } else if (isInFirstHalf[currentLine[j]]) {
          repeated = currentLine[j];
          break j;
        }
      }
      currentLine = "";
      points += getCharPoints(repeated);
      continue i;
    }
    currentLine += char;
  }

  return points;
};
