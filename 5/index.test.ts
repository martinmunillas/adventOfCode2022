import { getPrioritiesPoints } from ".";

describe("Second challenge", () => {
  it("should sum all the prioritize and return 157", () => {
    expect(
      getPrioritiesPoints(
        `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`
      )
    ).toBe(157);
  });
});
