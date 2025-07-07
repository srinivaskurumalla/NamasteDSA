/** 38
 * @param {number} n
 * @return {string}
 */
/**
 * @param {number} n
 * @return {string}
 */
var count = function (n) {
  let num = n.toString();
  let counter = 1;
  let result = "";
  for (let i = 0; i < num.length; i++) {
    if (num[i] === num[i + 1]) {
      counter += 1;
    } else {
      result += counter + num[i];
      counter = 1;
    }
  }
  return result;
};
var countAndSay = function (n) {
  let m = 1;
  for (let i = 1; i < n; i++) {
    m = count(m);
  }
  return m.toString();
};

var countAndSay = function (n) {
  if (n === 1) return "1";
  let res = "1";
  for (let i = 2; i <= n; i++) {
    let temp = "";
    let count = 1;
    for (j = 1; j < res.length; j++) {
      if (res[j] === res[j - 1]) {
        count++;
      } else {
        temp += count.toString() + res[j - 1];
        count = 1;
      }
    }
    temp += count.toString() + res[res.length - 1];
    res = temp;
  }
  return res;
};
console.log(countAndSay(11));

console.log(countAndSay(12));
