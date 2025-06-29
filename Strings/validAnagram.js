/** 242
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  //count the letters in s string
  let sMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      sMap.set(s[i], sMap.get(s[i]) + 1);
    } else {
      sMap.set(s[i], 1);
    }
  }

  //reduce the count if we find same char in t
  for (let i = 0; i < t.length; i++) {
    if (!sMap.has(t[i]) || sMap.get(t[i]) < 0) {
      return false;
    } else {
      sMap.set(s[i], sMap.get(s[i]) - 1);
    }
  }

  return true;
};

var isAnagram1 = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  return s === t;
};
s = "";
t = "k";
console.log(isAnagram(s, t));
