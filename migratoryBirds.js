function migratoryBirds(arr) {
    // Write your code here
const count ={};
for (let i=0;i<arr.length;i++){
    if(!count[arr[i]]){
        count[arr[i]]=0;
    }
    count[arr[i]]++;
}

let currentNumber=0;
let max=0;
const array=(Object.entries(count));
for(let i=0;i<array.length;i++){
   if(array[i][1]>max){
    max=array[i][1];
    currentNumber=array[i][0];
   }
}
return currentNumber;
}


let arr=[1,1,2,2,3,4,4,4]

console.log(migratoryBirds(arr))