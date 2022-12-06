import { getMarker } from ".";

describe("Second challenge", () => {
  it("should sum all the prioritize and return 19", () => {
    expect(getMarker("mjqjpqmgbljsphdztnvjfqwrcgsmlb")).toBe(19);
  });

  it("should sum all the prioritize and return 23", () => {
    expect(getMarker("bvwbjplbgvbhsrlpgdmjqwftvncz")).toBe(23);
  });
  it("should sum all the prioritize and return 23", () => {
    expect(getMarker("nppdvjthqldpwncqszvftbrmjlhg")).toBe(23);
  });
  it("should sum all the prioritize and return 29", () => {
    expect(getMarker("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")).toBe(29);
  });
  it("should sum all the prioritize and return 26", () => {
    expect(getMarker("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")).toBe(26);
  });
});
