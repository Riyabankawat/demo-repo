// console.log(this);
// console.log(window);

// console.log(firstName);
// var firstName = 'riya';


// code compile 
// code exeute
// compilation phase
// 1.tokenizing /lexing = break the code into small chunks
// 2.parsing = abstract syntex tree
// 3.code generaton
// why to compile ...for early error checking and determining appropriate scopeful variable
// jo code kisi function m nhi hota ...toh uska scope global scope hota hai jese ki firstname in above 
// global execution context 
// 1.creation phase (memory creation phase)
// 2. code execution phase
// javascript is synchronous programiming language , single threaded



// HOISTING
console.log(myFunction);
var myFunction = function(){
    console.log("this is my function");
}
console.log(myFunction());

// let case
// console.log(firstName); uninitialized
let firstName = 'riya';
console.log(firstName); 
// temporal dead zone 
// jabtk koi variable uninitialized rhega 