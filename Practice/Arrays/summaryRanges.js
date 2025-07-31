/** 228
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    let range = nums[i].toString();
    let j = i;
    while (nums[j] + 1 == nums[j + 1]) {
      j++;
    }
    if (j != i) {
      range = range + "->" + nums[j];
    }
    output.push(range);
    i=j;
  }
  return output;

};

 nums = [0,2,3,4,6,8,9]
 console.log(summaryRanges(nums));
 
