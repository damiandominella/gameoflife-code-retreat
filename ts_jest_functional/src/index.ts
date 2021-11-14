type Cell = {
  x: number;
  y: number;
};

const step = (aliveCells: Cell[]) => {
  const temp = [...aliveCells];

  const survivalCells = aliveCells.filter((cell) => shouldLive(cell, temp));

  const allNeighbours = aliveCells
    .flatMap((cell) => getNeighbours(cell))
    .filter((v, i, a) => a.findIndex((t) => t.x === v.x && t.y === v.y) === i);

  for (let dead of allNeighbours) {
    if (JSON.stringify(aliveCells).includes(JSON.stringify(dead))) {
      continue;
    }

    let neighbours = getAliveNeighboursCount(dead, aliveCells);

    if (neighbours === 3) {
      survivalCells.push(dead);
    }
  }

  return [...survivalCells];
};

const shouldLive = (cell: Cell, aliveCells: Cell[]): boolean => {
  const aliveNeighboursCount = getAliveNeighboursCount(cell, aliveCells);

  if (aliveNeighboursCount === 2 || aliveNeighboursCount === 3) {
    return true;
  }

  if (aliveNeighboursCount < 2) {
    return false;
  }

  if (aliveNeighboursCount > 3) {
    return false;
  }

  return true;
};

const getNeighbours = (cell: Cell): Cell[] => {
  return [
    { x: cell.x - 1, y: cell.y - 1 },
    { x: cell.x - 1, y: cell.y },
    { x: cell.x - 1, y: cell.y + 1 },

    { x: cell.x + 1, y: cell.y - 1 },
    { x: cell.x + 1, y: cell.y },
    { x: cell.x + 1, y: cell.y + 1 },

    { x: cell.x, y: cell.y - 1 },
    { x: cell.x, y: cell.y + 1 },
  ];
};

const getAliveNeighboursCount = (cell: Cell, aliveCells: Cell[]): number => {
  return getNeighbours(cell).filter((t) =>
    JSON.stringify(aliveCells).includes(JSON.stringify(t))
  ).length;
};

export { step };
