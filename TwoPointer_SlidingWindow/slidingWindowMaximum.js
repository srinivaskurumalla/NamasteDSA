/**239 hard
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let i = 0;
  let j = k;
  let ans = [];

  while (j <= nums.length) {
    currWindow = nums.slice(i, j).sort((a, b) => a - b);
    ans.push(currWindow[currWindow.length - 1]);
    j++;
    i++;
  }
  return ans;
};

//above code got TLE

var maxSlidingWindow = function (nums, k) {
  let res = [];
  let dq = [];
  let i = 0;
  //let j = k;
  for (let j = k; j <= nums.length; j++) {
    for (m = i; m < j; m++) {
      while (dq.length && nums[m] > dq[dq.length - 1]) {
        dq.pop();
      }
      dq.push(nums[m]);
    }
    res.push(dq[0]);
    if (i > 0 && dq[0] == nums[i - 1]) {
      dq.shift();
    }
    i++;
  }
  return res;
};

//above also got TLE

//It is called Monotonic Decreasing Deque
//below is also same logic
//but different way

var maxSlidingWindow = function (nums, k) {
    let res = [];
    let dq = [];
    let i = j = 0;
    while (j < nums.length) {
        //push curr element to dq, but before that pop the elements that are smaller than curr element
        while (dq.length && nums[j] > dq[dq.length - 1]) {
            dq.pop();
        }
        dq.push(nums[j]);

        //after reach the window size take the first element to res
        if (j >= k - 1) {
            res.push(dq[0]);
            //move the window to right
            //before moving if first element of curr window nums[i] is equal to first element in dq dq[0]
            //remove it
            if (nums[i] == dq[0]) {
                dq.shift();
            }
            i++
        }
        j++;
    }
    return res;
};
(nums = [1, 3, -1, -3, 5, 3, 6, 7]), (k = 3);
console.log(maxSlidingWindow(nums, k));
