/**28
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//Using sliding window
var strStr = function (haystack, needle) {
  let i = 0;
  let windowSize = needle.length;
  for (let j = 0; j <= haystack.length - needle.length; j++) {
    if (needle === haystack.substring(j, j + windowSize)) {
      //instead of using substring(), we can compare each char manually
      return j;
    }
  }
  return -1;
};

//using strings, same was solved in practice string
var strStr = function (haystack, needle) {
  let i = 0;

  for (let j = 0; j < haystack.length; j++) {
    //no need till h.length =>  <= h.length-n.length
    if (needle[i] === haystack[j]) {
      let k = j;
      while (i < needle.length) {
        if (needle[i] === haystack[k]) {
          i++;
          k++;
        } else break;
      }
      if (i == needle.length) return j;
      else i = 0;
    }
  }
  return -1;
};

//Using KMP (knuth-Morris_Pratt) Algorithm
var strStr3 = function (haystack, needle) {
  //step1: Find LPS Array = Max Length of Proper Prefix array that is also a Suffix
  let m = needle.length;
  let n = haystack.length;

  let i = 0;
  j = 1;
  let LPS = [0];
  while (j < m) {
    if (needle[i] === needle[j]) {
      LPS[j] = i + 1;
      i++;
      j++;
    } else {
      if (i === 0) {
        LPS[j] = 0;
        j++;
      } else {
        i = LPS[i - 1];
      }
    }
  }
  console.log(LPS);

  //step2: Check for the string
  i = 0; //point to haystack
  j = 0; //point to needle

  while (i < n) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      if (j === 0) {
        i++;
      } else {
        j = LPS[j - 1];
      }
    }
    //check if we found string
    if (j === m) {
      return i - m; //starting index
    }
  }
  return -1;
};

let haystack = "onionionsky";
let needle = "onions";
console.log(strStr3(haystack, needle));
