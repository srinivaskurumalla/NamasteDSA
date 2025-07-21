/** 349
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//O(m*n)
var intersection = function (nums1, nums2) {
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      //includes take O(n) operations
      ans.push(nums1[i]);
    }
  }

  return [...new Set(ans)];
};

//so this is O(m+n)
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let ans = [];
  for (let num of set1) {
    if (set2.has(num)) {
      ans.push(num);
    }
  }

  return ans;
};
