function reverseNumber(i){
    
   let output=0;
    while(i!=0){
        
       let rem =i%10;
        // array.push(i%10);
        i=Math.floor(i/10);
        output=output*10 +rem;
    }
    return output;
}

function beautifulDays(i,j, k) {
    // Write your code here
    let count=0;
    let result=0;
    for(let a=i;a<=j;a++){
        result=Math.abs(a-reverseNumber(a));
      
       
         if(Number.isInteger((result/k))){
        count++;
    }
   
    }
   
   
return count;
}
let i=13;
let j=45;
let k=3;

console.log(beautifulDays(i,j,k));
