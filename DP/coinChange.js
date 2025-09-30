/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//Geedy didn't work
var coinChange = function (coins, amount) {
  let count = 0;
  let i = 0;
  if (amount == 0) return 0;

  coins.sort((a, b) => b - a); //sort in descending order
  while (i < coins.length && amount != 0) {
    if (coins[i] <= amount) {
      amount -= coins[i];
      count++;
      if (amount == 0) return count;
      else if (amount < 0) return -1;
    } else {
      i++;
    }
  }
  return -1;
};

var coinChange2 = function (coins, amount) {
  let n = coins.length;
  let dp = {}; //even Map thrown TLE
  let dfs = (newAmount) => {
    if (newAmount < 0) return -1;
    if (newAmount == 0) return 0;

    let minCoins = Infinity;
    if (dp[newAmount]) {
      return dp[newAmount];
    }
    for (let i = 0; i < n; i++) {
      let res = dfs(newAmount - coins[i]);
      if (res != -1) {        //don't include/compare, so ignore -1
        minCoins = Math.min(minCoins, 1 + res); //take the min coins
      }
    }
    dp[newAmount] = minCoins === Infinity ? -1 : minCoins;
    return dp[newAmount];
  };

  return dfs(amount);
};
let coins = [1, 2, 5];
let amount = 11;
console.log(coinChange2(coins, amount));
