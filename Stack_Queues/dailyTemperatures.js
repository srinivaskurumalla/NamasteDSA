/** 739
 * @param {number[]} temperatures
 * @return {number[]}
 */
//same logic as Next greater element
var dailyTemperatures = function (temperatures) {
  let stack = [];

  let n = temperatures.length;
  let ans = Array(n).fill(0);

  stack.push(n - 1);
  ans[n - 1] = 0;
  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (temperatures[i] < temperatures[top]) {
        ans[i] = top - i;
        stack.push(i);
        break;
      } else {
        stack.pop();
      }
    }
    if (stack.length == 0) {
      stack.push(i);
      ans[i] = 0;
    }
  }
  return ans;
};
temperatures = [89,62,70,58,47,47,46,76,100,70];
console.log(dailyTemperatures(temperatures));
