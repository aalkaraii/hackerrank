function designerPdfViewer(h, word) {
    // Write your code here
    let max=0;
    let area=0;
     let arr=[]; 
for(let i=0;i<word.length ;i++){
 for(let j=0;j<h.length;j++){
    if(((word[i].charCodeAt(0))-97)===j){
        arr.push(h[j]);
    }
 }
if(max<arr[i]){
    max=arr[i]
}else{
    max=max;
}
}
console.log("max:",max)
area=max*word.length;
return area;
}
let word="abc";
let h=[1,3,1,3,1,4,1,3,2,5,5,5,5,1,1,5,5,1,5,2,5,5,5,5,5,5];
console.log(designerPdfViewer(h,word));