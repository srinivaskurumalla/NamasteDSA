/** 378
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let n = matrix[0].length;
  //Add first column elements to the MinPQ
  let minPQ = new MinPriorityQueue((m) => m.val);
  for (let row = 0; row < Math.min(k, n); row++) {
    minPQ.enqueue({ val: matrix[row][0], row: row, col: 0 });
  }

  let counter = 0;
  //Extract the min element one by one till k
  while (counter < k) {
    let { val, row, col } = minPQ.dequeue();
    if (row < n && col < n)
      minPQ.enqueue({ val: matrix[row][col + 1], row: row, col: col });
    counter++;
  }
  let { val, row, col } = minPQ.dequeue();
  return val;
};

(matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
]),
  (k = 8);

console.log(kthSmallest(matrix, k));
