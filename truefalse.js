function trueOrFalse() {
  // true
  // false
  // +ve t
  // -ve t
  // 0 f
  // string t
  // ''f
  // 'aesuthaoesunthaoe't
  // []t
  // ['abc']t
  // [0] t
  // {} t
  // {a: 1}  t
  // null
  // undefined
  // NaN
  const x = "";

  if (x) {
    console.log(true);
  } else {
    console.log(false);
  }
}

trueOrFalse();
