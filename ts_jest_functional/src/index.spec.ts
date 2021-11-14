import { step } from "./index";

describe("Universe", () => {
  test("should return empty universe", () => {
    expect(step([])).toStrictEqual([]);
  });

  test("single cell should die", () => {
    expect(step([{ x: 0, y: 0 }])).toStrictEqual([]);
  });

  test("single cell with one neighbour should die", () => {
    expect(
      step([
        { x: 0, y: 0 },
        { x: 1, y: 0 },
      ])
    ).not.toContainEqual({ x: 0, y: 0 });
  });

  test("single cell with more than three neighbours should die", () => {
    expect(
      step([
        { x: -1, y: -1 },
        { x: -1, y: 0 },
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
      ])
    ).not.toContainEqual({ x: 0, y: 0 });
  });

  test("single cell with two neighbours should live", () => {
    expect(
      step([
        { x: -1, y: 0 },
        { x: 0, y: 0 },
        { x: 1, y: 0 },
      ])
    ).toContainEqual({ x: 0, y: 0 });
  });

  test("single cell with three neighbours should live", () => {
    expect(
      step([
        { x: -1, y: 0 },
        { x: -1, y: -1 },
        { x: 0, y: 0 },
        { x: 1, y: 0 },
      ])
    ).toContainEqual({ x: 0, y: 0 });
  });

  test("died cell with three neighbours should reborn", () => {
    expect(
      step([
        { x: -1, y: 0 },
        { x: -1, y: -1 },
        { x: 1, y: 0 },
      ])
    ).toContainEqual({ x: 0, y: 0 });
  });

  test("column to row", () => {
    expect(
      step([
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 1, y: 2 },
      ])
    ).toContainEqual([
      { x: 1, y: 1 },
      { x: 0, y: 1 },
      { x: 2, y: 1 },
    ]);
  });
});
