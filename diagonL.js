function diagonalDifference(arr){
let left=0;
let right=0;
for(let i=0;i<arr.length;i++){
    left=arr[i][i];
    right=arr[i][arr.length-(i+1)]
}
return Math.abs(left-right);
}
let arr=[
    [1,2,12],
    [20,22,34],
    [46,7,8]
];
console.log(diagonalDifference(arr));