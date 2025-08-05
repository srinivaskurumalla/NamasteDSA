var isPowerOfTwo = function (n) {
  console.log(n);

  if (n == 1) return true;
  if (n % 2 == 1 || n <= 0) return false;
  return isPowerOfTwo(n / 2);
};

var isPowerOfTwo2 = function (n) {
  if (n % 2 == 1 || n <= 0) return false;
  let result = Math.log2(n);
  return result == Math.floor(result);
};

console.log(isPowerOfTwo(6));
