import tap from "tap";
import {
  nextState,
  State,
  step,
  getCoordinatesAsString,
  Map,
  generateMap,
} from "../src";

tap.test("game of life test", (main) => {
  main.test("should return empty", (t) => {
    t.strictSame(step({}), {});
    t.end();
  });

  main.test("should return dead with less than 2 neighbours", (t) => {
    t.strictSame(nextState(State.ALIVE, 1), State.DEAD);
    t.end();
  });

  main.test("should return dead with more than 3 neighbours", (t) => {
    t.strictSame(nextState(State.ALIVE, 4), State.DEAD);
    t.end();
  });

  main.test("should return alive with 2 or 3 neighbours", (t) => {
    t.strictSame(nextState(State.ALIVE, 2), State.ALIVE);
    t.strictSame(nextState(State.ALIVE, 3), State.ALIVE);
    t.end();
  });

  main.test("should resurrect if has 3 neighbours", (t) => {
    t.strictSame(nextState(State.DEAD, 3), State.ALIVE);
    t.end();
  });

  main.test("should remain dead if does not have 3 neighbours", (t) => {
    t.strictSame(nextState(State.DEAD, 5), State.DEAD);
    t.end();
  });

  main.test("single cell should die", (t) => {
    let map: Map = {};

    map[getCoordinatesAsString({ x: 0, y: 0 })] = State.ALIVE;

    t.strictSame(step(map), {});
    t.end();
  });

  main.test("has two neighbours", (t) => {
    let map = generateMap([
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
    ]);
    let expectedMap = generateMap([
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
    ]);

    t.strictSame(step(map), expectedMap);
  });

  main.end();
});
