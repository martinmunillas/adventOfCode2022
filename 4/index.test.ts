import { getResult } from ".";

describe("Second challenge", () => {
  it("should result 15", () => {
    expect(
      getResult(`A Y
B X
C Z`)
    ).toBe(12);
  });
});
