function formingMagicSquare(s) {
    // Write your code here
    let output=[];
    let count =0;
    let min=0;
    let max=0;
 let matrix = [
  [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
  ],
  [
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4]
  ],
  [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
  ],
  [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6]
  ],
  [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6]
  ],
  [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8]
  ],
  [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4]
  ],
  [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2]
  ]
];
 matrix.map(( item)=>
        {
for(let i=0;i<s.length;i++){
    for(let j=0;j<s[i].length;j++){
       
if(s[i][j]!=item[i][j]){
    count =count + Math.abs(s[i][j]-item[i][j]);  
    if(s[i]===s[i]){
output.push(count);
    }
}
        }

}
for(let k=0;k<output.length;k++){
    if(output[k]<min){
        min=min+output[k]
    }
};

if(max<min){
    min=max;
}
        }
 )

 return min;
}

let s=[
    [5,3,4],
    [1,5,8],
    [6,4,2]];
console.log(formingMagicSquare(s));