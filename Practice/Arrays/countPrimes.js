/** 204
 * @param {number} n
 * @return {number}
 */
//other 2 solutions throw TLE
var countPrimes = function (n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        let result = isPrime(i);
        if (result) count++;
    }
    return count;
};

let isPrime = (num) => {
    if (num < 2) return false;
    if (num == 2 || num == 3) return true;
    if (num % 2 == 0 || num % 3 == 0) return false;

    for (let i = 5; i * i <= num; i += 6) {//mean check till sqrt(num)
        if (num % i == 0 || num % (i + 2) == 0) {
            return false;
        }

    }
    return true;
}

//instead of checking each number and counting, create arr with n size and mark false for non-prime
var countPrimes = function (n) {
    if (n < 2) return 0;
    let isPrimes = new Array(n).fill(true);
    isPrimes[0] = isPrimes[1] = false;
    for (let i = 2; i * i < n; i++) {
        if (isPrimes[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrimes[j] = false;
            }
        }
    }
    return isPrimes.filter(Boolean).length;
};
