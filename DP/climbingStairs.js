/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    return climb(n);

};

const climb = (n, memo = {}) => {
    if (n <= 2) return n;
    if (memo[n]) return memo[n];
    memo[n] = climb(n - 1, memo) + climb(n - 2, memo);
    return memo[n];

}