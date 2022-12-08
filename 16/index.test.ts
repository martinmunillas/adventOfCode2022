import { getHighestScenicScore } from ".";

describe("Sixteenth challenge", () => {
  it("should get 8 scenic score", () => {
    expect(
      getHighestScenicScore(`30373
25512
65332
33549
35390`)
    ).toBe(8);
  });
});
