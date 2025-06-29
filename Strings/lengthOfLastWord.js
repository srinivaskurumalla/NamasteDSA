/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord2 = function (s) {
  let words = s.trim().split(" ");
  return words[words.length - 1].length;
};
var lengthOfLastWord = function (s) {
  let n = s.length;
  let lastWordLength = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] != " ") {
      lastWordLength++;
    } else if (lastWordLength > 0) {
      break;
    } 
  }
  return lastWordLength;
};
s = "   fly me   to   the moon, u   ";
console.log(lengthOfLastWord(s));
