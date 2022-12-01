import { getMostCalories } from ".";

describe("First challenge", () => {
  it("should retrieve the 24000 calories", () => {
    expect(
      getMostCalories(
        `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`
      )
    ).toBe(24000);
  });

  it("should retrieve the 161 calories", () => {
    expect(
      getMostCalories(
        `23
4

17
40

50
6

70
82
9

12
20`
      )
    ).toBe(161);
  });
});
