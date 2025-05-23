function migratoryBirds(arr) {
    let count={}
    let max=0;
    let val=0;
for(let i=0;i<arr.length;i++){
   if(!count[arr[i]]) {
    count[arr[i]]=0;
   }
    count[arr[i]]++;
}

let array=Object.keys(count);
let value=Object.values(count);
for(let i=0;i<array.length;i++){
if(max<value[i]){
    max=value[i];
    val=array[i];
}
}
return val;
}
let arr=[1,1,2,2,3,1,12,12,12,12]
console.log(migratoryBirds(arr));