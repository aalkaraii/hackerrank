function taumBday(b, w, bc, wc, z) {
    // Write your code here

if(bc<wc){
    wc=Math.min(wc,bc+z)
} else if(bc>wc){
     bc=Math.min(bc,wc+z);
}else{
    bc=bc;
    wc=wc;
}
let minCost=b*bc+w*wc;
return minCost;
}
let b=3;
let w=5;
let bc=3;
let wc=4;
let z=1;
console.log(taumBday(b, w, bc, wc, z));