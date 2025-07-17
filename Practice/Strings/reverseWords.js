/** 151
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  //return s.trim().split(" ").filter(str => str.length > 0).reverse().join(" ");

  s = s.trim().split(" ").reverse();

  let ans = "";
  for (let str of s) {
    if (str.length > 0) {
      ans += str + " ";
    }
  }
  return ans.trimEnd();
};

var reverseWords2 = function (s) {
  let i = s.length - 1;
  let result = []; //instead of string use list, because string is immutable
  let currWord = "";
  while (i >= 0) {
    if (s[i] != " ") {
      currWord = s[i] + currWord;
    } else {
      if (currWord.length > 0) {
        result.push(currWord);
        currWord = "";
      }
    }
    i--;
  }

  if(currWord.length > 0 ) result.push(currWord);
  return result.join(" ")
};
console.log(reverseWords2("  hello world  "));
