/** 40
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = [];
  candidates = candidates.sort((a, b) => a - b);
  for (let i = 0; i < candidates.length; i++) {
    let fixed = candidates[i];
    let temp = [fixed];
    for (let j = i + 1; j < candidates.length; j++) {
      if (fixed + candidates[j] < target) {
        fixed += candidates[j];
        temp.push(candidates[j]);
      } else if (fixed == target) {
        result.push(temp);
      }
    }
  }
  return result;
};

(candidates = [10, 1, 2, 7, 6, 1, 5]), (target = 8);
console.log(combinationSum2(candidates, target));
