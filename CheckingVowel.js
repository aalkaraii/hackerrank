function vowel(string) {
  let v = ["a", "e", "i", "o", "u"];
  let countv = 0;
  let countc = 0;
  let word = string.split("");
  console.log("word", word);
  for (let i = 0; i < word.length; i++) {
    if (v.includes(word[i])) {
      countv++;
    } else {
      countc++;
    }
  }
  console.log("vowel", countv);
  console.log("consonant", countc);
}
let string = "aldksjkkiona";
console.log(vowel(string));
