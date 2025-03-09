//variable decleration hoisting
var a =10;
console.log(a);


let b =20;
console.log(b);
console.log(b);

const c = 12

console.log(c);

//function declaration

sample()
function sample(){
    console.log("IM in")
}

// sample1()
// var sample1 = function(){
//     console.log("AM I Accessible");
    
// }//type error


let sample1 = function(){
    console.log("AM I Accessible");
    
}//reference error

sample1()