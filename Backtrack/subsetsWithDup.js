/**90
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [];
  nums = nums.sort((a, b) => a - b); //to make duplicate adjacent
  let backtrack = (path, start) => {
    res.push([...path]);

    for (let i = start; i < nums.length; i++) {

      //skip backtrack if adjacent elements are duplicates
      if (i > start && nums[i - 1] == nums[i]) {
        continue;
      } else {
        path.push(nums[i]);
        backtrack(path, i + 1);
        path.pop();
      }
    }
  };
  backtrack([], 0);
  return res;
};
