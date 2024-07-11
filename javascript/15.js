// synchronous programming vs asynchronou programming
// synchronous programming 
// javascript is synchronous and single threaded

// console.log('start');

// for(let i = 0; i<1000 ; i++){
//     console.log('inside for loop')
// }
// console.log('script end');



//  SETtIMEOUT

// console.log('sript start');
// function hello(){  
//     console.log("hello world");
// }
// setTimeout(hello , 1000);
// console.log('script end'); 
// output
// sript start
// script end
// hello world


// console.log('sript start');

// const id = setTimeout(() => {
//     console.log('inside set timeout');
// } , 0);

// for(let i = 1 ; i<100 ; i++){
//     console.log("...");
// }
// console.log(id);
// console.log('clearing timeout');
// clearTimeout(id);
// console.log('script end'); 


// SETinterval\
// console.log('sript start');
// setInterval(() => {
//     console.log(Math.random());
// },1000)
// console.log('sript end');



// callbacks

// function myfunc(callback){
//    console.log('function is doing task 1');
//    callback();
// }

// function myfunc2(){
//     console.log('function is doing task2');
// }

// myfunc(myfunc2);


function getTwoNumber(number1 , number2 , callback){
    console.log(number1 , number2);
    callback(number1 , number2);
}

function addTwoNumbers(num1 , num2){
    console.log( num1+num2);
}
 getTwoNumber(4,5,addTwoNumbers);