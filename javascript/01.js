"use strict";

// let firstName = "harshit";
// console.log(firstName[3]);
// console.log(firstName.length);
// console.log(firstName[firstName.length-1]);
// let newString = firstName.trim();
// console.log(newString.length);
// console.log(firstName.toUpperCase());

// let newString = firstName.slice(0,6);
// console.log(newString);
// let age = 22;
// console.log(typeof age);
// console.log(typeof (age + ""));
// let myStr = "riya";
// myStr = +"riya";
// console.log(typeof myStr);

// let age = "riya";
// age = Number(age);
// console.log(typeof age);

// let String1 = "17";
// let String2 = "10";
// let fullNmae = +String1 + +String2;
// console.log(fullNmae);

// let firstName;
// console.log(typeof firstName);
// firstName = "riya";
// console.log(typeof firstName , firstName);

// let age = null;
// console.log(typeof age);
// age = "riya";
// console.log(age , typeof age);

// let myNumber = 123;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);
// let myNumbe = BigInt(235287861751827172515281);
// console.log(myNumbe);

// let mynum = 12n;
// let myNumbe = 13;
// console.log(mynum + myNumbe);

// let num1 = "3";
// let num2 = 4;
// console.log(num1 != num2);

// let age = 17;
// if(age >= 18){
//     console.log("can play");
// }
// else{
//     console.log("user can play");
// }

// let firstName = "riya";
// if(firstName){
//     console.log(firstName);
// }
// else{
//     console.log('frstname is kinda empty');
// }

// let age = 78;
// let drink;
// if(age<=5){
//     drink = 'milk';
// }
// else{
//     drink = "coffee";
// }
// console.log(drink);

// let age = null;
// let drink = age>=5 ? "coffee" : "milk";
// console.log(drink);

// let firstName = "hriya";
// let age = 22;
// if(firstName[0]=== 'H' && age>18){
//     console.log("name starts wiht h and age is above 18");
// }

// let firstName = "hriya";
// let age = 18;
// if(firstName[0] === 'r' || age>=18){
//     console.log("one true ");
// }
// else{
//     console.log("no true");
//     }

// let winningNumber = 19;
// let userGuess = +prompt("guess a number");

// if(userGuess === winningNumber){
//     console.log("user guess is right");
// } else{
//     if(userGuess < winningNumber){
//         console.log("too low");
//     }
//     else{
//         console.log("too high");

//     }
// }

// let temperature = 15;

// if(temperature <0){
//     console.log("it is extremely cold outside");
// }
// else if(temperature < 16){
//     console.log("it is cold outside");
// }
// else if (temperature > 40){
//     console.log("turn on ac");

// }
// else{
//     console.log("too hot");
// }
// console.log("too hot");

// let day = -1;

// switch(day){
//     case 0:
//         console.log("sunday");
//         break;
//      case 1:
//             console.log("monday");
//             break;
//     case 2:
//            console.log("tuesday"); 
//            break;
//     case 3:
//             console.log("wednesday");
//             break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//       default: 
//       console.log("invalid day") 
// }

// let i = 0;
// while(i<=4){
// console.log(i);
// i++;
// }

// let num = 10;
// let sum = 0;
// let i = 0

// while(i<=num){
//     sum = sum + i;
//     i++;
// }
// console.log(sum);

// let num = 10;
// let sum = (num*(num+1))/2;
// console.log(sum);

// intro to for loop

// for(let i = 0 ;i <=9 ; i++){
//     console.log(i);
// }
// console.log(i); // i not defined error 

// let i = 10;
//  do{
//     console.log(i);
//     i++;
//  }while(i<= 9);

// arrays
// let fruits = [1,2,3,3,4,,4,,44,];
// fruits[2] = 'banana';
// console.log(fruits);
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(Object));

//unshift //add in the starting of array
// let fruits = ['apple','mango','banana'];
// fruits.unshift('banaana','grapes');
// console.log(fruits);
//
//shift // starting se remove krega
// let fruits = ['apple','mango','banana'];
// let removedfruit = fruits.shift();
// console.log(fruits);
// console.log(removedfruit);

//clone array
// let arr1 = [1,2,34];
// let arr2 = [].concat(arr1,[3,4,56]);
// console.log(arr1 === arr2);
// console.log(arr2);

// let items = ["apple","banana",'milk','cake' ,'coffee'];

// for(let i = 0; i < items.length; i++){
//     console.log(items[i].toUpperCase());
// }

// let arr2 = [];
//  arr2.push(items[i].toUpperCase());
// console.log(arr2);
// console.log(items.length);

// const items = ['appe' , 'ana '];
// items.push('ans','js');
// console.log(items);

// const fruits = ['apple','kiwi','grapes'];
// let fruits2 = [];
//     for(let fruit of fruits){
//        fruits2.push(fruit.toUpperCase());
//     }
//     console.log(fruits2);

// array destructuring

// const arr1 = ['val1','val2'];
// // let var1 = arr1[0];
// // let var2 = arr1[1];
// let[var1 , var2] = arr1;
// console.log(var1);
// console.log(var2);

// const arr1 = [1,2,3,45];
// let[var1,,var2] = arr1;
// console.log(var1);
// console.log(var2);

// const arr1 = [1,2,3,4,5,6];
// let[var1,,var2,...myarr] = arr1;
// console.log(var1);
// console.log(var2);
// console.log(myarr);

//object 
//create object 
// const person = {
//     name : 'riya', age : 20
// };
// console.log(person);
// console.log(person.age);

// const riya = {
//     name : 'riya', age : 20 , hobbies : ['guitar', 'music','dancing']
// }
// console.log(riya);
// console.log(riya.hobbies);
// riya.gender = 'female';
// console.log(riya);
// console.log(riya["gender"]);
// riya["height"] = 5.6;
// console.log(riya);

// const key = "color";
const riya = {
    name : 'riya',
    age : 20
}
// riya[key] = "pink";
// console.log(riya);

//how to iterate objects 
//for in loop
//object.keys

// for(let key in riya){
//     // console.log(key);
//     // console.log(riya[key]);
//     console.log(`${key} : ${riya[key]}`);
// }

// const key1 = 'objk1';
// const key2 = 'objk2';

// const value1 = 'myvalue1';
// const value2 = 'myvalue2';

// const obj = {
//     [key1]: value1,
//        [key2] : value2
// }
// console.log(obj);

//spread operator in objects

// const obj = {
//     key1 : "val1",
//     key2 : "val2"
// };
// const bjc2 = {
//     key3 : "bn",
//     key3 : "bnn"
// };

// const newobj = {...obj , ...bjc2};

// const newobj1 = {..."abcdefghijklmnopqrstuvwxyz"}
// console.log(newobj1);

//object destructuring
// const band = {
//     bandname : 'bts',
//     famousSong : 'dna',
//     member : 7,

// }

// // const{bandname , famousSong} = band;
// // console.log(bandname);
// // console.log(famousSong);
// // want another variable name not bandname then use colon
// const{bandname: var1} = band
// console.log(var1)

// // want to store the next in another variable 
// const{bandname , ...rest} = band;
// console.log(rest);

// objects inside array 

const user = [ {
    userId : 1 ,Fname : 'riya',gender : 'female'}, 
    { userId : 2 , Fname : 'riyan',gender : 'male'}] 
// console.log(user);
// for(let users of user){
//     console.log(users.Fname);
// }
 
// //destructuring

// const[user1] = user;
// console.log(user1); 

const [ {Fname: user1Fname},{gender}] = user;
console.log(user1Fname);
console.log(gender);  