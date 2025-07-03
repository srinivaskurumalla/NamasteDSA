/** 28
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let n = haystack.length;
  let needleIndex = 0;
  let subStringIndex = -1;
  for (let i = 0; i < n; i++) {
    if (haystack[i] == needle[needleIndex]) {
      subStringIndex = i;
      let k = i + 1;
      let j=0
      for ( j = 1; j < needle.length; j++) {
        if (haystack[k++] !== needle[j]) {
          break;
        }
      }
      if (j === needle.length) {
        return subStringIndex;
      }
    }
  }
  return -1;
};



var strStr2 = function (haystack, needle) {
    return haystack.indexOf(needle);
}
 haystack = "leetcode", needle = "leeto"
 console.log(strStr2(haystack,needle));

