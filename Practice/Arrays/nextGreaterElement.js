/** 496
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//this problem is also solved by using stack (optimized)
var nextGreaterElement = function (nums1, nums2) {
  let result = [];
  for (let k = 0; k < nums1.length; k++) {
    for (let i = 0; i < nums2.length; i++) {
      if (nums1[k] == nums2[i]) {
        let notFoundNextMax = true;
        for (let j = i + 1; j < nums2.length; j++) {
          if (nums2[j] > nums2[i]) {
            notFoundNextMax = false;
            result.push(nums2[j]);
            break;
          }
        }
        if (notFoundNextMax) {
          result.push(-1);
        }
      }
    }
  }
  return result;
};
nums1 = [2,4], nums2 = [1,2,3,4]
console.log(nextGreaterElement(nums1, nums2));
