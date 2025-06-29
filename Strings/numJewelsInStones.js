/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones2 = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) count++;
    }
  }
  return count;
};

var numJewelsInStones = function (jewels, stones) {
  let set = new Set();
  for (let i = 0; i < jewels.length; i++) {
    set.add(jewels[i]);
  }
  let count = 0;

  for (let j = 0; j < stones.length; j++) {
    if(set.has(stones[j])) count++;
    
  }

  return count;
};


(jewels = "z"), (stones = "ZzZ");
console.log(numJewelsInStones(jewels, stones));
