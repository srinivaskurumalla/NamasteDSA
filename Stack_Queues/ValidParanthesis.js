/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      let popped = stack.pop();

      if (
        !popped ||
        (popped === "(" && s[i] !== ")") ||
        (popped === "{" && s[i] !== "}") ||
        (popped === "[" && s[i] !== "]")
      )
        return false;
    }
  }
  return stack.length === 0;
};

//Using map
var isValid = function (s) {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      //   if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      let popped = stack.pop();
      if (!popped || map[popped] !== s[i])
        // if (!popped ||
        //     (popped === '(' && s[i] !== ')') ||
        //     (popped === '{' && s[i] !== '}') ||
        //     (popped === '[' && s[i] !== ']')
        // )

        return false;
    }
  }
  return stack.length === 0;
};
