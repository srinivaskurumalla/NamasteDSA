/**15
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let i = 0;
  let j = 1;
  let result = [];
  while (j <= nums.length - 1) {
    for (let k = j + 1; k < nums.length; k++) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        result.push([nums[i], nums[j], nums[k]]);
      }
    }
    i++;
    j++;
  }
  return result;
};

nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));
