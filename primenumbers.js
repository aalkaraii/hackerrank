//Find All Divisors of a Number
function prime(n){
if(n<2){
    return false;
}
for(let i=2;i<=Math.sqrt(n);i++){
if(n%i===0  ){
    
    return false;
}
}

    
    return true;

}
let n=4
console.log(prime(n));