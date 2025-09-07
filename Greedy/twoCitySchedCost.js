/** 1029. Two City Scheduling
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  // Sort costs based on savings = costB - costA
  costs.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]));

  let minCost = 0;
  let n = costs.length / 2;

  // First half -> send to City B (cheaper)
  for (let i = 0; i < n; i++) {
    minCost += costs[i][1];
  }

  // Second half -> send to City A (cheaper)
  for (let i = n; i < 2 * n; i++) {
    minCost += costs[i][0];
  }

  return minCost;
};

const costs = [
  [259, 770],
  [448, 54],
  [926, 667],
  [184, 139],
  [840, 118],
  [577, 469],
];

console.log(twoCitySchedCost(costs)); // Output -> 1859
