// object literals 
// key -> string 
// key -> symbol
// const person = {
//     firstNmae : 'harshit',
//     age : 10,
//     1 : 'one',
// }
// // console.log(person["1"]);
// for(let key in person){
//     console.log(typeof key);
// }


//      MAP
//  map is an iterable 
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys r not allowed
// 
//  DIFFERENCE BETWEEN MAPS AND OBJECTS
// objects can only have string or symbol as key
// in maps u can use anything as key like array ,number ,string


// const persons = new Map();
// persons.set('firstname','riya');
// persons.set('age',19);
// console.log(persons);
// persons.set(1,'one');
// console.log(persons);
// persons.set([1,2,3] , 'onetwothree');
// console.log(persons);

// how to acess value from map
// how  we do in object , persons.firstname
// but different in map by using get method
// console.log(persons.get(1));

//  want to get all keys in one use .keys();
// console.log(persons.keys());

// iterate
// for of 
// for(let key of persons.keys()){
//     console.log(key , typeof key);
// }

// for(let key of persons){
//     console.log(typeof key , Array.isArray(key) , key);
// }

// // destructure
// for(let [key , value] of persons){
//     console.log(typeof key , Array.isArray(key) , key);
// }


// can also pass directly without using set
const person = new Map([['firstName','riya'],['age',7]]);
console.log(person);

const person1 = {
    id: 1,
    firstName : 'harshit',
}
// suppose we want to add more information in this object person1 but
// we dont want to add that information in this object we want to add that
// inform. in MAP how to gonna do that 

const extraInfo = new Map();
extraInfo.set(person1 ,{age :8 , gender: "male"});
console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).age);
