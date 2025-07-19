//Smaller element will comes to first in each cycle, find minIndex and swap
var sort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) { //so decrease the search space by each time from front => j=i+1
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    //swap minIndex with i index
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};



console.log(sort([4, 5, 2, 1, 0, 1, 4]));
