// map method
// map return array 
const arr = [3,5,7,9,0];

// const square  = function(number){
//     return number * number ;
// }
 
// const squareNum = arr.map(square);
// console.log(squareNum);

// const squareNum = arr.map(function(number , index){
// return `${index}, ${number * number}` ;
// })
// console.log(squareNum);


    
const users = [
    { Fname : 'riya', age: 20},
    { Fname : 'priya', age: 20},
    { Fname : 'riyan', age: 25},  
    { Fname : 'ria', age: 24},
    ]
const userName = users.map((user) => {
    return user.Fname;
} );
console.log(userName);