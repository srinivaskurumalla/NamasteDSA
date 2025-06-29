// 26. Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.


//personal notes: Use two pointers
//one is to track unique places
//second is to check for uniquness 
var removeDuplicates = function(nums) {
    let up = 1; //unique place is 1, because index 0 will be having unique only
    let isUnique = false;
    for (let i = 1; i < nums.length; i++) {

        //find the unique element
        isUnique = nums[i] != nums[i-1];
        //if unique move it to uniqe place
        if(isUnique){
            nums[up++] = nums[i];
        }
        
    }
    return up;
};

let arr = [0,0,1,1,1,2,2,3,3,4];
let result = removeDuplicates(arr);
console.log(result);
console.log(arr);

