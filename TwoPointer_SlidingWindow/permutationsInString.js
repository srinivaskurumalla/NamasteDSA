/** 567
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let hashArray1 = Array(26).fill(0);
  let hashArray2 = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) { //count s1 chars

    hashArray1[s1.charCodeAt(i) - 97] = hashArray1[s1.charCodeAt(i) - 97] + 1;
  }

  let i = 0;
  for (let j = s1.length; j <= s2.length ; j++) {
    for (let w = i; w < j; w++) {
      hashArray2[s2.charCodeAt(w) - 97] = hashArray2[s2.charCodeAt(w) - 97] + 1; //count window chars
      console.log(s2[w]);
    }
    console.log(hashArray2);

    if (JSON.stringify(hashArray1) === JSON.stringify(hashArray2)) { //if same return true else make to default that is fill 0's
      return true;
    } else {
      hashArray2.fill(0);
      i++;
    }
  }
  return false;
};

//same logic but optimized
var checkInclusion = function (s1, s2) {
    let hashS = Array(26).fill(0); //array for string that is s1
    let hashW = Array(26).fill(0); //array for window's string that is s2

    //count chars of s1 and window
    let windowSize = s1.length;

    for (let i = 0; i < windowSize; i++) {
        ++hashS[s1.charCodeAt(i) - 97]; //for s1
        ++hashW[s2.charCodeAt(i) - 97]; //for s2
    }

    let i = 0;
    let j = windowSize - 1;
    while (j < s2.length) {
        if (isHashsEqual(hashS, hashW)) {
            return true;
        } else {
            //decrease count of ith char
            //increase i
            //increase j
            //increase count of jth char

            --hashW[s2.charCodeAt(i) - 97];
            i++;
            j++
            ++hashW[s2.charCodeAt(j) - 97];


        }
    }
    return false;

};

var isHashsEqual = function (hashS, hashW) {
    for (let i = 0; i < 26; i++) {
        if (hashS[i] !== hashW[i]) {
            return false;
        }
    }
    return true;
}
