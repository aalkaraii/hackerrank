function count(num){
let cou=0;
while(num%10===0){
    cou++;
    num=Math.floor(num/10);
}
return cou;
}
let num=50000;
console.log(count(num));