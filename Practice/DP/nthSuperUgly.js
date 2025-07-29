/** 313
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */

//brute force approach, pass numbers till we find nth Super ugly number, check whether it's uglry or not
var nthSuperUglyNumber = function (n, primes) {
  let count = 0;
  let num = 1;
  while (true) {
    let ugly = isSuperUgly(num, primes);
    if (ugly) count++;

    if (count == n) break;
    num++;
  }
  return num;
};

let isSuperUgly = (num, primes) => {
  if (num === 1) return true; //1 is always ugly
  for (let prime of primes) {
    while (num % prime == 0) {
      num = num / prime;
    }
  }
  return num === 1;
};

//above code thrown TLE, will do once DP topic is covered.
