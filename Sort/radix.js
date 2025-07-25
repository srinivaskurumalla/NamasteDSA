//Radix Sort
//Perform count sort for length of max element times, on place value each time
//one's place, ten's place and hundred's place and so on.

var radix = function (arr) {
  let place = 1;

  // Step 1: Find the max number to know the number of digits
  let maxLength = Math.max(...arr).toString().length;

  // Step 2: Perform count sort for each digit place (1s, 10s, 100s, ...)
  for (let i = 0; i < maxLength; i++) {
    countSort(arr, place);
    place *= 10;
  }

  return arr;
};

var countSort = function (arr, place) {
  let sortedArr = new Array(arr.length).fill(0);
  let countArr = Array(10).fill(0); // Only digits 0–9

  // Step 1: Count frequency of digits at current place
  for (let i = 0; i < arr.length; i++) {
    let digit = Math.floor((arr[i] / place) % 10);
    ++countArr[digit];
  }

  // Step 2: Compute prefix sums to get actual positions
  for (let i = 1; i < 10; i++) {
    countArr[i] += countArr[i - 1];
  }

  // Step 3: Build sorted array from right to left (for stability)
  for (let i = arr.length - 1; i >= 0; i--) {
    let digit = Math.floor((arr[i] / place) % 10);
    let idx = --countArr[digit];
    sortedArr[idx] = arr[i];
  }

  // Step 4: Copy back to original array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = sortedArr[i];
  }
};


let arr = [432, 8, 530, 90, 88, 231, 11, 45, 677, 199];
console.log(radix(arr));
