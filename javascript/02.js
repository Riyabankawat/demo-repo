//functions in javascript
// function declaration
// function sing(){
//     console.log("happy birthday to you");
// }

// sing();

// function sumTwoNumber(number1 , number2){
//     return number1 + number2 ;
// }initialization

// console.log(sumTwoNumber(3,4));

// function evenOdd(number){
//     if(number % 2 == 0)
//         return true;
//         else{
//             return false;
//         }
//     }
// console.log(evenOdd(5));

// or
//  return number % 2 === 0 ;

//  function FirstChar(anyString){
//     return anyString[0];
//  }
//  console.log(FirstChar("ashin"));

//  // find target in array

//  function findTarget( array , number){
//     for(let i =0 ; i<array.length ; i++){
//         if(array[i] === number)
//             return i;
//     }
//     return -1;
//  }
//  console.log(findTarget([1,2,3,44,3,4,6],7));
 
//function to function expression
// const singHappy = function(){
//     console.log("happy birthday .....");
// }

// singHappy();
//      const sumTwoNumber = function(number1 , number2){
//         return number1 + number2 ;
//     }

//    console.log(sumTwoNumber(3,4));

//            arrow functions
// u can remove paranthesis if only one parameter is there 

// const singHappyg = () => {
//     console.log("happy birthday .....");
// }

// singHappyg();

// const sumTwoNumbers = (number1 , number2) =>{
//     return number1 + number2 ;
// }

// console.log(sumTwoNumbers(3,4));

// const isEven = number => number%2 === 0;
// console.log(isEven(4));

//          hoisting
//  calling hello() function before its declaration

// hello();

// function hello(){
//     console.log('hello riya');


// this cannot be done in case of funtion expression 
// give error ReferenceError: Cannot access 'hellos' before initialization
// hellos();

// const hellos = function(){
//     console.log("hello")
// }
// console.log(hello)

// giving undefined when print variable before intialization using var
// console.log(hello);
// var hello = 'hello world';
 
// giving error if we use const or let 
// give error ReferenceError: Cannot access 'hellos' before initialization

//      function inside function

// const app = () => {
//     const myfun = () => {console.log('hello world')}

//     const addTwo = (number1 , number2) =>  number1 + number2;
    
//     console.log('inside app');
//     const nul = (num1 , num2) => num1*num2 ;

//     myfun();
//    console.log( addTwo(2,3));
//    console.log(nul(2,4))

// }
// app();

//             lexical scope
// if my var is not present in myfunc() then it will search in its lexical
// environment which is my app and consider that value for myvar
// const myvar = 'val3';
// function myapp()  {
//     // const myvar = 'val1';
//     function myfunc(){
//         const myfunc3 = () => {
//         // /const myvar = 'value69';
//         console.log('inside myfunc' , myvar);

//     }
//     myfunc3();
// }
//    console.log(myvar);
//     myfunc();


// }
// myapp();

// let and const are block scope
// var is function scop

// {
//    let var1 = 'riya';
//    console.log(var1);
//     accessing inside block no error
// }

// if in a block u create one variable uusing let and const then you can
// access that variable only inside the block not outside otherwise you will
// error.. ReferenceError: var1 is not defined
// console.log(var1);
// {
    // var var1 ='mayank';
//     console.log(var1);
// }
//  in case of var you can access variable outside block 
//  var is function scope
//  you can acess var variable anywhere
// console.log(var1);
// {{


//     console.log(var1);
// }
// }
// someyhing inside curly brases is block

// function myApp(){
//     if(true){
//         let firstN = 'riya';
//         console.log(firstN);
//     }
//     if(true){
//         console.log(firstN);
//     }
//     console.log(firstN);
// }
// myApp();
// above code will give error in case of let but for var no error 

//                        default parameters

// function addTwo(a,b){
//     if(typeof b === 'undefined'){
//         b = 0;
//     }
//     return a + b;
// }
// console.log(addTwo(1));
// when you not define value of b then it will give Nan 
// for this use if(typeof b === 'undefined')
// but javascript make easy for us by using default parameters 
// function addTwo(a,b=0){
//     return a +b ;
// }
// console.log(addTwo(4));
// when we are not definig b it will takes it default value b = 0;

//               rest parameters
// iff i want a value assign to a and b value asign to b but other all 
// remaining assign to c in array form
// use rest parameter

// function myfunc(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is`, c);
// }
// myfunc(3,4,5,2,3,6,7);

//  function addAll(...numbers){
//     let sum = 0;
//     for(let number of numbers){
//         sum = sum + number;

//     }
//     return sum;
    
//  }
// console.log( addAll(1,2,3,4,56,));

//                parameter destructuring 
// use in object and react

// const person = {
//     fname : 'riya',
//     class : '10',
//     gender : 'female',
// }
// function printDetail(obj){
//     console.log(obj.fname);
//     console.log(obj.gender);
// }
// printDetail(person);
// // destructuring
// function printDetail({fname,gender}){
//     console.log(fname);
//     console.log(gender);
    
// }
// printDetail(person);

// callback function

// function myFunc(callback){
//     console.log(callback);
//     callback();
    

// }
// myFunc([1,2,3]);
// myFunc('abcs');
// whatever u pass in place of 'a' value a will become that means above 
// you pass a as string a will be string if u pass a as array ,object
// can a value be a function ?
// function myFunc2(){
//     console.log('helo world');

// }
// myFunc(myFunc2); 
// // this is callbackk function 
// function myfunc3(name){
//     console.log('inside myfunc3');
//     console.log(`your name is ${name}`);
// }
// function myfunc(callback){
//     console.log('hello riya');
//     callback('riya');
// }
// myFunc(myfunc3);

//      function returning function

function myfunc(){
    return 'a';
    }
    console.log(myfunc());
// as we knnow we can return anything like string ,array,object
// also a function ?
function myApp(){
    function hello(){
        // console.log('hello world');
        return ' hello word';
    }
    return hello;
}
const ans = myApp();
// ans();
// console.log(ans);
//  so , in this above code a funtion myApp() return a function hello()
// that function returns store in ans 
//  that means ans became a function and we can call ans();

