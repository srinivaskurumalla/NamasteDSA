/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  s = s.split("");
  //jump index by 2k elements
  for (let j = 0; j < s.length; j = j + 2 * k) {
    let mid = Math.floor(k / 2);
    let n = k;

    //each time reverse k elements
    for (let i = 0; i < mid; i++) {
      let temp = s[j + i];
      s[j + i] = s[j + n - i - 1];
      s[j + n - i - 1] = temp;
    }
  }

  return s.join("");
};

(s =
  "hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl"),
  (k = 39);
console.log(reverseStr(s, k));
