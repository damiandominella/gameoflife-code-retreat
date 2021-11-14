const { getAliveNeighboursCount, getDeadNeighboursCount, getNextState } = require("./game");

test("Should return no alive neighbours", () => {
  const matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  expect(getAliveNeighboursCount(matrix, 1, 1)).toBe(0);
});

test("Should return 1 alive neighbours", () => {
  const matrix = [
    [0, 0, 0],
    [1, 0, 0],
    [0, 0, 0],
  ];

  expect(getAliveNeighboursCount(matrix, 1, 1)).toBe(1);
});

test("Should return more than 1 alive neighbours", () => {
  const matrix = [
    [0, 0, 0],
    [1, 0, 1],
    [0, 0, 0],
  ];

  expect(getAliveNeighboursCount(matrix, 1, 1)).toBeGreaterThan(1);
});

test("Should return no dead neighbours", () => {
  const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  expect(getDeadNeighboursCount(matrix, 1, 1)).toBe(0);
});

test("Should return 1 dead neighbours", () => {
  const matrix = [
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  expect(getDeadNeighboursCount(matrix, 1, 1)).toBe(1);
});

test("Should return more than 1 dead neighbours", () => {
  const matrix = [
    [1, 1, 0],
    [0, 0, 1],
    [1, 1, 0],
  ];

  expect(getDeadNeighboursCount(matrix, 1, 1)).toBeGreaterThan(1);
});

test("Should keep living", () => {
  const matrix = [
    [0, 1, 0],
    [0, 1, 1],
    [0, 1, 0],
  ];

  expect(getNextState(matrix, 1, 1)).toBe(1);
});
