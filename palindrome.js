function palindrome(number) {
  let rem = 0;
  let reverse = 0;
  let num = number;
  while (num != 0) {
    rem = num % 10;
    //last element
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
  }

  if (reverse === number) {
    return true;
  } else {
    return false;
  }
}
number = 1232;
//12321->12321
//1232->2321
console.log(palindrome(number));
