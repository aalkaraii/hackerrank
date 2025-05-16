function hurdleRace(k, height) {
    // Write your code here
    let max=0;
    for(let i=0;i<height.length;i++){
        if(height[i]>max){
            max=height[i];
        }
    }
    if(k>=max){
        return 0;
    }else{
 let potion=max-k;
    return potion;
    }
   

}
let height=[1,2,3,3,2]
let k=7;
console.log(hurdleRace( k,height));