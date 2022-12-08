import { getVisibleTrees } from ".";

describe("Fifteenth challenge", () => {
  it("should get 21 visible trees", () => {
    expect(
      getVisibleTrees(`30373
25512
65332
33549
35390`)
    ).toBe(21);
  });
});
