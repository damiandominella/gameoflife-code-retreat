import Cell from "./cell";
import Universe from "./index";

describe("Universe", () => {
  test("should return empty universe", () => {
    const universe = new Universe([]);

    expect(universe.step().getState()).toStrictEqual([]);
  });

  test("single cell should die", () => {
    const universe = new Universe([new Cell(0, 0)]);

    expect(universe.step().getState()).toStrictEqual([]);
  });

  test("single cell should die with one neighbour", () => {
    const universe = new Universe([new Cell(0, 0), new Cell(0, 1)]);

    expect(universe.step().getState()).toStrictEqual([]);
  });

  test("single cell should live with two neighbours", () => {
    const universe = new Universe([
      new Cell(0, 0),
      new Cell(0, 1),
      new Cell(1, 0),
    ]);

    expect(universe.step().getState()).toContainEqual(new Cell(0, 0));
  });

  test("single cell should live with three neighbours", () => {
    const universe = new Universe([
      new Cell(0, 0),
      new Cell(0, 1),
      new Cell(1, 0),
      new Cell(1, 1),
    ]);

    expect(universe.step().getState()).toContainEqual(new Cell(0, 0));
  });

  test("single cell should die with more than three neighbours", () => {
    const universe = new Universe([
      new Cell(0, 0),
      new Cell(0, 1),
      new Cell(1, 0),
      new Cell(1, 1),
      new Cell(-1, 0),
    ]);

    expect(universe.step().getState()).not.toContainEqual(new Cell(0, 0));
  });

  test("dead cell should reborn with exactly three neighbours", () => {
    const universe = new Universe([
      new Cell(0, 1),
      new Cell(1, 0),
      new Cell(1, 1),
    ]);

    expect(universe.step().getState()).toContainEqual(new Cell(0, 0));
  });
});
