// Perfect Number
// 1 + 2 + 3 = 6
function pre(n) {
  let sum = 0;
  for (i = 1; i < n; i++) {
    if (n % i === 0) {
      sum = sum + i;
    }
  }
  if (n === sum) {
    console.log("perfect numbers");
  } else {
    return false;
  }
}
let n = 8;
console.log(pre(n));
