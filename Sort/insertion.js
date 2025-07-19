//Imagine 1 element is sorted others are not sorted
var search = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let prev = i - 1;

    while (arr[prev] > current && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = current;
  }

  return arr;
};

console.log(search([4, 2, 1, 5, 8, 0]));
