/** 55
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let canReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i <= canReach) {
      canReach = Math.max(canReach, i + nums[i]);
    } else {
      return false;
    }
  }
  return true;
};

//above code worked

//lets traverse it from last
var canJump = function (nums) {
  let target = nums.length - 1; //last index
  for (let i = nums.length - 1; i >= 0; i--) {
    //traverse from last and
    // check if the curr index can jump to or beyond the target,
    // if yes update the target
    if (i + nums[i] >= target) {
      target = i;
    }
  }
  return target === 0;
};

let nums = [3];
console.log(canJump(nums));
