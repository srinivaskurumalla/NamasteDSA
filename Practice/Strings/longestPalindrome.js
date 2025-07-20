/** 5
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length == 1) return s;
  let result = "";
  for (let i = 0; i < s.length - 1; i++) {
    let currSubStr = "";
    for (let j = i; j < s.length; j++) {
      currSubStr += s[j];
      if (isPalindrone(currSubStr)) {
        result = result.length > currSubStr.length ? result : currSubStr;
      }
    }
  }
  return result;
};

var isPalindrone = function (str) {
  let n = str.length;
  let m = Math.floor(n / 2);
  for (let i = 0; i < m; i++) {
    if (str[i] !== str[n - i - 1]) {
      return false;
    }
  }
  return true;
};

//the above got time limit exceeded foe the below i/p
//s = "cmmrracelnclsbtdmuxtfiyahrvxuwreyorosyqapfpnsntommsujibzwhgugwtvxsdsltiiyymiofbslwbwevmjrsbbssicnxptvwmsmiifypoujftxylpyvirfueagprfyyydxeiftathaygmolkcwoaavmdmjsuwoibtuqoewaexihispsshwnsurjopdwttlzyqdbkypvjsbuidsdnpgklhwfnqdvlffcysnxeywvwvblatmxbflnuykhfhjptenhcxqinomlwalvlezefqybpuepbnymzlruuirpiatqgjgcnfmrlzshauoxuoqopcikogfwpssjdeplytcapmujyvgtfmmolnuadpwblgmcaututcrwsqrlpaaqobjfnhudmsulztbdkxpfejavastxejtpbqfftdtcdhvtpbzfuqcwkxtldtjycreimiujtxudtmokcoebhodbkgkgxjzrgyuqhozqtidltodlkziyofdeszwiobkwesdijxbbagguxvofvtphqxgvidqfkljufgubjmjllxoanbizwtedykwmneaosopynzlzvrlqcmyaahdcagfatlhwtgqxsyxwjhexfiplwtrtydjzrsysrcwszlntwrpgfedhgjzhztffqnjotlfudvczwfkhuwmdzcqgrmfttwaxocohtuscdxwfvhcymjpkqexusdaccw";
var longestPalindrome2 = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = [i];
    } else {
      map[s[i]].push(i);
    }
  }

  let indices = [...Object.values(map)];
  //console.log(indices);

  let result = "";
  for (let i = 0; i < indices.length; i++) {
    let list = indices[i];
    // console.log("list", list);

    for (let j = 0; j < list.length; j++) {
      for (let k = j; k < list.length; k++) {
        let currSubStr = s.substring(list[j], list[k] + 1);
        //console.log(currSubStr);
        if (isPalindrone(currSubStr)) {
          result = result.length > currSubStr.length ? result : currSubStr;
        }
      }
    }
  }
  return result;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome3 = function (s) {
  let result = s[0];
  //checking for odd palindrome
  for (let i = 1; i < s.length; i++) {
    let j = 1;
    while (i - j >= 0 && j < s.length && s[i - j] === s[i + j]) {
      let currPal = s.substring(i - j, i + j + 1);
      result = result.length > currPal.length ? result : currPal;
      j++;
    }
  }

  //check for even palindrome

  for (let i = 0; i < s.length; i++) {
    let j = 1;
    while (i - j + 1 >= 0 && j < s.length && s[i - j + 1] === s[i + j]) {
      let currPal = s.substring(i - j + 1, i + j + 1);
      result = result.length > currPal.length ? result : currPal;
      j++;
    }
  }
  return result;
};

//s = "cmmrracelnclsbtdmuxtfiyahrvxuwreyorosyqapfpnsntommsujibzwhgugwtvxsdsltiiyymiofbslwbwevmjrsbbssicnxptvwmsmiifypoujftxylpyvirfueagprfyyydxeiftathaygmolkcwoaavmdmjsuwoibtuqoewaexihispsshwnsurjopdwttlzyqdbkypvjsbuidsdnpgklhwfnqdvlffcysnxeywvwvblatmxbflnuykhfhjptenhcxqinomlwalvlezefqybpuepbnymzlruuirpiatqgjgcnfmrlzshauoxuoqopcikogfwpssjdeplytcapmujyvgtfmmolnuadpwblgmcaututcrwsqrlpaaqobjfnhudmsulztbdkxpfejavastxejtpbqfftdtcdhvtpbzfuqcwkxtldtjycreimiujtxudtmokcoebhodbkgkgxjzrgyuqhozqtidltodlkziyofdeszwiobkwesdijxbbagguxvofvtphqxgvidqfkljufgubjmjllxoanbizwtedykwmneaosopynzlzvrlqcmyaahdcagfatlhwtgqxsyxwjhexfiplwtrtydjzrsysrcwszlntwrpgfedhgjzhztffqnjotlfudvczwfkhuwmdzcqgrmfttwaxocohtuscdxwfvhcymjpkqexusdaccw";
s = "bb";
console.log(longestPalindrome3(s));
