/** 503
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  nums = nums.concat(nums);

  let stack = [];
  let ngeArr = Array(nums).fill(-1);

  let n = nums.length;
  stack.push(nums[n - 1]);
  ngeArr[n - 1] = -1;
  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (nums[i] < top) {
        ngeArr[i] = top;
        break;
      } else {
        stack.pop();
      }
    }
    if (stack.length === 0) {
      ngeArr[i] = -1;
    }
    stack.push(nums[i]);
  }

  ngeArr = ngeArr.splice(0, n / 2);
  return ngeArr;
};

//without copying/merging array
var nextGreaterElements2 = function (nums) {
  //nums = nums.concat(nums);
  let n = nums.length;

  let stack = [];
  let ngeArr = Array(n).fill(-1);

  stack.push(nums[n - 1]);

  for (let i = 2 * n - 2; i >= 0; i--) {
    
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (nums[i%n] < top) {
        ngeArr[i%n] = top;
        break;
      } else {
        stack.pop();
      }
    }
    if (stack.length === 0) {
      ngeArr[i%n] = -1;
    }
    stack.push(nums[i%n]);
  }

  //ngeArr = ngeArr.splice(0, n / 2);
  return ngeArr;
};

let nums = [100, 1, 11, 1, 120, 111, 123, 1, -1, -100];
console.log(nextGreaterElements2(nums));
