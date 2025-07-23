/** 179
 * @param {number[]} nums
 * @return {string}
 */

//[3,30,34,5,9]
//Idea is convert each number to string
//Sort the numbers so that for any two strings a and b, a + b > b + a means a should come before b.
//30 and 3 => 30+3 = 303 and 3+30 = 330 therefore 330 is greater so 3 shuld come before 30

var largestNumber = function (nums) {
  //convert to string
  let strNums = nums.map(String); //equal to nums.map(n => String(n))
  //sort based on custom logic
  strNums.sort((a, b) => (b + a).localeCompare(a + b));

  // Edge case: if the largest number is "0", return "0"
  if (strNums[0] === "0") return "0";

  // Join all strings to form the result
  return strNums.join("");
};

nums = [3, 30, 34, 5, 9];
console.log(largestNumber(nums));
