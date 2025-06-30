/** 3
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ss = s;
  if (ss.trim().length <= 1) return s.length;
  s = s.trim();
  let longSubStr = "";
  let currSubStr = "";

  for (let i = 0; i < s.length; i++) {
    if (!currSubStr.includes(s[i]) && s[i] !== " ") {
      currSubStr += s[i];
    } else {
      if (currSubStr.length > longSubStr.length) {
        longSubStr = currSubStr;
      }
      s = findStrIdx(s[i], s);
      if (s) i = 0;
      currSubStr = s[i];
    }
  }
  let result = currSubStr?.length || s.length;
  result =
    longSubStr?.length > currSubStr?.length
      ? longSubStr.length
      : currSubStr?.length;

  return result;
};

var findStrIdx = function (ch, str) {
  for (let i = 0; i < str.length; i++) {
    if (ch === str[i]) {
      str = str.substring(i + 1);
      break;
    }
  }
  return str;
};

//above code failed 2 cases out of 987

//brute force approach

//Look for each possible substring and get the max lenth
var lengthOfLongestSubstring2 = function (s) {
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    let set = new Set();
    for (let j = i; j < s.length; j++) {
      //O(n^2)
      if (set.has(s[j])) {
        break;
      }
      set.add(s[j]);
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }
  return maxLength;
};

//Optimized,
//Two pointers (Sliding window)
var lengthOfLongestSubstring2 = function (s) {
  let left = 0;
  let maxLength = 0;
  let set = new Set();

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength,right-left + 1);
  }

  return maxLength;
};
s = "   abcabdf ";
console.log(lengthOfLongestSubstring2(s));
