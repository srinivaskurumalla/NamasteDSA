let n = 5;
//Right - angled start triangle
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += "* ";
  }
  //console.log(row);
}
//Right angled number triangle
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += j + 1;
  }
  //console.log(row);
}
//Print a Right-Angled Triangle of Repeated Numbers
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += i + 1;
  }
  //console.log(row);
}

//Print a Reverse Right-Angled Triangle of Increasing Numbers
for (let i = n; i > 0; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  // console.log(row);
}

//Print a Right-Aligned Right Triangle of Stars
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    if (j >= n - (i + 1)) row += "*";
    else row += " ";
  }
  //console.log(row);
}

//Print a Right-Angled Triangle of Alternating 1s and 0s
let flip = 1;
for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < i + 1; j++) {
    row += flip;
    if (flip == 1) flip = 0;
    else flip = 1;
  }
  flip = 1;
  //console.log(row);
}

//Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)

let flipG = 1;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += flipG;
    if (flipG == 1) flipG = 0;
    else flipG = 1;
  }
  console.log(row);
}
