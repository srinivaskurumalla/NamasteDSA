//Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.
function isPalindrome(x) {
  if (x < 0) return false; //negative

  let xCopy = x;
  let rev = 0;
  while (x > 0) {
    let rem = x % 10; //extrace last digit
    rev = rev * 10 + rem; //build the number in reverse order
    x = Math.floor(x / 10); //remove last digit from original number
  }
  return rev === xCopy;
}

let n = 11211;

let res = isPalindrome(n);
console.log(res);
