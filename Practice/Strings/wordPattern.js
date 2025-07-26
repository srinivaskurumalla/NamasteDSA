/** 290
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let map = new Map();
  s = s.split(" ");
  if (s.length !== pattern.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      if (map.get(pattern[i]) !== s[i]) {
        return false;
      }
    } else {
      map.set(pattern[i], s[i]);
    }
  }
  console.log(map);
  map.clear();
  for (let i = 0; i < s.length; i++) {
    console.log("map2:", map);

    if (map.get(s[i])) {
      if (map.get(s[i]) !== pattern[i]) {
        return false;
      }
    } else {
      map.set(s[i], pattern[i]);
    }
  }
  //console.log("map2:", map)

  return true;
};
//Same but using one loop
var wordPattern = function (pattern, s) {
  let charToWord = new Map();
  let wordToChar = new Map();

  let words = s.split(" ");
  if (words.length != pattern.length) return false;

  for (let i = 0; i < s.length; i++) {
    let ch = pattern[i];
    let word = words[i];

    if (charToWord.has(ch) && charToWord.get(ch !== word)) return false;
    if (wordToChar.has(word) && wordToChar.get(word !== ch)) return false;

    charToWord.set(ch, word);
    wordToChar.set(word, ch);
  }
  return true;
};
p = "abba";
s = "dog constructor constructor dog";
console.log(wordPattern(p, s));
