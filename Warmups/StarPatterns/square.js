let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    // j == n-1 ? row+="*" : row+= "* "

    row += "* ";
  }
  console.log(row);
}
