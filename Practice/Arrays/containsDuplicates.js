/** 217
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate1 = function (nums) {
  let set = new Set();
  for (let num of nums) {
    set.add(num);
  }

  return set.length !== nums.length;
};
var containsDuplicate = function (nums) {
  let map = {};
  for (let num of nums) {
    if (map[num]) {
      return true;
    } else {
      map[num] = 1;
    }
  }
  console.log(map);
  
  return false;
};
nums =[0,4,5,0,3,6]
console.log(containsDuplicate(nums));
