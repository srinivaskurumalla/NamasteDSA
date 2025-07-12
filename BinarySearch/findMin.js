/** 153
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  
  let min = nums[0];
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    //check left part is sorted
    if (nums[l] <= nums[m]) {
      min = Math.min(nums[l], min);
      l = m + 1;
    } else {
      min = Math.min(nums[m], min);
      r = m;
    }
  }
  return min;
};

//above code also worked - passed all test cases T=O(log n), S = O(1)

//below code also same

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    //if search space is sorted
    if (nums[l] <= nums[r]) return nums[l];

    let m = l + Math.floor((r - l) / 2);

    //if middle is inflection point
    if (nums[m] < nums[m - 1]) return nums[m];

    //check if left part is not sorted.... because ans will be in non sorted
    if (nums[l] > nums[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
};
