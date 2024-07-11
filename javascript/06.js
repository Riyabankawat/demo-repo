//  sort method
// const numbers = [2,34,5,67,8,4];

// numbers.sort();
// console.log(numbers);

// const userName  = ['riya','mayank' , 'harshit','abbc' ,'ABC' ];
// userName.sort();
// console.log(userName);

// A = 65 to z= 90 , 'a'= 97 
//  what to do for expectrd output

// const number = [5,9,1200,410,3000];
// number.sort((a,b) =>{
//     // return a-b; for ascending 
//     // return b-a ; for descending 
// })
// console.log(number);

// 1200 ,410
// a -b ---> 790
// a - b ---> positive(greater than 0)-> b,a

// a-b > negative --> a,b
// 5,9 ---> -4 

// const products = [
    
//     { productId : 1, name : 'p1' , price : 300 },
//     { productId : 2, name : 'p2' , price : 1300 },
//     { productId : 3, name : 'p3' , price : 400 },
//     { productId : 4, name : 'p4' , price : 5300 },
// ]
// // lowTohigh
// products.sort((a,b) => {
//     return a.price - b.price
// });
// console.log(products);
// as we see above code change the product accorting to low to high 
// but we dont want to change the whole product
// for this we can clone this 
// const lowToHigh  = products.sort((a,b) => {
//     return a.price - b.price;
// });
// console.log(lowToHigh);
 

//  find method

// const myarr = ['hello','riya','how','are','you'];

// function isLength(string){
//     return string.length === 3;
// }
// const ans = myarr.find(isLength);
// console.log(ans);
// // orr 

// const users = [
//     { userId : 1 , name: 'riya'},
//     { userId : 2 , name: 'priya'},
//     { userId : 3 , name: 'riyas'},
//     { userId : 4 , name: 'riyan'},
//     { userId : 5 , name: 'ria'},
// ];
//  const myUser = users.find((user) => user.userId === 3);
//  console.log(myUser);


// // every method

// const numbers = [2,4,6,8,10];
// const answ = numbers.every((numbers) => number%2 ===0);
// every method will return true if condition is applied or true for every 
// element of array
// console.log(answ);

//     const userCart =[{
//         prooductId : 1 , name : 'mobile' , price : 2000},
//         {prooductId : 1 , name : 'laptop' , price : 22000},
//         {prooductId : 1 , name : 'tv' , price : 4000},
//     ]
//    const answer = userCart.every((cartItem) => cartItem.price < 30000);
//     console.log(answer)




// some method 

// const numbers = [3,41,5,65,7,89];
// // if any number is even then true otherwise false if none

// const ans = numbers.some((find) => find%2 === 0 );
// console.log(ans);

// const userCart = [
//     {userId : 1, productName : 'mobile' , price: 20000},
//     {userId : 2, productName : 'machine' , price: 14400},
//     {userId : 3, productName : 'laptop' , price: 20000},
//     {userId : 4, productName : 'car' , price: 12000},
//     {userId : 5, productName : 'tv' , price: 50000},
// ]
// const ans = userCart.some((cartItem) => cartItem.price > 100000 );
// console.log(ans);


//           fill method
// const myArr = new Array(10).fill(-1);
// console.log(myArr);

// const myarray = [2,3,4,56,7,6,7,4,2];
// myarray.fill(0,3,6);
// console.log(myarray);


//       splice method
// start from where ,delete how many , insert
// const myArr = ['item1','item2','item3','item4'];
// myArr.splice(1, 1);
// console.log(myArr);

// myArr.splice(1, 0 , 'insert item');
// console.log(myArr);

// const items = myArr.splice(1 , 2 , 'insert item1','inserted item2');
// console.log(myArr);
//  console.log(items); hold items which are deleted


// iterables
// jispe hum apni for of loop lga sake
// strind , array are iterable
// objects are not iterable

// const firstName = 'dharmendra';
// for(let char of firstName){
//     console.log(char);
// }

// array like object
// jinke pas length property hoti hai 
// aur jinko hum index se acess kar skte hai
// example -> string , array

// const firstNames = 'dharmendra';
// console.log(firstNames.length);


// sets (it is iterable)
// store data
//  set also have its own methods
// No index-based access
//  order is not guaranteed 
//  unique items only (no duplicate allowed)

const numbers = new Set([1,2,3]);
console.log(numbers);
// console.log(numbers[2]; not possible , no index based access 
numbers.add(1);
numbers.add(4);
console.log(numbers);
numbers.add(['item1','item2']);
console.log(numbers);
//  if you want to check element is present or not in set 
if(numbers.has(5)){
    console.log('1 is present')
} else{
    console.log('not present')
}

//  for of loop 
for(let number of numbers){
    console.log(number);
}
//  want to get the unique elements of an array
const myArray = [1,2,3,3,4,5,1];
const uniqueElement = new Set(myArray);
console.log(uniqueElement);
console.log(myArray);
let length = 0;

// how to find length of set 
for(element of uniqueElement){
    length++;
}
console.log(length);