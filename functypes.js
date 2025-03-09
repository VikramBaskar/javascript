// function add(Uname){
//     console.log('Named Function '+Uname)
// }
// add("This is a function")
// //Ananomous function

// let anafun = function(a,b){
//     console.log("Ananomous Function "+(a*b))
// }
// anafun(12,12)
// //Arrow Function
// let fatarrow =(a,b) =>
//    console.log("Arrow function "+(a+b) ) 

// fatarrow(23,34)

// let newfun = name1 => console.log(name1)
// newfun('vikram')

// let firstname ="Britan"

// let returnfun = (fname) => fname
// let finalout = returnfun(firstname)
// console.log(finalout)
 
// let newfun1 = name2 => console.log(name2)
// newfun1('ferrina')

//Higher order function

function function1(){
    console.log("Im a higher order function");
    
}

function function2(){
    console.log("Im a call back function")
}
function1(function2())

function add(callback,a,b){
    console.log(a+b);
    callback(12,23)
    
}
function subract(num1,num2){
    console.log(num1+num2);
    
}
add(subract,20,30)