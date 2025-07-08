/** 994
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let rows = grid.length;
  let columns = grid[0].length;
  let minutes = 0;
  //find all the rotten oranges and push into the queue
  let q = [];
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < columns; y++) {
      if (grid[x][y] === 2) {
        q.push([x, y, minutes]);
      }
    }
  }

  //Mark all the adjacent oranges as rotten till the queue is empty
  while (q.length > 0) {
    for (let i = 0; i < grid.length; i++) {
      console.log(grid[i]);
    }
    console.log("=======");
    let [x, y, m] = q.shift();
    m = m + 1;
    let top = x == 0 ? null : [x - 1, y, m];
    let bottom = x == rows - 1 ? null : [x + 1, y, m];
    let left = y == 0 ? null : [x, y - 1, m];
    let right = y == columns - 1 ? null : [x, y + 1, m];

    if (top && grid[top[0]][top[1]] == 1) {
      grid[top[0]][top[1]] = 2;
      q.push(top);
    }
    if (bottom && grid[bottom[0]][bottom[1]] == 1) {
      grid[bottom[0]][bottom[1]] = 2;
      q.push(bottom);
    }
    if (left && grid[left[0]][left[1]] == 1) {
      grid[left[0]][left[1]] = 2;
      q.push(left);
    }
    if (right && grid[right[0]][right[1]] == 1) {
      grid[right[0]][right[1]] = 2;
      q.push(right);
    }
    minutes = m;
  }

  //check for any remaining fresh oranges

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < columns; y++) {
      if (grid[x][y] === 1) {
        return -1;
      }
    }
  }
  return minutes - 1;
};

grid = [
  [2, 1, 1,1],
  [0, 2, 1,0],
  [1, 0, 2,2],
];
console.log(orangesRotting(grid));
