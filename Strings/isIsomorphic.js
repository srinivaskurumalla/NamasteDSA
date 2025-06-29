/**  205
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] && t[i] !== map[s[i]]) {
      return false;
    } else {
      map[s[i]] = t[i];
    }

    if (!map[s[i]]) {
      let add = true;
      for (let key in map) {
        if (map[key] === t[i]) {
          add = false;
        }
      }
      if (add) {
        map[s[i]] = t[i];
      }
    }
  }

  let target = "";
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) target += map[s[i]];
  }

  return target === t;
};
var isIsomorphic1 = function (s, t) {
  let mapStoT = {};
  let mapTtoS = {};
  for (let i = 0; i < s.length; i++) {
    if (mapStoT[s[i]] && mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] && mapTtoS[t[i]] !== s[i]) {
      return false;
    } 
    // else if (mapTtoS[t[i]] && mapTtoS[t[i]] !== s[i]) {
    //   return false;
    // } 
    else {
      mapStoT[s[i]] = t[i];
      mapTtoS[t[i]] = s[i];
    }
  }
 

  return true;
};

(s = "bar"), (t = "foo");
console.log(isIsomorphic1(s, t));
