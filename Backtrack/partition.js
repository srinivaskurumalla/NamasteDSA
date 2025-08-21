/** 131
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];
  let isPalindrome = (str) => {
    let i = 0;
    let j = str.length-1;
    while (i < j) {
      if (str[i++] != str[j--]) return false;
    }
    return true;
  };

  let backtrack = (path, remainingSubstring) => {
    if (remainingSubstring.length == 0) {
      res.push(path);
      return;
    }
    for (let i = 1; i <= remainingSubstring.length; i++) {
      let choices = remainingSubstring.substring(0, i);

      if (!isPalindrome(choices)) continue;
      path.push(choices);
      backtrack(path, remainingSubstring.substring(i));
      path.pop();
    }
  };
  backtrack([], s);
  return res;
};
