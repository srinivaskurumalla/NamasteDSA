/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  //Here the houses are in circle
  //so same is previous problem, but here we need to handle it in 2 cases
  //case-A => Find from 0 to n-2
  //case - B => Find from 1 to n-1;

  let n = nums.length;
  if (n == 1) return nums[0];
  let robHelper = (start, end) => {
    let p1 = (p2 = 0); // prev1 = best till i-1, prev2 = best till i-2
    for (let i = start; i <= end; i++) {
      [p1, p2] = [Math.max(p2 + nums[i], p1), p1];
    }
    return p1;
  };

  return Math.max(
    robHelper(0, n - 2), //case-A Skip last
    robHelper(1, n - 1)// case-B Skip first
  ); 
};
