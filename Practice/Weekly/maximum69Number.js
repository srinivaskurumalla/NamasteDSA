/** 1323
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let numsStr = num.toString().split("");
  // console.log(numsStr);

  for (let i = 0; i < numsStr.length; i++) {
    if (numsStr[i] == 6) {
      numsStr[i] = 9;
      return Number(numsStr.join(""));
    }
  }
  return num;
};

//without converting to string
var maximum69Number = function (num) {
  let numCopy = num;
  let indexToChange = -1;
  let position = 0;

  while (numCopy > 0) {
    let digit = numCopy % 10;
    if (digit == 6) {
      indexToChange = position;
    }

    numCopy = Math.floor(numCopy / 10);
    position += 1;
  }

  //no 6 found
  if (indexToChange === -1) {
    return num;
  }

  //flip the 6 to 9
  return num + 3 * Math.pow(10, indexToChange);
};
let num = 9669;
console.log(maximum69Number(num));
