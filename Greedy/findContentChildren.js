/** 455
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  let child = 0;
  for (let cookie = 0; cookie < s.length; cookie++) {
    if (s[cookie] >= g[child]) {
      child++;
    }
    if (child == g.length) break; //child array is finished, so exit early
  }
  return child;
};
