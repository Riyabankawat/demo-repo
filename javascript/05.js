//    filter method

// const arr = [1,2,34,5,6,7];

// function isOdd(number){
//     return number%2 != 0 ;
// }
// const oddnum = arr.filter(isOdd);
// console.log(oddnum);
// / //


// const evenNum = arr.filter((number) =>{
//     return number%2 == 0;
// });
// console.log(evenNum);

// reduce method
const arrow = [1,2,3,4,5];
// aim: sum of all numbers in array
 const sum =  arrow.reduce((accumulator , currentValue ) =>{
    return accumulator + currentValue ; 
});
console.log(sum);
//  accumulator , cureentvalue , return 
// 1            ,   2           , 3
// 3            ,    3          , 6
// 6            ,   4           ,10
// 10           , 5             , 15
const userCart =[{
    prooductId : 1 , name : 'mobile' , price : 2000},
    {prooductId : 1 , name : 'laptop' , price : 22000},
    {prooductId : 1 , name : 'tv' , price : 2000},

]
const totalAmount = userCart.reduce((totalPrice , currenttotal)=> {
    return totalPrice + currenttotal.price;
} , 0)
console.log(totalAmount);
// totalprice , currenttotal , return
//  0           , {}        ,   12000
// 12000        , 22000     , 34000
// 34000        , 15000     , 49000