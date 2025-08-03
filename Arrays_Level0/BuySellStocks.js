//121. You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
var maxProfit = function(prices) { //Brute force type
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if(profit > maxProfit){
                maxProfit = profit;
            }
        }
        
    }
    return maxProfit;
};

var maxProfit = function(prices) {
    let min = prices[0];
    let mp = 0;
    for (let i = 1; i < prices.length; i++) {
        if(prices[i] < min){
            min = prices[i];
        }
        profit = prices[i] - min
        if(profit > mp){
            mp =profit;
        }
        
    }
    return mp;
}

prices = [7,1,4,3,1];
let result = maxProfit(prices);
console.log(result);

 