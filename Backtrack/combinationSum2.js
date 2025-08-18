/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (arr, target) {
    let res = [];
    arr = arr.sort((a, b) => a - b);
    let backtrack = (remainingSum, path, start) => {
        if (remainingSum == 0) {
            res.push([...path]);
            return;
        }
        //if (remainingSum <= 0) return;
        for (let i = start; i < arr.length && arr[i] <= remainingSum; i++) {
            if (i > start && arr[i - 1] == arr[i]) {
                continue;
            }
            else {
                path.push(arr[i]);
                backtrack(remainingSum - arr[i], path, i + 1);
                path.pop();
            }
        }
    }
    backtrack(target, [], 0);
    return res;
};