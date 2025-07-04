/** 1021
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let result = "";
  let stack = [];
  let k = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      if (stack.length > 1) {
        //add "(" to result if stack already has 1 "("
        result += s[i];
      }
    } else {
      if (stack.length > 1) {
        //add ")" to result if stack already has "(" more than 1
        result += s[i];
      }
      stack.pop();
    }
  }
  return result;
};

//without stack

/** 1021
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let result = "";

  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      counter++;
      if (counter > 1) result += s[i];
    } else {
      if (counter > 1) result += s[i];
      counter--;
    }
  }
  return result;
};

s = "(()())(())(()(()))";
console.log(removeOuterParentheses(s));
