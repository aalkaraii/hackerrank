function pickingNumbers(a) {
    // Write your code here
    
    for(let i=0;i<a.length;i++){
        let count =1;
for(let j=i+1;j<a.length ;j++){
    if(a[i]-a[j] <= 1 && a[i]-a[j] >=0){
        count++
    }

}
if(count> max){
    max=count;
}
    }
   

}
let a=[1,2,2,3,1,2]
console.log(pickingNumbers(a))