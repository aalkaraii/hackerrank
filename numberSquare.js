// 19 = 1 ^ 2 + 9 ^2 = 82
// 82 = 8 ^ 2 + 2 ^ 2 = 68
// 6 ^ 2 + 8 ^ 2 = 100
// 1 ^ 2  + 0 ^ 2 + 0 ^ 2 = 1

function square(n) {
  while (n >= 10) {
    let output = 0;
    while (n != 0) {
      divisor = n % 10;
      n = Math.floor(n / 10);
      output = output + divisor ** 2;
    }
    n = output;
  }
  return n;
}
let number = 8;
console.log(square(number));
