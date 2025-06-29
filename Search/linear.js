function search(nums,n) {
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == n) return i;        
    }
    return -1;
}

nums = [5,3,6,2,7,8,0];
console.log(search(nums,0));
