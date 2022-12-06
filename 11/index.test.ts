import { getMarker } from ".";

describe("Second challenge", () => {
  it("should sum all the prioritize and return 7", () => {
    expect(getMarker("mjqjpqmgbljsphdztnvjfqwrcgsmlb")).toBe(7);
  });

  it("should sum all the prioritize and return 5", () => {
    expect(getMarker("bvwbjplbgvbhsrlpgdmjqwftvncz")).toBe(5);
  });
  it("should sum all the prioritize and return 6", () => {
    expect(getMarker("nppdvjthqldpwncqszvftbrmjlhg")).toBe(6);
  });
  it("should sum all the prioritize and return 10", () => {
    expect(getMarker("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")).toBe(10);
  });
  it("should sum all the prioritize and return 11", () => {
    expect(getMarker("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")).toBe(11);
  });
});
