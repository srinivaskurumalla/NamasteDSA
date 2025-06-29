var moveZeroes = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[x] == 0 && nums[i] !== 0) {
      //swap
      let temp = nums[x];
      nums[x] = nums[i];
      nums[i] = temp;
    }

    //simply increase x, till we find zero;
    if (nums[x] !== 0) {
      x++;
    }
  }
};

let nums = [1, 3, 12, 9];
moveZeroes(nums);
console.log(nums);
