function reverse(x) {
  let xCopy = x;
  x = Math.abs(x);
  let reverse = 0;
  while (x > 0) {
    let rem = x % 10;
    reverse = 10 * reverse + rem;
    x = Math.floor(x / 10);
  }

  if (reverse > Math.pow(2, 31) || reverse < Math.pow(-2, 31) - 1) {
    return 0;
  }
  return xCopy < 0 ? -reverse:reverse
 
}
