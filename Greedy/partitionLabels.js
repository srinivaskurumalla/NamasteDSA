/** 763
 * @param {string} s
 * @return {number[]}
 */

var partitionLabels = function (s) {
  let n = s.length;

  let map = new Map();
  //storing all index of each char
  for (let i = 0; i < n; i++) {
    if (map.has(s[i])) {
      map.set(s[i], [...map.get(s[i]), i]);
    } else {
      map.set(s[i], [i]);
    }
  }

  let currStart = 0;
  let currLast = -1;
  let res = [];
  for (let i = 0; i < n; i++) {
    while (currStart != currLast) {
      currStart = i;
      let arr = map.get(s[currStart]);
      currLast = Math.max(currLast, arr[arr.length - 1]);
      i++;
    }
    let lastPart = res.reduce((a, b) => a + b, 0);
    res.push(i - lastPart);
    currStart += 1;
    currLast = -1;
    i--;
  }
  return res;
};

//Same approach but simplified the code
var partitionLabels = function (s) {
  let n = s.length;

  let map = new Map();
  //stores last index of every char
  for (let i = 0; i < n; i++) {
    map.set(s[i], [i]);
  }

  let partitionStart = 0;
  let partitionEnd = 0;
  let res = [];
  for (let i = 0; i < n; i++) {
    partitionEnd = Math.max(partitionEnd, map.get(s[i]));

    //if we have reached the end of partition
    if (i === partitionEnd) {
      res.push(partitionEnd - partitionStart + 1);
      partitionStart = i + 1;
    }
  }
  return res;
};
s = "abcdefg";
console.log(partitionLabels(s));
