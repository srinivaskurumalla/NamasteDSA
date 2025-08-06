let arr = [1, 4, 10, 5, 12, 45, 67, -4, 3, 4, 3, 7, 9, 2];

function heapSort() {
  let n = arr.length;

  //create a max heap
  let noOfParents = Math.floor(n / 2);

  for (let i = noOfParents - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }

  //sort the heap

  for (let i = n - 1; i > 0; i--) {
    //i>=0 will also work but no need when i=0 because when all other nodes are sorted remaining 1 element is also sorted
    //swap first and last
    [arr[0], arr[i]] = [arr[i], arr[0]];

    //call heapify down for 0th element/node by reducing size by 1
    heapifyDown(arr, 0, i);
  }
  console.log(arr);
}

function heapifyDown(arr, i, n) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    //swap
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    heapifyDown(arr, largest, n);
  }
}

heapSort();
