/** 496
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//this problem is also solved by using array (not optimized)
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let map = {}; //key are nums2 elements and values are next greater element
  let result = [];

  let n = nums2.length;

  stack.push(nums2[n - 1]); //push the last element to stack, because that will be the greater as of now
  map[nums2[n - 1]] = -1; //NGE for last element is -1
  for (let i = n - 2; i >= 0; i--) {
    //looping in reverse
    let top = stack[stack.length - 1];
    if (nums2[i] < top) {
      map[nums2[i]] = top; //if element is less than top of stack, top will be NGE
    } else {
      stack.pop();

      while (stack.length > 0) {
        //if element is greater than top of stack,pop it try to find NGE
        if (nums2[i] < stack[stack.length - 1]) {
          map[nums2[i]] = stack[stack.length - 1];
          break;
        } else {
          stack.pop();
        }
      }
      if (stack.length == 0) {
        //if stack got empty, -1 will be NGE
        map[nums2[i]] = -1;
      }
    }
    stack.push(nums2[i]);
  }
  console.log(map);

  for (let i = 0; i < nums1.length; i++) {
    result.push(map[nums1[i]]);
  }
  return result;
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let stack = [];
    let map = {}; //key are nums2 elements and values are next greater element

    let n = nums2.length;
    stack.push(nums2[n - 1]); //push the last element to stack, because that will be the greater as of now
    map[nums2[n - 1]] = -1; //NGE for last element is -1
    for (let i = n - 2; i >= 0; i--) {
        //looping in reverse

        while (stack.length > 0) {
            //if element is greater than top of stack,pop it try to find NGE
            if (nums2[i] < stack[stack.length - 1]) {
                map[nums2[i]] = stack[stack.length - 1];
                break;
            } else {
                stack.pop();
            }
        }
        if (stack.length == 0) {
            //if stack got empty, -1 will be NGE
            map[nums2[i]] = -1;
        }
        stack.push(nums2[i]);
    }




    return nums1.map(x => map[x]);
};
(nums1 = [1, 3, 5, 2, 4]), (nums2 = [6, 5, 4, 3, 2, 1, 7]);
console.log(nextGreaterElement(nums1, nums2));
