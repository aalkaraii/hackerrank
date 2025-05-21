function kaprekarNumbers(p, q) {
    let result = [];

    for (let i = p; i <= q; i++) {
        let square = (i * i).toString();
        let d = i.toString().length;

        let right = parseInt(square.slice(-d)) || 0;
        let left = parseInt(square.slice(0, square.length - d)) || 0;

        if (left + right === i) {
            result.push(i);
        }
    }

    if (result.length === 0) {
        console.log("INVALID RANGE");
    } else {
        console.log(result.join(" "));
    }
}

let p=1;
let q=100;

console.log(kaprekarNumbers(p,q));