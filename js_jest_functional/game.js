function getNextState(matrix, x, y) {
  return 1;
}

function getAliveNeighboursCount(matrix, x, y) {
  let neighbours = [];

  forEachNeighbour(matrix, x, y, (item) => neighbours.push(item));

  return neighbours.filter((item) => !!item).length;
}

function getDeadNeighboursCount(matrix, x, y) {
  let neighbours = [];

  forEachNeighbour(matrix, x, y, (item) => neighbours.push(item));

  return neighbours.filter((item) => !item).length;
}

function forEachNeighbour(matrix, x, y, callback) {
  let minX = isInBound(x - 1, matrix.length) ? x - 1 : x;
  let maxX = isInBound(x + 1, matrix.length) ? x + 1 : x;
  let minY = isInBound(y - 1, matrix.length) ? y - 1 : y;
  let maxY = isInBound(y + 1, matrix.length) ? y + 1 : y;

  for (let i = minX; i <= maxX; i++) {
    for (let j = minY; j <= maxY; j++) {
      if (!isMe(i, j, x, y)) {
        callback(matrix[i][j]);
      }
    }
  }
}

function isInBound(index, limit) {
  return index >= 0 && index < limit;
}

function isMe(meX, meY, toCheckX, toCheckY) {
  return meX === toCheckX && meY === toCheckY;
}

module.exports = {
  getAliveNeighboursCount,
  getDeadNeighboursCount,
  getNextState,
};
