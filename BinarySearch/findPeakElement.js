/** 162
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] > nums[m + 1]) {
      // drawn graph on book, peak must be m or before that
      r = m;
    } else {
      //here m can't be peak for sure, so excluding m
      l = m + 1;
    }
  }
  return r;
};
