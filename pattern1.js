// 1
// 1 2
// 1 2 3
// 1 2 3 4
function pattern(number) {
  for (let i = 1; i <= number; i++) {
    let arr = [];

    for (j = 1; j <= i; j++) {
      arr.push(j);
    }
    console.log(arr);
  }
}
number = 4;
console.log(pattern(number));
