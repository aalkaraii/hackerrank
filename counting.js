function getMoneySpent(keyboards, drives, b) {
    let max = -1;
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let cost = keyboards[i] + drives[j];
            if (cost <= b && cost > max) {
                max = cost;
            }
        }
    }
    return max;
}

let b=[10,2,3];
let keyboards=[3,1];
let drivers =[5,2,8];
console.log(getMoneySpent(keyboards,drivers,b));
