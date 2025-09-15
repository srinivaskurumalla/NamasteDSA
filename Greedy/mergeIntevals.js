/** 56
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);

  let ans = [intervals[0].slice()]; //copy the first interval

  for (let i = 1; i < intervals.length; i++) {
    const [s, e] = intervals[i];
    const last = ans[ans.length - 1];

    if (s <= last[1]) {
      //overlap => merge into last
      last[1] = Math.max(last[1], e);
    } else {
        //no overlap
      ans.push(intervals[i]);
    }
  }
  return ans;
};

intervals = [
  [4, 7],
  [1, 4],
];
console.log(merge(intervals));
