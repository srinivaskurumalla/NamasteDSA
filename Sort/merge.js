var sortArray = function (nums) {
  //divide array
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = sortArray(nums.slice(0, mid));
  let right = sortArray(nums.slice(mid));

  return merge(left, right);
};

function merge(left, right) {
  const fruits = ["Banana", "Apple", "Mango", "Cherry"];
  fruits.sort();
  console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Mango"]

  let resultArr = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      resultArr.push(left[i]);
      i++;
    } else {
      resultArr.push(right[j]);
      j++;
    }
  }

  //if any array got out of index, copy other elements

  return [...resultArr, ...left.slice(i), ...right.slice(j)];
}

console.log(sortArray([4, 8, 7, 2]));
