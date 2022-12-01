import { getTop3CaloriesAddedUp } from ".";

describe("Second challenge", () => {
  it("should retrieve the 45000  calories", () => {
    expect(
      getTop3CaloriesAddedUp(
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
    ).toBe(45000);
  });

  it("should retrieve the 274 calories", () => {
    expect(
      getTop3CaloriesAddedUp(
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
    ).toBe(274);
  });
});
