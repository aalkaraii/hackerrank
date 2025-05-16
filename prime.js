
function isPrime(num){
if(num===0|| num===1){
    return false;
}
for(let i=2;i<num-1;i++){
  if(num%i===0 ){
    return false;
  }
}
return true;

}
function prime(arr){
// for(let i=0;i<arr.length;i++){
//     isPrime(arr[i]);
// }
}
let arr = [4,2,3,6,7];
console.log(prime(arr));

console.log(isPrime(1))