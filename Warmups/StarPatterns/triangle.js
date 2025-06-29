let n = 10;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += "* ";
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += i + 1;
  }
  // console.log(row);
}
for (let i = n; i > 0; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    if (j >= n - (i + 1)) row += "*";
    else row += " ";
  }
  //console.log(row);
}

 let flip = 1;
for (let i = 0; i < n; i++) {
  let row = "";
 
  for (let j = 0; j < i + 1; j++) {
    row+=flip;
    if(flip == 1) flip = 0;
    else flip =1;
  }
  console.log(row);
}
