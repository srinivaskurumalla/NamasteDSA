/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let map = {};
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
      k++;
    } else if (map[nums[i]] < 2) {
      map[nums[i]] += 1;
      k++;
    }
  }
  let i = 0;
  for (let key of Object.keys(map)) {
    while (map[key] > 0) {
      nums[i++] = Number(key);
      map[key] -= 1;
    }
  }
  return k;
};
//Notes
// I took Plain JS Object {} as map. It stores key as strings, that's why we are converting to Number while inserting in array.

// The problem is it will store keys in ascending order for non-negative, and other keys like "-1" goes to last. Therefore, it's failing

/**80
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let map = new Map();
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);

      k++;
    } else if (map.get(nums[i]) < 2) {
      map.set(nums[i], 2);
      k++;
    }
  }
  console.log(map);
  let i = 0;
  for (let key of map.keys()) {
    while (map.get(key) > 0) {
      nums[i++] = Number(key);
      map.set(key, map.get(key) - 1);
    }
  }
  console.log(nums);

  return k;
};
//above code with Map - Time= O(n) and space = O(n)


//without using map
//time = O(n) and space = O(1)
var removeDuplicates = function (nums) {
  let index = 0;
  let counter = 1;
  for (let i = 1; i < nums.length; i++) {

    if (nums[i] === nums[i - 1]) {

      counter += 1;
    } else counter = 1;
    if (counter <= 2) {
      nums[index++] = nums[i];
      k++;
    }
  }

  return index++;
};
nums = [1, 1, 1, 2, 2, 3, 4];
console.log(removeDuplicates(nums));
