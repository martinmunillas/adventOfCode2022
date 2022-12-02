const translations = {
  X: "A",
  Y: "B",
  Z: "C",
};

const winnings = {
  A: "C",
  B: "A",
  C: "B",
};

const points = {
  A: 1,
  B: 2,
  C: 3,
};

export const getResult = (input: string): number => {
  const lines = input.length / 4;
  let totalResult = 0;
  for (let line = 0; line < lines; line++) {
    const opponent = input[line * 4] as keyof typeof points;
    const ours = translations[
      input[line * 4 + 2] as keyof typeof translations
    ] as keyof typeof points;

    let result = 0;
    if (opponent === ours) {
      result = 3 + points[ours];
    } else if (winnings[opponent] === ours) {
      result = points[ours];
    } else {
      result = 6 + points[ours];
    }
    totalResult += result;
  }
  return totalResult;
};
