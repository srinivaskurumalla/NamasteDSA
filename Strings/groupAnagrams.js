/** 49
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  //create map and key is sorted string, values are list of original strings
  // "aet" :["eat","tea","ate"]
  for (let i = 0; i < strs.length; i++) {
    let sortedStr = strs[i].split("").sort().join("");
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(strs[i]);
    } else {
      map.set(sortedStr, [strs[i]]);
    }
  }

  return [...map.values()];
};

var groupAnagrams1 = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let s = strs[i];
    //find key [0,0,....26]
    let keyFreqArr = Array(26).fill(0);
    
    //for each char in s increase it's index value by one
    //find it's index by ascci
    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt() - "a".charCodeAt();
      keyFreqArr[index]++;
    }
    if (map[keyFreqArr]) {
      map[keyFreqArr].push(strs[i]);
    } else {
        map[keyFreqArr] =[ strs[i]];
    }
  }
  console.log(map);
  
  return [...Object.values(map)];
};
strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

//Time Complexity = O(n * mlog m)
//Space Complexity = O(n * m)

//n is the no. of strings in strs
//m is the length of each string
console.log(groupAnagrams1(strs));
