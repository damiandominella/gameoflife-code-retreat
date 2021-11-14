class Cell {
  private row: number;
  private col: number;

  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
  }

  public getNeighbours(): Cell[] {
    let limit = [-1, 0, 1]
      .flatMap((x) => [
        [x, -1],
        [x, 0],
        [x, 1],
      ])
      .filter(([x, y]) => x != 0 || y != 0);

    return limit.map(([x, y]) => new Cell(x, y));
  }

  public isAlive(aliveCells: Cell[]): boolean {
    return aliveCells.some((elem) => {
      return JSON.stringify(this) === JSON.stringify(elem);
    });
  }
}

export default Cell;
