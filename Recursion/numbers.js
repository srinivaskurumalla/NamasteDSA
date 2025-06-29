//print n to 1
let i = 1;
var print = function (num) {
  if (i > num) return;
  console.log(num - num + i);
  i++;
  print(num);
};

print(10);
