//write a function that returns the number of negative numbers in an array
let arr = [0];

function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

//let result = countNegatives(arr);
//console.log(result);

//write a function that returns a largest number in an array

function largestNumber(arr) {
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
// let largest = largestNumber(arr);
// console.log(largest);

//find the second largest

function secondLargest(arr) {

    if(arr.length < 2) return null
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let result = secondLargest(arr);
console.log(result);
