// 1
// 2 3
// 4 5 6
// 7 8 9 10
function pattern(number) {
  for (let i = 1; i <= number; i++) {
    let arr = [];
    for (let j = 1; j <= i; j++) {
      arr.push(j + i - 1);
    }
    console.log(arr);
  }
}
number = 4;
console.log(pattern(number));
