//Find All Divisors of a Number
function divisor(n){
  let divisor =[];
  
for(let i=1;i<=n;i++){
if(n%i===0){
    divisor.push(i);
}
}
return divisor;
}
let n=7
console.log(divisor(n));