/** 658
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let l = 0;
  let r = arr.length - k; //otherwise in the below condition m+k can go out of bound

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);

    //choose k elements from m and compare distance from m and m+k, move the window accordingly
    if (x - arr[m] > arr[m + k] - x) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return arr.slice(l, l + k);
};

arr = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4];
k = 4;
x = 3;

console.log(findClosestElements(arr, k, x));
