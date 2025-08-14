/** 392
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function (s, t) {
    let l = 0;
    let r = t.length - 1;

    let a = 0;
    let b = s.length - 1;

    while (l <= r && a <= b) {
        if (t[l] === s[a]) {
            a++;
        }
        if (l < r &&t[r] === s[b]) {
            b--;
        }
        l++;
        r--;
    }
    return a > b;
};

var isSubsequence = function (s, t) {
    let j = 0;

    for (let i = 0; i < t.length; i++) {
        if (t[i] == s[j]) {
            j += 1;
        }

    }
    return j == s.length;

}