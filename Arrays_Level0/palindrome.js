//check if array is palindrome

var isPalindrome = function (arr) {
  let n = arr.length;
  let mid = Math.floor(n / 2);
  for (let i = 0; i < mid; i++) {
    if (arr[i] != arr[n - i - 1]) return false;
  }
  return true;
};

console.log(isPalindrome([1,1]));

