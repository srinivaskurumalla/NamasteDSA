/** 76
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let m = s.length;
  let n = t.length;

  if (m < n) return "";

  let j = n;
  let minWindow = "";
  let i = 0;

  while (i <= m - n) {
    let s1 = s.substring(i, j);
    //is s1 has t ?
    let res = isTargetInSource(s1, t);
    if (res) {
      minWindow = s1;
      ++i;
    } else {
      while (!res && j < m) {
        ++j;
        if (minWindow.length >= j - i) ++i;
        s1 = s.substring(i, j);
        res = isTargetInSource(s1, t);
      }
      if (i < m - n && minWindow != "") minWindow = s1;
      ++i;
    }
  }
  return minWindow;
};

//Thrown TLE

function isTargetInSource1(source, target) {
  const countChars = (str) => {
    const map = {};
    for (let ch of str) {
      map[ch] = (map[ch] || 0) + 1;
    }
    return map;
  };

  const tMap = countChars(target);
  const sMap = countChars(source);

  for (let ch in tMap) {
    if (!sMap[ch] || sMap[ch] < tMap[ch]) {
      return false;
    }
  }
  return true;
}
// 1. Create map for s
// 2. Create map for t
// 3. check if s has t
// 4. if yes, remove first char from s and delete it's req from sMap, then check if yes, repeat
// 5 else, remove from last and do the same.

// 6 do the same for reverse of s also, then take the min string
var minWindow1 = function (s, t) {
  if (s.length < t.length) return "";

  const tMap = countChars(t);
  let result = "";

  // First Pass: Trim from start
  let sMap = countChars(s);

  let res = checkSHasT(tMap, sMap);

  if (!res) return "";
  let i = 0;
  let j = s.length;

  while (i < j && checkSHasT(tMap, sMap)) {
    const ch = s[i];
    sMap[ch]--;
    if (checkSHasT(tMap, sMap)) {
      i++; // Safe to trim
    } else {
      sMap[ch]++; // Undo last trim
      break;
    }
  }

  while (j > i && checkSHasT(tMap, sMap)) {
    const ch = s[j - 1];
    sMap[ch]--;
    if (checkSHasT(tMap, sMap)) {
      j--; // Safe to trim from right
    } else {
      sMap[ch]++;
      break;
    }
  }

  let trimmed1 = s.substring(i, j);
  result = trimmed1;

  // Second Pass: Reverse and repeat
  let sReversed = s.split("").reverse().join("");
  let sMap2 = countChars(sReversed);
  let i2 = 0;
  let j2 = s.length;

  while (i2 < j2 && checkSHasT(tMap, sMap2)) {
    const ch = sReversed[i2];
    sMap2[ch]--;
    if (checkSHasT(tMap, sMap2)) {
      i2++;
    } else {
      sMap2[ch]++;
      break;
    }
  }

  while (j2 > i2 && checkSHasT(tMap, sMap2)) {
    const ch = sReversed[j2 - 1];
    sMap2[ch]--;
    if (checkSHasT(tMap, sMap2)) {
      j2--;
    } else {
      sMap2[ch]++;
      break;
    }
  }

  let trimmed2 = sReversed.substring(i2, j2).split("").reverse().join("");

  // Pick the shorter one
  if (trimmed2.length < result.length) {
    result = trimmed2;
  }

  return result;
};

let countChars = (str) => {
  const map = {};
  for (let ch of str) {
    map[ch] = (map[ch] || 0) + 1;
  }
  return map;
};

let checkSHasT = (tMap, sMap) => {
  for (let ch in tMap) {
    if (!sMap[ch] || sMap[ch] < tMap[ch]) {
      return false;
    }
  }
  return true;
};

//Passed

var minWindow = function (s, t) {
    if (s.length < t.length) return "";

    const tMap = {};
    for (let char of t) {
        tMap[char] = (tMap[char] || 0) + 1;
    }

    let windowMap = {};
    let have = 0;
    let need = Object.keys(tMap).length;

    let res = [-1, -1];
    let resLen = Infinity;

    let left = 0;
    for (let right = 0; right < s.length; right++) {
        let ch = s[right];
        windowMap[ch] = (windowMap[ch] || 0) + 1;

        if (tMap[ch] && tMap[ch] == windowMap[ch]) {
            have++;
        }

        while (have == need) {
            //update result if smaller window found
            if (right - left + 1 < resLen) {
                res = [left, right];
                resLen = right - left + 1;
            }

            //shrink from left
            windowMap[s[left]]--;
            if (tMap[s[left]] && windowMap[s[left]] < tMap[s[left]]) {
                have--;
            }
            left++;
        }
    }

    let [start, end] = res;
    return resLen == Infinity ? "" : s.substring(start, end + 1);
};

