/**69
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;

  let num = Math.floor(x / 2);
  let start = 2;
  let end = num;

  let mid = Math.floor((start + end) / 2);

  while (end >=  start ) { //or end >= start
    
    if (mid * mid > x) {
      end = mid - 1;
    } else if (mid * mid < x) {
      start = mid + 1;
    } else {
      return mid;
    }
    mid = Math.floor((start + end) / 2);
  }
  return mid; //or end
};
let x = 8;
console.log(mySqrt(x));
