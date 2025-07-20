/** 424
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

//Push each char to map
//check is the window valid? => total count of map - max element of map <= k
//if valid update count = j-i+1
//else move i = i+1 and decrease it's count from map
var characterReplacement = function (s, k) {
  let i = (j = 0);
  let longestCount = 0;
  let map = new Map();

  //push to map
  for (j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      map.set(s[j], map.get(s[j]) + 1);
    } else {
      map.set(s[j], 1);
    }

    let totalCount = 0;
    let maxCount = 0;
    //check is substring valid
    for (let key of map.keys()) {
      if (map.get(key) > maxCount) {
        maxCount = map.get(key);
      }
      totalCount += map.get(key);
    }

    if (totalCount - maxCount > k) {
      //if not valid , move i and decrease s[i] from map
      map.set(s[i], map.get(s[i]) - 1);
      i++;
    }

    longestCount = Math.max(longestCount, j - i + 1);
  }
  return longestCount;
};

//logic is same

var characterReplacement = function (s, k) {
  let i = (j = 0);
  let maxWidowSize = 0;
  let map = {};
  map[s[j]] = 1;
  //sliding window
  while (j < s.length) {
    if (isWindowValid(map, k)) {
      maxWidowSize = Math.max(maxWidowSize, j - i + 1);
      ++j;
      map[s[j]] = map[s[j]] ? ++map[s[j]] : 1;
    } else {
      --map[s[i]];
      i++;
    }
  }

  return maxWidowSize;
};

//checking window => we can do this in other ways also
//map will store key and value, so 26 + 26 = 52 memory locations
//if we use array, it will be 26 only
var isWindowValid = function (map, k) {
  let totalCount = 0;
  let maxCount = 0;
  for (let key of Object.keys(map)) {
    totalCount += map[key];
    maxCount = map[key] > maxCount ? map[key] : maxCount;
  }
  return totalCount - maxCount <= k;
};

//using array
var characterReplacement = function (s, k) {
  let i = (j = 0);
  let maxWidowSize = 0;
  let arr = Array(26).fill(0);
  arr[s.charCodeAt(0) - 65] = 1; //Capital Alphabets
  //sliding window
  while (j < s.length) {
    if (isWindowValid(arr, k)) {
      maxWidowSize = Math.max(maxWidowSize, j - i + 1);
      ++j;
      ++arr[s.charCodeAt(j) - 65];
    } else {
      --arr[s.charCodeAt(i) - 65];
      i++;
    }
  }

  return maxWidowSize;
};
var isWindowValid = function (arr, k) {
  let totalCount = 0;
  let maxCount = 0;
  for (let i = 0; i < 26; i++) {
    totalCount += arr[i];
    maxCount = arr[i] > maxCount ? arr[i] : maxCount;
  }
  return totalCount - maxCount <= k;
};
console.log(characterReplacement(s, k));
