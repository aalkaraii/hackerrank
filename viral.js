
function viralAdvertising(n) {
    // Write your code here
    let like=0;
    let share=0;
    let recipients=0;


    for(i=1;i<=n;i++){
         recipients=(n+share);

 like=like + (Math.floor(recipients/2));

 share =(recipients*like);

    }
    return like;
}
let n=5;
console.log(viralAdvertising(n));