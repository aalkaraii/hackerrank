function charcount(string) {
  let count = { a: 1 };
  console.log(count["a"]);
  for (let i = 0; i < string.length; i++) {
    if (!count[string[i]]) {
      count[string[i]] = 0;
    }
    count[string[i]]++;
  }
  return count;
}
let string = "aaabbcccass";
console.log(charcount(string));
