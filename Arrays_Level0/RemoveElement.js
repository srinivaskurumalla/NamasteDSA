/** 27
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let x = 0;
    for(let i=0;i<nums.length;i++){
        if(val != nums[i]){
            nums[x++] = nums[i];

        }
    }
    return x;
};