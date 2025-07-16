/**540
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNonDuplicate = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    //if curr == next or pair exist on right
    if (m < nums.length - 1 && nums[m] === nums[m + 1]) {
      //and if right part length is even- means right part has perfect pairs,
      if ((r - m + 1) % 2 === 0) {
        r = m - 1; //so look into left part of array
      } else {
        //if it is odd, then look into right part of array, exclude curr and next
        l = m + 2;
      }
    }
    //if prev == curr or pair exist on left
    else if (m > 0 && nums[m - 1] === nums[m]) {
      //if left part has even length - mean left part has perfect pairs
      if ((m - l + 1) % 2 === 0) {
        //so look into right part of array, exclude curr
        l = m + 1;
      } else {
        //if it odd,look into left part excluding prev
        r = m - 2;
      }
    }
    //not found pair - mean m is single element
    else return nums[m];
  }
  return nums[r];
};

//above code worked perfectly
//below code also similar logic
var singleNonDuplicate = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (m % 2 == 1) m--; //because first number in pair will always be at even position, so make sure m is even
    if (nums[m] === nums[m + 1]) {
      l = m + 2;  //found pair, so go to right side by exlclding pair
    } else {
      r = m;
    }
  }
  return nums[r];
};
//  Why It Works
// The algorithm relies on this key observation in a sorted array where every element appears twice except one:

// Before the single element, pairs start at even indices
// e.g. [0,0,1,1,2,...]

// After the single element, the pattern breaks → pairs start at odd indices
// e.g. [...,3,3,4,4]

// By forcing m to be even and comparing nums[m] == nums[m+1], we can decide:

// If it's a proper pair → go right

// If not → unique is at or before m

//************Same as first approach but in a readble format********** */
//Intution is find middle
//0. find it's pair - is it on left side or right side

//1. Then find left side elements length (excluding the middle pair)
//which side it is odd, our ans lies that side, so move pointers accrdingly
var singleNonDuplicate = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    //if pair is left side
    if (nums[m - 1] === nums[m]) {
      leftCount = m - 1 - l; //(count excluding middle pair)
      if (leftCount % 2 === 1) {
        r = m - 2;
      } else {
        l = m + 1;
      }
    }

    //if pair on right side
    else if (nums[m] === nums[m + 1]) {
      leftCount = m - l;
      if (leftCount % 2 === 1) {
        r = m - 1;
      } else {
        l = m + 2;
      }
    }
    //if we don't find a pair, then middle is single element
    else {
      return nums[m];
    }
  }
};
nums = [1, 1, 2, 2, 3, 3, 4, 5, 5, 8, 8, 9, 9];
console.log(singleNonDuplicate(nums));
