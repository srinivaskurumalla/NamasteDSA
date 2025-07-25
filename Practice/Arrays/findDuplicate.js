/**
 * @param {number[]} nums
 * @return {number}
 */
//we have Floyd’s Tortoise and Hare (Cycle Detection Algorithm)

var findDuplicate = function (nums) {
  //if we take map or set - it will be O(n) space
  //if we sort and apply binary search  - No, we cannot modify the array
  //so either by brute force it take O(n^2) time

  //so for this kind of problem where nums containing n+1 integers in range [1,n]
  //we have Floyd’s Tortoise and Hare (Cycle Detection Algorithm)
  let slow = nums[0];
  let fast = nums[0];

  //Phase1: Detect intersection point
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);

  //Phase2: Find entry point of the cycle (duplicate)
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
