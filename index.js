const area = function (r) {
  return Math.PI * r * r;
};

const circumference = function (r) {
  return 2 * Math.PI * r;
};

const diameter = function (r) {
  return 2 * r;
};

const calculate = function (radius, logic) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

let radis = [1, 2, 3, 4];
console.log(calculate(radis, area));
console.log(calculate(radis, circumference));
console.log(calculate(radis, diameter));

availableSkills = {
"Java":1,
"C#":2,
"Python":3,
}

