/** 168
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  //Create arr with alphabets
  //   let columnArr = Array.from({ length: 26 }, (_, i) =>
  //     String.fromCharCode(65 + i)
  //   );
  //   console.log(columnArr);
  let result = "";

  while (columnNumber > 0) {
    columnNumber--;
    let rem = columnNumber % 26;
    result = String.fromCharCode(rem + 65) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
};

//Without creating external arr, directly get it with ASCII
var convertToTitle = function (columnNumber) {
  let result = "";

  while (columnNumber > 0) {
    columnNumber--; //make it 0 based index, becuase our arr is..
    let rem = columnNumber % 26;
    result = String.fromCharCode(rem + 65) + result; //adding new char left side
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
};

console.log(convertToTitle(701));
