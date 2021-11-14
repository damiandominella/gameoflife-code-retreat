import Cell from "./cell";

class Universe {
  private aliveCells: Cell[];

  constructor(data: Cell[]) {
    this.aliveCells = data;
  }

  public step(): Universe {
    let newCells: Cell[] = [];
    let survivalCells = this.aliveCells.filter((cell) =>
      this.willBeAlive(cell)
    );

    return new Universe([...newCells, ...survivalCells]);
  }

  public getState(): Cell[] {
    return this.aliveCells;
  }

  private willBeAlive(cell: Cell) {
    let neighbours = cell.getNeighbours();

    let aliveNeighbours = neighbours.filter((n) => {
      return n.isAlive(this.aliveCells);
    });

    return aliveNeighbours.length >= 2 && aliveNeighbours.length <= 3;
  }

  private foo() {
    let neighbours = new Set(
      this.aliveCells
        .flatMap((cell) => cell.getNeighbours())
        .filter((n) => {
          return n.isAlive(this.aliveCells);
        })
    );
  }
}

export default Universe;
