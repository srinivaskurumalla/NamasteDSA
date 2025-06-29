//write a function that search for an element in array and returns the index, if the element is not present return -1

let arr = [4, 1, 5, 3, 7, 8, 67, 90, 64];

function search(element) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] == element) {
      return i;
    }
    i++;
  }

  return -1;
}

let item = search(99);
console.log(item);

