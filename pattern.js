//1  2  3  4  5
// 2  4  6  8 10
// 3  6  9 12 15
// 4  8 12 16 20
// 5 10 15 20 25
function pattern(number) {
  for (let i = 1; i <= number; i++) {
    let array = [];
    for (j = 1; j <= number; j++) {
      array.push(i * j);
    }
    console.log(array);
  }
}
let number = 5;
console.log(pattern(number));
//1,2,3,4,5
//2,
