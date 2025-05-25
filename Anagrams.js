// Check if Two Strings are Anagrams
// listen, silent
function Anagrams(string1, string2) {
  let count1 = {};
  let count2 = {};
  for (let i = 0; i < string1.length; i++) {
    if (!count1[string1[i]]) {
      count1[string1[i]] = 1;
    }
    count1[string1[i]]++;
  }
  for (let i = 0; i < string2.length; i++) {
    if (!count2[string2[i]]) {
      count2[string2[i]] = 1;
    }
    count2[string2[i]]++;
  }

  for (let i = 0; i < Object.keys(count1).length; i++) {
    if (Object.keys(count2).includes(Object.keys(count1)[i])) {
      for (let j = 0; j < Object.keys(count2).length; j++) {
        if (Object.values(count2)[j] === Object.values(count1)[i]) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
}
let string1 = "all";
let string2 = "lla";
console.log(Anagrams(string1, string2));
