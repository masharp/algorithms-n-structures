/**
 * Interview Cake - Apple Stock Problem (Iteration)
 *
 * Classic stock problem - given an array of values, representing stock prices
 * throughout the day, return the maximum profit with one buy earlier in the
 * day and one sell at any point later in the day.
 *
 * Uses a for loop and returns negative numbers for a stock that devaulues throughout
 * the day.
 *
 * Performs at around .65ms on my system.
 *
 * 2016 Michael Sharp
 * michael@softwareontheshore.com
 */

// test values array - great profit: 910 (purcase at 2, sell at 912)
var yesterdaysStocks = [23, 2, 11, 6, 23, 55, 45, 2, 23, 511, 232, 236, 2, 4, 123, 912, 99, 21, 21, 56];

function maximizeProfit(stocks) {
  // console.time('Stock Parse Time')
  var lowestPrice = stocks[0]; // begin with the first stock
  var highestProfit = stocks[1] - lowestPrice; // begin with the profit of the first two

  stocks.slice(1).forEach(function(v) {
    var possibleProfit = v - lowestPrice; // check possible profit from the next value

    highestProfit = Math.max(highestProfit, possibleProfit); // assign the higher of the two profits
    lowestPrice = Math.min(lowestPrice, v); // track the current lowest price
  });

  // console.timeEnd('Stock Parse Time')
  return highestProfit;
}

console.log(`Maximum Profit: ${maximizeProfit(yesterdaysStocks)}`);
