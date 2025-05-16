function catAndMouse(x, y, z) {
    let total=0;
    let cata=Math.abs(x-z);
    let catb=Math.abs(y-z);
if(cata<catb){
return "Cat A" ;
}else if(cata===catb){
   return "Mouse C";
}else{
   return "Cat B" ;
}

}
let x=2;//cat a
let y=5;//cat b
let z=4;// mouse
console.log(catAndMouse(x,y,z));