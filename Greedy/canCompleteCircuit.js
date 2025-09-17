/** 134
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  //calculate gains for each point
  let gains = [];
  let totalGain = 0;
  for (let i = 0; i < gas.length; i++) {
    let currGain = gas[i] - cost[i];
    gains.push(currGain);
    totalGain += currGain;
  }
  //if total gain is < 0, ans doesn't exist. so return early
  if (totalGain < 0) return -1;

  let curr = 0;
  let currIndex = 0;
  //else find the correct index that can satisfy the conditions
  for (let i = 0; i < gains.length; i++) {
    curr += gains[i];

    if (curr >= 0) continue;

    currIndex = i + 1;
    curr = 0;
  }
  return currIndex;
};

//same logic but using single loop
var canCompleteCircuit = function (gas, cost) {
  let currGain = 0;
  let totalGain = 0;
  let ans = 0;

  for (let i = 0; i < gas.length; i++) {
    let gain = gas[i] - cost[i];
    currGain += gain;
    totalGain += gain;

    if (currGain < 0) {
      ans = i + 1;
      currGain = 0;
    }
  }

  return totalGain >= 0 ? ans : -1;
};
