//136
//Brute Force
//Use hash map to store freq and return number with freq 1

var singleNumber = function (nums) {
  let map = {};
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  for(let m of Object.keys(map)){
    if(map[m] == 1) return m;
  }
};
//XOR or Bitwise XOR  => a xor a = 0,
//0 xor a = a;
var singleNumber = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};
