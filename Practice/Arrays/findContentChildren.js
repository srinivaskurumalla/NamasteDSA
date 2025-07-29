/** 455
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)

    let count = 0;
    let child = 0;
    for (let cookie = 0; cookie < s.length; cookie++) {
        if (s[cookie] >= g[child]) {
            count++;
            child++;
        }
        if (child == g.length) break;//exit if child arr finished
    }
    return count;
};