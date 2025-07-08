/**215
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//we need to solve it without sorting

//Idea is bring largest element to the end of the array in each cycle

//Time limit exceeded for k = 63565, need to solve it by Priority Queue
var findKthLargest = function (nums, k) {
  let largest = 0;
  for (let i = 0; i < k; i++) {
    let lastTillIndex = nums.length - i;
    for (let j = 1; j < lastTillIndex; j++) {
      if (nums[j] > nums[largest]) {
        largest = j;
      }
    }
    //swap
    if (largest != lastTillIndex) {
      let temp = nums[largest];
      nums[largest] = nums[lastTillIndex - 1];
      nums[lastTillIndex - 1] = temp;
    }
    largest = 0;
  }
  console.log(nums);
  
  return nums[nums.length - k];
};

(nums = [3, 2]), (k = 2);
console.log(findKthLargest(nums, k));
