/** 42
 * @param {number[]} height
 * @return {number}
 */

//323 test case was passed when I ran, but time limit exceeds when I submit
var trap = function (height) {
  let leftArray = [];
  let rightArray = [];

  let maxLeft = height[0];
  let maxRight = -1;

  let totalWater = 0;

  for (let i = 1; i < height.length - 1; i++) {
    //Find max left elements/bars

    if (height[i - 1] > maxLeft) {
      maxLeft = height[i - 1];
    }
    leftArray.push(maxLeft);

    //Find max right elements/bars
    if (height[i + 1] > maxRight || height[i] === maxRight) {
      maxRight = -1;
      for (let j = i + 1; j < height.length; j++) {
        maxRight = Math.max(maxRight, height[j]);
      }
    }
    rightArray.push(maxRight);

    //Find min element/bar from both arrays and  - bar height

    let water = Math.min(leftArray[i - 1], rightArray[i - 1]) - height[i];
    if (water > 0) {
      totalWater += water;
    }
  }

  return totalWater;
};


//T = O(n), S = O(n)
var trap2 = function (height) {
  let leftArray = [];
  let rightArray = [];

  let maxLeft = height[0];
  let maxRight = -1;

  let totalWater = 0;

  let j = height.length - 1;

  for (let i = 0; i < height.length; i++) {
    //Find max left elements/bars

    if (i > 0 && height[i - 1] > maxLeft) {
      maxLeft = height[i - 1];
    }
    leftArray.push(maxLeft);

    //Find max right elements/bars

    if (j >= 0 && height[j] > maxRight) {
      maxRight = height[j];
    }
    j = j - 1;
    rightArray.push(maxRight);
  }
  console.log(leftArray);
  console.log(rightArray);
  console.log(height);
  j = height.length - 1;

  //Find min element/bar from both arrays and  - bar height
  for (let i = 0; i < height.length; i++) {
    let water = Math.min(leftArray[i], rightArray[j - i]) - height[i];
    if (water > 0) {
      totalWater += water;
    }
  }
  return totalWater;
};

//above code is good
var trap3 = function (height) {

    //Find Max left elements
    let maxL = [];
    maxL[0] = height[0];

    for (let i = 1; i < height.length; i++) {
        maxL[i] = Math.max(maxL[i - 1], height[i]);
    }

    //Find max Right elements
    let h = height.length;
    let maxR = [];
    maxR[h - 1] = height[h - 1];

    for (let i = h - 2; i >= 0; i--) {
        maxR[i] = Math.max(maxR[i + 1], height[i]);
    }

    //Find min of maxL and maxR and get water stored at that bar
    let totalWater = 0;
    for (let i = 0; i < h; i++) {
        let waterTrapped = Math.min(maxL[i], maxR[i]) - height[i];
        totalWater += waterTrapped > 0 ? waterTrapped : 0;
    }

    return totalWater;
};
let h = [6, 4, 2, 8, 0, 2, 4, 11, 6, 0, 2];
console.log(trap2(h));
