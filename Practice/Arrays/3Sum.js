/**15
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  //sort
  nums = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    //1 fixed pointer
    //2 pointer technique => 1st is next of i, 2nd is last index
    let first = i;
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let ans = nums[first] + nums[left] + nums[right];
      if (ans === 0) {
        //if ans ==0, skip the duplicates by moving left and right
        result.push([nums[first], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (ans < 0) {
        left++;
      } else if (ans > 0) {
        right--;
      }
    }
  }
  return result;
};

nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));
