/** 150
 * @param {string[]} tokens
 * @return {number}
 */

//Implemented on my own, without watching the Akshay's logic and it worked.
var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (isNaN(tokens[i])) {
      let second = stack.pop();
      let first = stack.pop();
      let ans = 0;
      if (tokens[i] == "+") {
        ans = first + second;
      }
      if (tokens[i] == "-") {
        ans = first - second;
      }
      if (tokens[i] == "*") {
        ans = first * second;
      }
      if (tokens[i] == "/") {
        ans = first / second; //learning Math.floor(-0.5) = 1, so we are making to positive first
        if (isDecimal(ans) && ans < 0) {
          ans = Math.floor(ans) + 1;
        }
        ans = Math.floor(ans);
      }
      stack.push(Number(ans));
    } else {
      stack.push(Number(tokens[i]));
    }
    console.log(stack);
  }
  return stack.pop();
};

function isDecimal(num) {
  return !Number.isInteger(num);
}

//using trunc and eval
var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (["+", "-", "*", "/"].includes(tokens[i])) {
      let second = stack.pop();
      let first = stack.pop();
      let ans = eval(`${first} ${tokens[i]} ${second}`);
      ans = Math.trunc(ans);

      stack.push(ans);
    } else {
      stack.push(tokens[i]);
    }
  }
  return Number(stack.pop());
};

//without eval, without own eval like function
var evalRPN3 = function (tokens) {
  let stack = [];
  //like our own eval
  const map = {
    "+": (first, second) => first + second,
    "-": (first, second) => first - second,
    "*": (first, second) => first * second,
    "/": (first, second) => Math.trunc(first / second),
  };

  for (let i = 0; i < tokens.length; i++) {
    if (map[tokens[i]]) {
      //mean if it is operand
      let second = stack.pop();
      let first = stack.pop();
      let ans = map[tokens[i]](Number(first), Number(second));
      stack.push(ans);
    } else {
      stack.push(tokens[i]);
    }
  }
  return Number(stack.pop());
};
tokens = ["2", "1", "+", "3", "*"];
console.log(evalRPN3(tokens));
