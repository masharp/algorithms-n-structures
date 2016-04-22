/**
 * Interview Cake - Apple Stock Problem (Recursion Hybrid)
 *
 * Classic stock problem - given an array of values, representing stock prices
 * throughout the day, return the maximum profit with one buy earlier in the
 * day and one sell at any point later in the day.
 *
 * Uses a recursive strategy on the main array and looping on the profit peeking.
 * handles a day of poor stock performance by returning the least amount of loss possible
 *
 * Performs around 0.1ms on my system.
 *
 * 2016 Michael Sharp
 * michael@softwareontheshore.com
 */

// test values array - great profit: 910 (purcase at 2, sell at 912)
var yesterdaysStocks = [23, 2, 11, 6, 23, 55, 45, 2, 23, 511, 232, 236, 2, 4, 123, 912, 99, 21, 21, 56];

/**
 * Iterative function that peeks ahead and checks the maximum profit
 * later in the day.
 * @param {int} purchase - current purchase price being compared
 * @param {array} values - array representing remaining days
 * @return {int} - highest profit available with purchase
 */
function getProfitMargin(purchase, values) {
  var profit = null;

  values.forEach(function(v) {
    var transaction = v - purchase;
    if(transaction > profit || profit === null) profit = transaction;
  });

  return profit;
}

/**
 * Recursive function that travels through the array and tracks
 * the highest profit margin for each day of purchase, uzing the
 * getProfitMargin function
 * @param {array} values - values represnting the days stock prices
 * @return {int} - highest possible profit for that day
 */
function maximizeStock(stocks, tracker) {
  var maximizedProfit = tracker || null;
  // console.time('Stock Parse Time');

  // base case - empty array
  if(stocks.length <=  1) {
    // console.timeEnd('Stock Parse Time');
    return maximizedProfit;
  }

  var currentPrice = stocks[0]; // take the next tick price
  var currentProfit = getProfitMargin(currentPrice, stocks.slice(1)); // check the profit at that price
  if(maximizedProfit < currentProfit || maximizedProfit === null) maximizedProfit = currentProfit; // assign profit if larger

  return maximizeStock(stocks.slice(1), maximizedProfit); // recurse through the rest of the ticks remaining
}

console.log(`Maximum Profit for the Day: ${maximizeStock(yesterdaysStocks)}`);
