export const getMarker = (input: string): number => {
  i: for (let i = 0; i < input.length; i++) {
    for (let j = i; j < i + 4; j++) {
      for (let k = i; k < i + 4; k++) {
        if (input[j] === input[k] && j !== k) {
          continue i;
        }
      }
    }
    return i + 4;
  }
  return 0;
};
