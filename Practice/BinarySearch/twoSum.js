/** 167
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

//constraint is use space = O(1)
var twoSum = function (numbers, target) {
  //Step 1: Find element that is just below/less than target

  let l = 0;
  let r = numbers.length;
  while (l < r) {
    let m = l + Math.ceil((r - l) / 2);
    if (numbers[m] < target || numbers[m] === 0) {
      // numbers[m] === 0, because if m == 0, we can treat it equal to may be
      l = m;
    } else {
      r = m - 1;
    }
  }
  console.log("r:", r);
  if (numbers[r] < 0) {
    r += 1;
  }
  console.log("r:", r);

  //step2: search for target between l = 0 and found r;
  l = 0;
  while (l < r) {
    let sum = numbers[l] + numbers[r];
    if (sum === target) {
      return [l + 1, r + 1];
    } else if (sum < target) {
      l++;
    } else r--;
  }
};
console.log(twoSum([-3, 3,4,90], 0));
