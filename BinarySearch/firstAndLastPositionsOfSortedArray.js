/** 34
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let result = [-1, -1];

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] === target) {
      result[0] = m;
      let leftMid = m;
      while (nums[leftMid] === target) {
        if (nums[leftMid - 1] === target) {
          result[0] = leftMid - 1;
          leftMid -= 1;
        } else {
          break;
        }
      }
      //result[0] =m;
      let rightMid = m;

      while (nums[rightMid] === target) {
        if (nums[rightMid + 1] === target) {
          result[1] = rightMid + 1;
          rightMid += 1;
        } else {
          break;
        }
      }
    }

    if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  let actualResult = [-1, -1];
  if (result.length) {
    actualResult[0] = result?.[0];
    actualResult[1] = result?.[result.length - 1];
  }
  return actualResult;
};

//above code also worked - passes all test case O(log n)
var searchRange2 = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  let result = [-1, -1];
  //find starting position of taget
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  if (nums[r] === target) {
    result[0] = r;
  } else {
    //if starting point not found, means element is not there in list, so we can directly return result
    return result;
  }
  console.log(result);

  //find the last position of target

  l = 0;
  r = nums.length - 1;

  while (l < r) {
    let m = l + Math.ceil((r - l) / 2); //ceil because it goes to infinite loop when [3,3]

    if (nums[m] <= target) {
      l = m;
    } else {
      r = m - 1;
    }
  }
  result[1] = r;

  return result;
};

//Approach-3, combine approach 1 and 2
var searchRange3 = function (nums, target) {
  let l = 0;
  r = nums.length - 1;
  let res = [-1, -1];
  //find element's first position
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] === target) {
      res[0] = m;
      r = m - 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  if (res[0] === -1) return res; //Early exit if target not found

  //find element's last position
  l = 0;
  r = nums.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] === target) {
      res[1] = m;
      l = m + 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return res;
};

// ((nums = [1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 5])),
// target = 5;

console.log(searchRange2(nums, target));
