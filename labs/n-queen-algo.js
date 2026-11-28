function dfsNQueens(n) {
  if (!Number.isInteger(n) || n < 1) {
    return [];
  }

  const solutions = [];
  const cols = new Set();
  const mainDiagonals = new Set(); // row - col
  const antiDiagonals = new Set(); // row + col
  const currentBoard = [];

  function backtrack(row) {
    if (row === n) {
      solutions.push([...currentBoard]);
      return;
    }

    for (let col = 0; col < n; col++) {
      const mainDiag = row - col;
      const antiDiag = row + col;

      if (
        cols.has(col) ||
        mainDiagonals.has(mainDiag) ||
        antiDiagonals.has(antiDiag)
      ) {
        continue;
      }

      cols.add(col);
      mainDiagonals.add(mainDiag);
      antiDiagonals.add(antiDiag);
      currentBoard.push(col);

      backtrack(row + 1);

      currentBoard.pop();
      antiDiagonals.delete(antiDiag);
      mainDiagonals.delete(mainDiag);
      cols.delete(col);
    }
  }

  backtrack(0);
  return solutions;
}
