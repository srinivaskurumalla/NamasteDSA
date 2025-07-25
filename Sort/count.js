//Count sort - NOT COMPARISON SORT

var countSort = function (arr) {
  // Create a count array to store the frequency of each digit (0-9)
  let k = Math.max(...arr); //if k is 1000 and arr.length is 100, remaining 900 space is waste, so works good for 0-9
  let countArr = Array(k+1).fill(0); // Only supports digits 0-9

  // Step 1: Count frequency of each element in arr
  for (let i = 0; i < arr.length; i++) {
    ++countArr[arr[i]];
  }
  console.log("Frequency count:", countArr);

  // Step 2: Modify countArr to store prefix sums (cumulative counts)
  // This helps determine the final position of each element
  for (let i = 1; i < 10; i++) {
    countArr[i] += countArr[i - 1];
  }
  console.log("Prefix sum (cumulative counts):", countArr);

  // Step 3: Build the sorted array using the count array
  let sortedArr = new Array(arr.length).fill(0);
  // Iterate in reverse to maintain **stability** of sorting
  for (let i = arr.length - 1; i >= 0; i--) {
    let value = arr[i];
    let idx = --countArr[value]; // decrement and fetch correct index
    sortedArr[idx] = value;
  }

  return sortedArr;
};

let arr = [2, 1, 1, 0, 2, 5, 4, 0, 2, 8, 7, 7, 9, 2, 0, 1, 9];
console.log("Sorted result:", countSort(arr));

// | Limitation                             | Description                                                 |
// | -------------------------------------- | ----------------------------------------------------------- |
// | ❌ **Only works for digits 0–9**        | Your `countArr = Array(10)` restricts input range to 0–9.   |
// | ❌ **Doesn’t support negative numbers** | Count sort in basic form doesn’t handle negatives directly. |
// | ❌ **Large range = waste of space**     | If `arr = [1, 1000]`, it creates an array of size 1001.     |
// | ❌ **Only works for integers**          | Cannot be used for floating-point numbers.                  |
// | 🔒 **Not in-place**                    | Requires O(n + k) space for `countArr` and `sortedArr`.     |
