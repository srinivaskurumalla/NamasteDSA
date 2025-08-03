//268

//brute force approach
var missingNumber = function (nums) {
  //1. sort and compare each value
  nums = nums.sort((a, b) => a - b);
  if (nums[0] !== 0) return 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1] + 1) {
      return nums[i - 1] + 1;
    }
  }
  //At last if nothing found return last number that is 'n'
  return nums.length;
};

//optimised using formula , now it is O(n)
var missingNumber = function (nums) {
  let n = nums.length;
  let sum = (n * (n + 1)) / 2;
  let arrSum = 0;
  for (let i = 0; i < n; i++) {
    arrSum += nums[i];
  }
  return sum - arrSum;
};

nums = [
  45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
  4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30,
  25, 47, 0, 31, 42, 24, 10, 14,
];
let result = missingNumber(nums);
console.log(result);
