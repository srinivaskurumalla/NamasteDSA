/** 299
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let map = new Map();
  for (let i = 0; i < secret.length; i++) {
    if (!map.has(secret[i])) {
      map.set(secret[i], [[], []]);
    }
    map.get(secret[i])[0].push(i);
  }
  for (let i = 0; i < guess.length; i++) {
    if (!map.has(guess[i])) {
      map.set(guess[i], [[], []]);
    }
    map.get(guess[i])[1].push(i);
  }

  let resMap = new Map();
  for (let key of map.keys()) {
    let vals = map.get(key);
    let i = vals[0].length < vals[1].length ? 0 : 1;
    let j = i === 0 ? 1 : 0;
    if (vals[0].length && vals[1].length) {
      for (let val of vals[i]) {
        if (vals[j].includes(val)) {
          resMap.set("A", (resMap.get("A") || 0) + 1);
        } else {
          resMap.set("B", (resMap.get("B") || 0) + 1);
        }
      }
    }
  }

  return (resMap.get("A") || 0) + "A" + (resMap.get("B") || 0) + "B";
};

var getHint = function (secret, guess) {
  let bulls = 0;
  let cows = 0;

  //secret and guess contains digits [0 to 9], so take 10 zeros
  let secretCount = Array(10).fill(0);
  let guessCount = Array(10).fill(0);
  for (let i = 0; i < secret.length; i++) {
    //if matches take bulls count
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      //else take count of each array
      secretCount[+secret[i]]++;
      guessCount[+guess[i]]++;
    }
  }

  for (let i = 0; i < 10; i++) {
    cows += Math.min(secretCount[i], guessCount[i]); //take the min value
  }
  return `${bulls}A${cows}B`;
};
(secret = "17"), (guess = "78");
console.log(getHint(secret, guess));
