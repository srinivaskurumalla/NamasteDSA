/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let n = columnTitle.length;
  let k = 0;
  let result = 0;
  for (let i = n - 1; i >= 0; i--) {
    let charCode = columnTitle[i].charCodeAt() - 64;
    
    result += charCode * Math.pow(26, k);

    k++;
  }
  return result;
};

console.log(titleToNumber("DKJ"));
