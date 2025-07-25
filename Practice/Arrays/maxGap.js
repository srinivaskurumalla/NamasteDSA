/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) return 0;
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }
  let maxGap = 0;
  let keysArr = [];
  for (let key of Object.keys(map)) {
    keysArr.push(key);
  }
  for (let i = 0; i < keysArr.length - 1; i++) {
    let currGap = keysArr[i + 1] - keysArr[i];
    maxGap = Math.max(currGap, maxGap);
  }
  return maxGap;
};

nums = [3, 6, 9, 1];
console.log(maximumGap(nums));
