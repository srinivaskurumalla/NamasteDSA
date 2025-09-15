/** 435
 * @param {number[][]} intervals
 * @return {number}
 */

var eraseOverlapIntervals = function (intervals) {
  //sort it based on end time
  //because we will kepp the interval with less end time, so that we can accommadate more intervals to the right
  let ans = [];
  intervals = intervals.sort((a, b) => a[1] - b[1]);
  ans.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    //check if it is overlapping => if prev end time > curr start time
    let last = ans[ans.length - 1];
    if (last[1] > intervals[i][0]) {
      continue;
    }
    ans.push(intervals[i]);
  }
  return intervals.length - ans.length;
};

//same logic, reduced space
var eraseOverlapIntervals = function (intervals) {
  //sort it based on end time
  //because we will kepp the interval with less end time, so that we can accommadate more intervals to the right
  intervals = intervals.sort((a, b) => a[1] - b[1]);

  let count = 1; // first interval is always kept
  let lastEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    //non overlapping, keep it
    if (intervals[i][0] >= lastEnd) {
      count++;
      lastEnd = intervals[i][1];
    }
    //else overlaps, skip it
  }
  return intervals.length - count;
};
intervals = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];
console.log(eraseOverlapIntervals(intervals));
