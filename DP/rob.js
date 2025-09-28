/** 198
 * @param {number[]} nums
 * @return {number}
 */

//DP - Tabulation - bottom - up approach => T = O(n) && S = O(n)
var rob = function (arr) {
  let n = arr.length;
  if (n == 1) return arr[0];

  let max = Math.max(arr[0], arr[1]);
  let money = [arr[0], max];

  for (let i = 2; i < n; i++) {
    money[i] = Math.max(money[i - 2] + arr[i], money[i - 1]);
  }
  return money[n - 1];
};
//DP - Tabulation - bottom - up approach => T = O(n) && S = O(1)
var rob2 = function (arr) {
  let n = arr.length;
  if (n == 1) return arr[0];

  let max = Math.max(arr[0], arr[1]);
  let [first, second] = [arr[0], max];

  for (let i = 2; i < n; i++) {
    [second, first] = [Math.max(first + arr[i], second), second];
  }
  return second;
};

//same but takig 0,0 as first and second and looping from index 0
var rob3 = function (arr) {
  let n = arr.length;
  if (n == 1) return arr[0];

  let [first, second] = [0, 0];

  for (let i = 0; i < n; i++) {
    [second, first] = [Math.max(first + arr[i], second), second];
  }
  return second;
};

let arr = [2, 7, 9, 3, 1];
console.log(rob2(arr));
