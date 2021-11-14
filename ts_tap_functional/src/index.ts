export enum State {
  DEAD,
  ALIVE,
}

type Coordinates = {
  x: number;
  y: number;
};

export type Map = {
  [key: string]: State;
};

export const generateMap = (data: Coordinates[]): Map => {
  let map: Map = {};

  data.forEach((elem) => {
    map[getCoordinatesAsString(elem)] = State.ALIVE;
  });
  return map;
};

const getCoordinatesAsString = (coordinates: Coordinates): string => {
  return `${coordinates.x},${coordinates.y}`;
};

const nextState = (state: State, aliveNeighbours: number): State => {
  if (state === State.ALIVE) {
    if (aliveNeighbours < 2 || aliveNeighbours > 3) {
      return State.DEAD;
    }
  }

  if (state === State.DEAD) {
    if (aliveNeighbours === 3) return State.ALIVE;
  }

  return state;
};

const getNeighbours = (coordinates: Coordinates): Coordinates[] => {
  return [
    { x: coordinates.x - 1, y: coordinates.y - 1 },
    { x: coordinates.x - 1, y: coordinates.y },
    { x: coordinates.x - 1, y: coordinates.y + 1 },

    { x: coordinates.x + 1, y: coordinates.y - 1 },
    { x: coordinates.x + 1, y: coordinates.y },
    { x: coordinates.x + 1, y: coordinates.y + 1 },

    { x: coordinates.x, y: coordinates.y - 1 },
    { x: coordinates.x, y: coordinates.y + 1 },
  ];
};

const getAliveNeighboursCount = (
  coordinates: Coordinates,
  map: Map
): number => {
  const neighbours = getNeighbours(coordinates);

  Object.keys(map).forEach((key) => {});
};

const step = (data: Map) => {
  let result: Map = {};

  Object.keys(data).forEach((key) => {
    let newState = nextState(data[key], 0);

    if (newState === State.ALIVE) {
      result[key] = newState;
    }
  });

  return result;
};

export { step, nextState, getCoordinatesAsString };
