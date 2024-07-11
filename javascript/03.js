// important array methods
// forEach
// map
// filter
// reduce

// const numbers = [2,4,6,7];
// function multiplyBy2(number , index){
//     console.log('index is ',index);
//     console.log(`${number}*2 = ${number*2}`);

// }
// multiplyBy2(numbers[0] , 0);
// for(let i =0 ; i < numbers.length ; i++){
//      multiplyBy2(numbers[i] , i);
// }

// numbers.forEach(multiplyBy2); 

// using foreach u dont have to use for loop
// in above first you create a  function then call the funtion in forEach 
// as callback function but you can also create function directly inside 
// for each parameter

// const number = [2,3,67,89,3];
// number.forEach(function(number , index){
//     console.log(`index is ${index} number is ${number}`)
// });
//  numbers.forEach(function(number , index){
//     console.log(number*3);

//  });

const users = [
    { Fname : 'riya', age: 20},
    { Fname : 'priya', age: 20},
    { Fname : 'riyan', age: 25},  
    { Fname : 'ria', age: 24},
    ]
users.forEach(function(user){
    console.log(user.Fname);
});
// use arrow function

users.forEach((user , index) =>{
    console.log(user.Fname , index);
})