/** 118
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    const row = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1); //first and last are always 1
      } else {
        const prev = result[i - 1];
        row.push(prev[j] + prev[j - 1]);
      }
    }
    result.push(row);
  }
  return result;
};

//logic is same
var generate = function (n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    const row = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1); //first and last are always 1
      } else {
        const prev = result[i - 1];
        row.push(prev[j] + prev[j - 1]);
      }
    }
    result.push(row);
  }
  return result;
};
