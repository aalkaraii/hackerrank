function nameofstring(name1,name2){
    let output =0;
if(name1.length=== name2.length ){
output=output+2;
}
if (name1[0]===name2[0] ){
    if(["a","e","i","o","u"].includes(name1[0])){
        output=output+5;
    }else{
        output=output+2;
    }

}
count ={
    l:1,
    o:1,
    v:1,
    e:1,

}
for(let i=0;i<name1.length;i++){
if(["l","o","v","e"].includes(name1[i])){
    output=output+4;
}
}
for(let i=0;i<name2.length;i++){
if(["l","o","v","e"].includes(name2[i])){
    output=output+4;
}
}
return output;
}
let name1="alice";
let name2="alaka";
console.log(nameofstring(name1,name2))
