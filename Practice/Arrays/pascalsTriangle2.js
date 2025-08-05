/** 119
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let result = [];

    for (let i = 0; i <= rowIndex; i++) {
        const row = [];
        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                row.push(1)
            }
            else {
                const prev = result[i - 1];
                row.push(prev[j] + prev[j - 1]);
            }
        }
        result.push(row);
    }
    return result[result.length - 1];
};