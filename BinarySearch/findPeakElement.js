/** 162
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {

    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (nums[m] > nums[m + 1]) {
            r = m;
        }
        else {
            l = m + 1;
        }
    }
    return r;
};