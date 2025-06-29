/** 125
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome1 = function (s) {
  s = s.toLowerCase();

  filtered = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filtered += s[i];
    }
  }

  let n = filtered.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (filtered[i] !== filtered[n - i - 1]) {
      return false;
    }
  }
  return true;
};

var isPalindrome2 = function (s) {
  s = s.toLowerCase();

  let filtered = "";
  let reverse = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filtered += s[i];
      reverse = s[i] + reverse; //adding before/left side => reverse will come
    }
  }

  return filtered === reverse;
};

//Above code takes time = O(n) and space O(n)

//Avoid extra space like below
var isPalindrome = function (s) {
  s = s.toLowerCase();

  let i = 0;
  let j = s.length - 1;
  while (i <= j) {
    if (!s[i].match(/[a-z0-9]/)) {
      i++;
    } else if (!s[j].match(/[a-z0-9]/)) {
      j--;
    } else if (s[i] !== s[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
};

s = "e; slslse, ";

console.log(isPalindrome(s));
