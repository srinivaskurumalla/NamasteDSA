/** 33
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  let found = false;
  let mid = left + Math.floor((right - left) / 2);

  let index = -1;
  while (!found) {
    if (nums[left] < nums[mid]) {
      //left part is sorted
      if (target >= nums[left] && target <= nums[mid]) {
        index = bs(nums, left, mid, target);
        found = true;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < nums[right]) {
      //right part is sorted
      if (target >= nums[mid] && target <= nums[right]) {
        index = bs(nums, mid, right, target);
        found = true;
      } else {
        right = mid - 1;
      }
    } else if (left === right && nums[left] === target) {
      index = right;
    }
    mid = left + Math.floor((right - left) / 2);
  }
  if (nums[index] === target) {
    return index;
  } else return -1;
};

var bs = function (arr, left, right, t) {
  console.log(arr);

  let mid = left + Math.floor((right - left) / 2);

  while (left <= right) {
    if (t < arr[mid]) {
      right = mid - 1;
    } else if (t > arr[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
    mid = left + Math.floor((right - left) / 2);
  }
  return right;
};

//above code failed some test cases

var search2 = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;

    //check if left part is sorted
    if (nums[left] <= nums[mid]) {
      // (=) because for test case [3,1], when left and middle are same,
      //  we should consider left as sorted, other wise it goes to infinite loop

      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    //check if right part is sorted
    else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
(nums = [3, 1]), (target = 1);
console.log(search2(nums, target));
