//136

//XOR or Bitwise XOR  => a xor a = 0, 
//0 xor a = a;
var singleNumber = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};
