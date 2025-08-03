//Write a function countDigits(n)that takes an integer n and returns how many digits it contains.


function countDigits(num) {
  if (num == 0) return 1;
//safety check for negative numbers
  num = Math.abs(num);
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

let num = -2;
let count = countDigits(num);
console.log(count);
