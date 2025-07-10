/** 40
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];

  //sort to avoid duplicates easily
  candidates = candidates.sort((a, b) => a - b);

  function backtrack(combination, remainingTarget, startIndex) {
    //base condition
    if (remainingTarget === 0) {
      result.push([...combination]);
      return;
    }

  

    for (let i = startIndex; i < candidates.length; i++) {
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        //skip dupicate
        continue;
      }
  if (remainingTarget < 0) {
      //exceeded the target
      return;
    }
      const currentNum = candidates[i];
      combination.push(currentNum);

      backtrack(combination, remainingTarget - currentNum, startIndex + 1); //Recurse with updated target and next index
      combination.pop(); // Backtrack: remove current number to explore other possibilities
    }
  }

  backtrack([], target, 0);

  return result;
};

(candidates = [10, 1, 2, 7, 6, 1, 5]), (target = 8);
console.log(combinationSum2(candidates, target));
