//1221
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit2 = function (s) {
  let balancedCount = 0;
  let lCount = 0;
  let rCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      lCount++;
    } else rCount++;

    if (lCount === rCount) balancedCount++;
  }

  return balancedCount;
};
var balancedStringSplit = function (s) {
  let balancedCount = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    count = s[i] === "L" ? ++count : --count;

    if (count === 0) balancedCount++;
  }

  return balancedCount;
};

s = "LLLLRRRR";
console.log(balancedStringSplit(s));
