// N = 153
// 1^3 + 5 ^3 + 3^3 = 153
function cube(number) {
  let n = number;
  let output = 0;
  while (n != 0) {
    let d = n % 10;
    n = Math.floor(n / 10);
    output = output + d * d * d;
  }
  if (output === number) {
    return "cube";
  } else {
    return "not cube";
  }
}
let number = 152;
console.log(cube(number));
