function divisibleSumPairs(n, k, ar) {
    // Write your code here
   let count =0;
   let sum =0;
   for (let i=0;i<n-1;i++){
    for(let j=i+1;j<n;j++){
        sum = ar[i] +ar[j];
     if(sum%3===0){
count++;
     }
    }

   }
   return count;

}
let ar=[1,3,2,6,1,2];
let k=3;

let n=ar.length;
console.log(divisibleSumPairs(n,k,ar));