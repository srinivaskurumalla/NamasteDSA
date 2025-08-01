//large element go to last in each cycle
var sort = function (arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      //so decrease the search space after from last each cycle => n-1-i
      if (arr[j] > arr[j + 1]) {
        //swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
};

console.log(sort([1, 2, 3, 4]));
