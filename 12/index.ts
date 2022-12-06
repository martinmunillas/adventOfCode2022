export const getMarker = (input: string): number => {
  i: for (let i = 0; i < input.length; i++) {
    for (let j = i; j < i + 14; j++) {
      for (let k = i; k < i + 14; k++) {
        if (input[j] === input[k] && j !== k) {
          continue i;
        }
      }
    }
    return i + 14;
  }
  return 0;
};
