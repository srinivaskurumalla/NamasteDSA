/**3507
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
  let count = 0;
  function isNonDecreasing(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return false;
    }

    return true;
  }

  while (!isNonDecreasing(nums)) {
    let minSum = Infinity;
    let index = -1;

    //Step1: find minimum pair sum and it's index
    for (let i = 0; i < nums.length - 1; i++) {
      let sum = nums[i] + nums[i + 1];
      if (sum < minSum) {
        minSum = sum;
        index = i;
      }
    }
    //step2: add the pair and insert the value at the same position
    let added = nums[index] + nums[index + 1];
    nums.splice(i, 2, added);
    count++;
  }
  return count;
};
