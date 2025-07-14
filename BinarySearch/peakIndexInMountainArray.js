/** 852
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let m = l + Math.ceil((r - l) / 2);
    if (arr[m - 1] < arr[m]) {
      //if prev element is less than middle, check in right half including middle
      l = m;
    } else { 
      r = m - 1;
    }
  }
  return r;
};
