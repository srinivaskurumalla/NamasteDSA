//Find the sum of all elements in an Array
// function sum(arr,  end) {
//   if (end == 0) return arr[end];
//   return arr[end] + sum(arr,  end - 1);
// }

//Find the sum of all odd numbers in an Array
function sumOfOdd(n) {
  if (n == -1) return 0;
  //   if (arr[n] % 2 == 1) {
  //     return arr[n] + sumOfOdd(n - 1);
  //   } else {
  //     return sumOfOdd(n - 1);
  //   }

  isOdd = arr[n] % 2 == 1;
  return (isOdd ? arr[n] : 0) + sumOfOdd(n - 1);
}

let arr = [2, 1,3,5,6];
console.log(sumOfOdd(arr.length - 1));
