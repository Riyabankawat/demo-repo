// proto and prototype both are different

function hello(){
    console.log("helo world");
}
// javascript function ===> function + object

// console.log(hello.name);

// u can add your own properties in function
// hello.myownproperty = 'very unique value';
// console.log(hello.myownproperty);

// name property -> tells function name
//  function provide more useful properties

// console.log(hello.prototype); {}
// prototype means function ke pas ek empty object
// only function provide prototype property

// hello.prototype. abc = 'absc';
// hello.prototype. sing = function(){
//     console.log('let me love yu');
// }
//  console.log(hello.prototype.sing);



function creatUser(firstName , lastName , email , age , address ){
        const user = Object.create(creatUser.prototype);
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.age = age ;
        user.address = address;
        return user;
        };

        // ab yeh ek function hai toh iske pas prototype bhi hoga 
        // which means it has its own empty object(free space);
        // if we want to add methods we can add them in prototype rather than
        // creating a different object

        // HOW WE GONNA ADD METHODS IN PROTOTYPE 
creatUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
}
creatUser.prototype.is18 = function(){
    return this.age >= 18;
}
const user1 = creatUser('harsh', 'vashsith', 'harshit@gmail.com', 18, "my address");
console.log(user1);
console.log(user1.is18());







