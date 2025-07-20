/** 3
 * @param {string} s
 * @return {number}
 */

//Also sloved as part of strings
//but this is T = O(n), S = O(1) //because s consists of English letters, digits, symbols and spaces. 

//maintain i  to j window, if duplicate found move i to next of duplicate
var lengthOfLongestSubstring = function (s) {
  let i = 0;
  let maxLength = 0;
  let map = new Map(); //key are chars and values are it's index
  for (let j = 0; j < s.length; j++) {
    if (map.has(s[j])) { //found duplicate
      let idx = map.get(s[j]);
      if (idx >= i) i = idx + 1; //if duplicate is right side of i, then only move i
      //because if idx is less than i it means duplicate is not there in current window (i to j)
    }
    map.set(s[j], j);

    maxLength = Math.max(maxLength, j - i + 1);
  }

  return maxLength;
};


//but this is T = O(n), S = O(1) or O(m) => m = sum of Elngish letters etc  //because s consists of English letters, digits, symbols and spaces. 

//maintain i  to j window, if duplicate found move i to next of duplicate
var lengthOfLongestSubstring = function (s) {
    let i = 0;
    let maxLength = 0;
    let map = new Map(); //key are chars and values are it's index
    for (let j = 0; j < s.length; j++) {
        if (map.has(s[j]) && map.get(s[j]) >= i) { //found duplicate and duplicate is > =  i, then only move i, it mean duplicate is present inside window (i to j)
            i = map.get(s[j]) + 1;
        }
        map.set(s[j], j);
        let currWindowSize = j - i + 1;
        maxLength = Math.max(maxLength, currWindowSize);
    }

    return maxLength;
};
s =
  "cckamdkmakdcasmckmckacdsakcmkcmskcmascmaskcmaskcmsakdcmsdaccmsdkcmckmckmsacascascasdcasdcascsacascsacascsacsacsf";
console.log(lengthOfLongestSubstring(s));
