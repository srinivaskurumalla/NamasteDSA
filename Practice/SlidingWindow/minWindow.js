/** 76
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (s.length < t.length) return "";

    const tMap = {};
    for (let char of t) {
        tMap[char] = (tMap[char] || 0) + 1;
    }

    let windowMap = {};
    let have = 0;
    let need = Object.keys(tMap).length;

    let res = [-1, -1];
    let resLen = Infinity;

    let left = 0;
    for (let right = 0; right < s.length; right++) {
        let ch = s[right];
        windowMap[ch] = (windowMap[ch] || 0) + 1;

        if (tMap[ch] && tMap[ch] == windowMap[ch]) {
            have++;
        }

        while (have == need) {
            //update result if smaller window found
            if (right - left + 1 < resLen) {
                res = [left, right];
                resLen = right - left + 1;
            }

            //shrink from left
            windowMap[s[left]]--;
            if (tMap[s[left]] && windowMap[s[left]] < tMap[s[left]]) {
                have--;
            }
            left++;
        }
    }

    let [start, end] = res;
    return resLen == Infinity ? "" : s.substring(start, end + 1);
};

