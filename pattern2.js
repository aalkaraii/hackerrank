//12345
//1234
//123
//12
//1
function pattern2(number) {
  for (let i = 1; i <= number; i++) {
    let arr = [];
    for (let j = 1; j <= number - i + 1; j++) {
      arr.push(j);
    }
    console.log(arr);
  }
}
number = 5;
console.log(pattern2(number));
