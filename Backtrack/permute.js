/** 46
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let n = nums.length;
  let backtrack = (path) => {
    if (path.length == n) {
      res.push([...path]);
    }
    for (let i = 0; i < n; i++) {
      //if path does not have nums[i] then only do this
      if (!path.includes(nums[i])) {
        path.push(nums[i]);
        backtrack(path);
        path.pop();
      }
    }
  };
  backtrack([]);
  return res;
};
