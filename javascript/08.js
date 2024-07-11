// clone using object.assign
// suppose we create an onject obj 
// const obj = {
//     key1 : 'val1',
//     key2: 'val2',
// }
// const obj2 = obj ;
// obj.key3 = 'val3';
// console.log(obj);
// console.log(obj2);
//  key3 gets add in both 
// create second object which is equal to obj , then both the objects in 
// /memory point to 1 memory location or change in one object will change the 
// other object ...to not want to chnge in other object 
// we clone 

// for this we use spread operator
// const obj2 = {...obj};
// another idea for cloning is
// const obj2 = object.assign({} , obj);


//     OPTIONAL CHAINING
// const user = {
//     firstName : 'riya',
//     address : {housenumber : 1234}
// }
// console.log(user?.firstName);
// console.log(user?.address?.housenumber);
// using ?. 
//  this will no give an error just simply return undefined if user or 
// firstname is not present 

//    METHODS
//  function inside object
// koi function agr object ke andr hai usse method bolte h
// const person = {
//     firstName : 'riya',
//     age : 8,
//     about : function(){
//         console.log(`person name is riya and age is 8`)

//     }
// }
// whole function is printed
// console.log(person.about);
// we dont want the whole function we want to call the function
// person.about();

// if we change the firstname , that will not change inside function
// every time it will print riya so, if we want to change this thing
// that whenever we change the firstname , inside function also chnge 
// how ?
// console.log(`person name is ${this.firstName} and age is ${this.age}`);
// person.about();

// inside an object this refers to the object itself
// this.firstname means object.firstname

// function personInfo(){
//     console.log(`person name is ${this.firstName} and age is ${this.age}`);

// }

// const person1 = {
//     firstName :'riya',
//     age :'7',
//     about : personInfo
// }

// const person2 = {
//     firstName :'shivani',
//     age :'5',
//     about : personInfo
// }

// const person3 = {
//     firstName :'shreya',
//     age :'18',
//     about : personInfo
// }
// person1.about();
// person2.about();
// person3.about();



// console.log(this);
// // above will print window object
// console.log(this === window);
// above will give true


// function myfunc(){
//     console.log(this);
// }
// myfunc();
// with strict mode will give undefined wihtout strinct give wwindow



//  CALL , APPLY , BIND
// function hello(){
//     console.log('helo');
// }
// hello.call();
//  function about(hobby , fvrtmovie){
//     console.log(`person name is ${this.firstName} and age is ${this.age}`, hobby , fvrtmovie);}

// const user1 = {
//     firstName : 'riya',
//     age : '10',
//     about : function(hobby , fvrtmovie){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`, hobby , fvrtmovie);
//     }
// }
// const user2 = {
//         firstName : 'riya',
//     age : '10',
//     }
// user1.about.call(user2, 'dancing' , 'kgf');
//  if we define user outside object
// about.call(user1, 'singing','idea of you');



// APPLY 
// apply is same as about difference is we use array 
// about.apply(user1 , ['guitar' , 'bts']);


// BIND 
// bind return function 
// const func = about.bind(user1,'dance','bts');
// func();


//  WARNING dont do this mistake
// const user1 = {
//     firstname : 'riya',
//     age : 8 ,
//     about : function(){
//         console.log(this.firstname , this.age);
//     }
// }
// const myfunc = user1.about;
// myfunc(); will give undefined undefined 

// const myfunc = user1.about.bind(user1);
// myfunc();


// arrow function 
const user1 = {
    firstName : 'riya',
    age : 6,
    about  : ()=> {
        console.log(this.firstname , this.age);
}
}
user1.about();
// go through this in video






