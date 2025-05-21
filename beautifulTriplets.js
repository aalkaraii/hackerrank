function beautifulTriplets(d, arr) {
    // Write your code here
    let count=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]-arr[i]!=d){
                continue;
            }
            for(let k=j+1;k<arr.length;k++){
                if(i<j&&j<k){
                    if((arr[j]-arr[i] === d)&&(arr[k]-arr[j]===d))
                        count ++;
                }

            }
        }
    }
return count;
}
let d=1;
let arr=[2,2,3,4,5]
console.log(beautifulTriplets(d,arr));