/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function (nums) {
  let result = [];
  nums = nums.sort((a, b) => a - b);
  let backtrack = (path, choices) => {
    if (path.length == nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < choices.length; i++) {
      if (i > 0 && choices[i] == choices[i - 1]) {
        continue;
      }

      path.push(choices[i]);
      backtrack(path, [...choices.slice(0, i), ...choices.slice(i + 1)]); //skipping curr element from choices
      path.pop();
    }
  };
  backtrack([], nums);
  return result;
};

var permuteUnique = function (nums) {
  let result = [];
  let used = [];
  nums = nums.sort((a, b) => a - b);

  let backtrack = (path, choices, used) => {
    if (path.length == nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < choices.length; i++) {
      if (used[i]) continue;
      if (i > 0 && choices[i] == choices[i - 1] && !used[i - 1]) {
        continue;
      }

      used[i] = true;
      path.push(choices[i]);

      backtrack(path, choices, used); 

      path.pop();
      used[i] = false;
    }
  };
  backtrack([], nums, used);
  return result;
};

let arr = [1, 1, 2];
console.log(permuteUnique(arr));
