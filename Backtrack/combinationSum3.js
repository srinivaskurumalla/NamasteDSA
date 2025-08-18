/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let res = [];
  let backtrack = (path, start, remainingSum) => {
    if (remainingSum == 0 && path.length == k) {
      res.push([...path]);
    }
    if (remainingSum <= 0 || path.length === k) {
      return;
    }
    for (let i = start; i < 10; i++) {
      path.push(i);
      backtrack(path, i + 1, remainingSum - i);
      path.pop();
    }
  };
  backtrack([], 1, n);
  return res;
};

(k = 3), (n = 9);
console.log(combinationSum3(k, n));
