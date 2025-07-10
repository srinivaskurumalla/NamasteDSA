/** 33
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  let mid = left + Math.floor((right - left) / 2);
  while (nums.length != 1) {
    if (nums[left] < nums[mid]) {
      //left part is sorted

      if (target < nums[mid] || target > nums[left]) {
        // and target lies here so apply binary search for this array
        let sorted = nums.slice(left, mid + 1);
        let idx = bs(sorted, target);

        if (nums[idx] == target) return idx;
      } else {
        nums = nums.slice(mid + 1);
      }
    } else if (nums[mid] < nums[right]) {
      //right part is sorted
      if (target < nums[right] || target > nums[mid]) {
        // and target lies here so apply binary search for this array
        let sorted = nums.slice(mid + 1);
        let idx = bs(sorted, target);

        if (nums[idx] == target) return idx;
      } else {
        nums = nums.slice(0, mid + 1);
      }
    }
  }
};

var bs = function (arr, t) {
  let left = 0;
  let right = arr.length;

  let mid = left + Math.floor((right - left) / 2);

  while (left <= right) {
    if (t < arr[mid]) {
      right = mid - 1;
    }
    if (t > arr[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
};

(nums = [4, 5, 6, 7, 0, 1, 2]), (target = 0);
console.log(search(nums, target));
