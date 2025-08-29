/** 51
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = [];
  //let board = Array.from({ length: n }, () => Array(n).fill("."));
  let board = [];
  for (let i = 0; i < n; i++) {
    board[i] = []; // initialize each row
    for (let j = 0; j < n; j++) {
      board[i][j] = "."; // assign value
    }
  }
  let backtrack = (board, row, colSet, diagSet, antiDiagSet) => {
    if (row == n) {
      let transformedBorad = transform(board);
      res.push(transformedBorad);
    }
    for (let col = 0; col < n; col++) {
      if (
        colSet.has(col) ||
        diagSet.has(row - col) ||
        antiDiagSet.has(row + col)
      ) {
        continue; //Pruning or skipping backtrack
      }

      board[row][col] = "Q";
      colSet.add(col);
      diagSet.add(row - col);
      antiDiagSet.add(row + col);

      backtrack(board, row + 1, colSet, diagSet, antiDiagSet);

      board[row][col] = ".";
      colSet.delete(col);
      diagSet.delete(row - col);
      antiDiagSet.delete(row + col);
    }
  };
  backtrack(board, 0, new Set(), new Set(), new Set());
  return res;
};

let transform = (board) => {
  let newBoard = [];
  for (let i = 0; i < board.length; i++) {
    newBoard.push(board[i].join(""));
  }
  return newBoard;
};

console.log(solveNQueens(4));
