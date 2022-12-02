import { getResult } from ".";

describe("Second challenge", () => {
  it("should result 15", () => {
    expect(
      getResult(`A Y
B X
C Z`)
    ).toBe(15);
  });

  it("should result 24", () => {
    expect(
      getResult(`B X
B Z
C Z
A Y`)
    ).toBe(24);
  });

  it("should result 62", () => {
    expect(
      getResult(`B X
B Z
A X
A Y
C X
B Y
C X
A X
C Z
B Z
A Z
A Y`)
    ).toBe(71);
  });
});
