/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining2 = function (words, x) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      arr.push(i);
    }
  }
  return arr;
};
var findWordsContaining = function (words, x) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        arr.push(i);
        break;
      }
    }
    
  }
  return arr;
};

s = ["leet", "code", "love"];
x = "l";
console.log(findWordsContaining(s, x));
