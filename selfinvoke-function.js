function normalfun(){
    console.log("Executed whenever I called")
}
normalfun()
normalfun()
normalfun();


//IIFE -immediately invoked function expression
(function(){
    console.log("Self Invoked Function new")
})

(function iifepatten(Username,age){
    console.log("Self Invoked Function",Username+age);    
})("vikram",45)
iifepatten()

