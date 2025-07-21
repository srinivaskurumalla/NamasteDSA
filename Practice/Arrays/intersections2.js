/** 350
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//worked but indexOf and includes take O(n) each, very costly operations
var intersect = function (nums1, nums2) {
  let ans = [];

  for (let num of nums1) {
    if (nums2.includes(num)) {
      ans.push(num);

      //remove element from both arrays
      let idx1 = nums1.indexOf(num);
      let idx2 = nums2.indexOf(num);
      nums1[idx1] = -1;
      nums2[idx2] = -1;
    }
  }

  return ans;
};

//lets use map
var intersect = function (nums1, nums2) {
  let map = {};
  let ans = [];
  for (let num of nums1) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let num of nums2) {
    if (map[num] > 0) {
      ans.push(num);
      --map[num];
    }
  }
  return ans;
};
let n1 = [1, 2, 2, 1];
let n2 = [2, 2];

console.log(intersect(n1, n2));
