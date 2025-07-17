/** 137
 
 * @param {number[]} nums - The input array of numbers.
 * @return {number} - The single number that appears only once.
 */

//oops it's using O(n) space to store in map
var singleNumber = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else map[nums[i]] = 1;
  }

  for (let k of Object.keys(map)) {
    if (map[k] === 1) {
      return Number(k);
    }
  }
};

var singleNumber = function (nums) {
  // Initialize 'result' to 0. This variable will accumulate the bits
  // of the unique number, reconstructed from right to left (LSB to MSB).
  let result = 0;

  // Iterate 32 times, representing the 32 bits of a standard integer.
  // JavaScript bitwise operations treat numbers as 32-bit signed integers.
  for (let i = 0; i < 32; i++) {
    // 'sum' will store the count of '1's at the current bit position 'i'
    // across all numbers in the 'nums' array.
    let sum = 0;

    // Iterate through each number in the input array.
    for (let num of nums) {
      // Extract the i-th bit of the current number 'num'.
      // 1. `num >> i`: Right-shifts 'num' by 'i' positions. This moves the
      //    bit at position 'i' to the least significant (0-th) position.
      // 2. `& 1`: Performs a bitwise AND with 1. This isolates the 0-th bit,
      //    effectively giving us 0 if the original i-th bit was 0, or 1 if it was 1.
      // Add this extracted bit value to 'sum'.
      sum += (num >> i) & 1;
    }

    // Check the count of '1's at the current bit position.
    // If 'sum' is not a multiple of 3, it means the unique number
    // has a '1' at this bit position. (Because all other numbers appear 3 times,
    // their contributions to 'sum' for any given bit position would be 0 or a multiple of 3).
    if (sum % 3 !== 0) {
      // Reconstruct the unique number.
      // 1. `1 << i`: Creates a number with only the i-th bit set (e.g., 1, 2, 4, 8, ...).
      // 2. `result |= ...`: Performs a bitwise OR operation. This sets the i-th bit
      //    in our 'result' variable, without affecting other bits already set.
      result |= 1 << i;
    }
  }

  // JavaScript's bitwise operations inherently handle numbers as 32-bit signed integers.
  // When 'result' is constructed bit by bit, if its 32-bit representation corresponds
  // to a negative number (i.e., the 31st bit is set), JavaScript's Number type will
  // automatically interpret and store it as the correct negative value.
  // Therefore, no additional handling for negative numbers is required here.

  // Return the unique number.
  return result;
};
