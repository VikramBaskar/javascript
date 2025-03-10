//closure
function outerfunction(){
    let outervariable = "Im from outer scope"
    function innerfunction(){
        console.log(outervariable);
    }
    return innerfunction()
}
outerfunction()