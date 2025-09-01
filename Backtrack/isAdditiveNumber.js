/** 306
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  const n = num.length;
  const backtrack = (start, first, second, count) => {
    // If we've used the whole string and have at least 3 numbers → valid
    if (start === n) return count >= 3;

    // Expected next number = first + second
    const sum = (BigInt(first) + BigInt(second)).toString();

    // If the remaining string doesn't start with sum → invalid
    if (!num.startsWith(sum, start)) return false;

    // Recurse further
    return backtrack(start + sum.length, second, sum, count + 1);
  };

  // Try all splits for the first and second numbers
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const first = num.slice(0, i);
      const second = num.slice(i, j);

      // Skip numbers with leading zeros
      if (
        (first.length > 1 && first[0] == "0") ||
        (second.length > 1 && second[0] == "0")
      )
        continue;

      if (backtrack(j, first, second, 2)) return true;
    }
  }
  return false;
};
