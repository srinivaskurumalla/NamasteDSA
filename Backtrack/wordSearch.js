/** 79
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let res = false;
  let m = board.length;
  let n = board[0].length;
  let backtrack = (x, y, nextIndex) => {
    if (nextIndex == word.length) res = true;
    let original = board[x][y];
    board[x][y] = "#";
    //check top
    if (y < n - 1 && board[x][y + 1] == word[nextIndex]) {
      backtrack(x, y + 1, nextIndex + 1);
    }
    //check bottom
    if (y > 0 && board[x][y - 1] == word[nextIndex]) {
      backtrack(x, y - 1, nextIndex + 1);
    }
    //check left
    if (x > 0 && board[x - 1][y] == word[nextIndex]) {
      backtrack(x - 1, y, nextIndex + 1);
    }
    //check right
    if (x < m - 1 && board[x + 1][y] == word[nextIndex]) {
      backtrack(x + 1, y, nextIndex + 1);
    }

    board[x][y] = original;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0]) {
        backtrack(i, j, 1);
      }
    }
  }

  return res;
};
