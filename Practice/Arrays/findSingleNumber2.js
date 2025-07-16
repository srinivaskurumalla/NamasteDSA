/** 137
 * @param {number[]} nums
 * @return {number}
 */

//oops it's using O(n) space to store in map
var singleNumber = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else map[nums[i]] = 1;
  }

  for (let k of Object.keys(map)) {
    if (map[k] === 1) {
      return Number(k);
    }
  }
};

var singleNumber = function (nums) {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        let sum = 0;
        for (let num of nums) {
            sum += (num >> i) & 1; //right shift num by i times and get the i'th position count
        }

        if (sum % 3 !== 0) { //check the count % 3, because every number repeated for 3 times
            result |= (1 << i); //left shift by i times to reconstruc the number
        }
    }

    

    return result;
};

let nums = [1,1,1,2,2,2,3];
console.log(singleNumber2(nums));

