function angryProfessor(k, a) {
    // Write your code here
    let count=0;
for(let i=0;i<a.length;i++){
    if(a<=0){
count ++;
    }
}
if(count>=k){
    return "NO";
}else{
    return "YES";
}

}
let n=5;
let k=3;
let a=[-2,-1,0,1,2]
console.log(angryProfessor(k,a));