function checkPrimeNumbers(num) {
  let divisor = [];
  if (num < 2) {
    return false;
  }
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      divisor.push(i);
    }
  }

  if (divisor.length === 2) {
    return true;
  } else {
    return false;
  }
}
num = 10;
let prime = [];
for (i = 0; i <= num; i++) {
  if (checkPrimeNumbers(i)) {
    prime.push(i);
  }
}
console.log(prime);
