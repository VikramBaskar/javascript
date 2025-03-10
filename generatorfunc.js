function* generatorfunc(){
    yield "first val"
    yield "second val"
    yield "third val"
    return "final val"

}
let generator =generatorfunc();
console.log(generator.next().value);
console.log("Im yeilding the first yield object");
console.log(generator.next().value);
console.log("Im a second yield object");
console.log(generator.next().value);
console.log("Im a Third yield object");
console.log(generator.next().value)
console.log("This is final val");


function* url(){
    yield "Https:/"
    yield "www.uniquetech.com/"
    yield "homepage"
}
let original =url()

console.log(original.next().value);
console.log(original.next().value);
console.log(original.next().value);
console.log(original.next().value);




