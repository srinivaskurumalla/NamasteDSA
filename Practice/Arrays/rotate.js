/** 189
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let n = nums.length;
  let removeArr = [];
  for (let i = n - 1; i >= n - k; i--) {
    removeArr.unshift(nums[i]);
  }
  console.log(removeArr);
  console.log(nums);
  return [...removeArr, ...nums].slice(0, n);
};

//but we should modify it in place
var rotate2 = function (nums, k) {
  while (k > 0) {
    rotateElement(nums);
    k--;
  }
  console.log(nums);
};
//rotate by 1 element
var rotateElement = (nums) => {
  let n = nums.length;
  let lastElement = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    nums[i + 1] = nums[i];
  }
  nums[0] = lastElement;
};

//Let's do this using stack
var rotate = function (nums, k) {
  let stack = [];
  let n = nums.length;
  k = k % n;

  //Store the last k elements in stack
  for (let i = n - k; i < n; i++) {
    stack.push(nums[i]);
  }

  //Shift the rest of the elements to the right
  for (let i = n - k - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  //Place k elements at the front of the stack
  for (i = k - 1; i >= 0; i--) {
    nums[i] = stack.pop();
  }

  //console.log("rotate 3", nums);
};
//Above code is using T= O(n), S =(k) or k%n

//let's do this with S = O(1);
//we have some simple/easy trick here
var rotate = function (nums, k) {
  //1. Reverse array
  //2. Reverse last k elements
  //3. Reverse remaining element

  let n = nums.length;
  k = k % n;
  reverse(nums, 0, n - 1); //1 step
  reverse(nums, 0, k - 1); //2 step
  reverse(nums, k, n - 1); //3 step
};

let reverse = (arr, left, right) => {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};
