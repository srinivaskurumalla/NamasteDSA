/** 1903
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2 !== 0) {
      return num.toString();
    } else {
      num = num.slice(0, i);
    }
  }
  return "";
};

num = "35427";
console.log(largestOddNumber(num));
