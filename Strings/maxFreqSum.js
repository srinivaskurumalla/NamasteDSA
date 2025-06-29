//3541

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  //store all the values frq in Map
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  //Look for Vowel and Consonant freq (max)
  let vowelMaxFreq = 0;
  let consonatMaxFreq = 0;

  let vowels = ["a", "e", "i", "o", "u"];
  for (let key of map.keys()) {
    if (vowels.includes(key)) {
      vowelMaxFreq = Math.max(vowelMaxFreq, map.get(key));
    } else {
      consonatMaxFreq = Math.max(consonatMaxFreq, map.get(key));
    }
  }

  return vowelMaxFreq + consonatMaxFreq;
};

let s = "aeiaeia";
console.log(maxFreqSum(s));
