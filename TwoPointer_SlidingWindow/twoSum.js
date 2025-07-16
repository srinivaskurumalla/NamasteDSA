/** 1
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

var twoSum2 = function (nums, target) {
  let map = {}; //key is num/element - value is index
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let pair = target - nums[i];
    if (map[pair] && map[pair] !== i) {
      //if target - current val is available in map, we found the ans and check pair != curr val
      return [i, map[pair]];
    }
  }
};
nums = [1, 3, 4, 2];
t = 6;
console.log(twoSum2(nums, t));
