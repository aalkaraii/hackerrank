//Find All Divisors of a Number
function divisor(n){
  let divisor =[];
  
for(let i=1;i<=n;i++){
if(n%i===0){
    divisor.push(i);
}
}
if(divisor.length===2){
  return true;
} else{
return false;
} 
}
let n=4
console.log(divisor(n));