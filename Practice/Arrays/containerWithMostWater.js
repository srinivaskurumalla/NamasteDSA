/** 11
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  let n = height.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let small = Math.min(height[i], height[j]);
      let distance = j - i;
      let area = small * distance;

      maxArea = Math.max(area, maxArea);
    }
  }
  return maxArea;
};
//above code gave time limit exceeded
//because its a brute force- checking all combinations of areas

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    let minValue = Math.min(height[left], height[right]);
    let distance = right - left;
    maxArea = Math.max(maxArea, minValue * distance);

    if (height[left] == minValue) {
      left++;
    } else right--;
  }
  return maxArea;
};
maxArea(height);
