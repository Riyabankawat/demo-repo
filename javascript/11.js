// new keyword
// function createUser (firstName , age ){
//     this.firstName = firstName;
//     this.age = age;
// }

// createUser.prototype.about = function(){
//     console.log(this.firstName , this.age);
// }

// const user2 = new createUser('riya',10);

// new keyword 
// 1. create empty object this = {}
// 2. in empty object put the value of this.firstname , age 
// 3.return this 
//  new keyword will automatically create the link between function and its prototype
// 
  
// user2.about();


// __proto__
// official ecmascript documentation
// [[prototype]]


// construtor function 
function CreatUser(firstName , lastName , email , age , address ){
    //  remove this line const user =  Object.create(creatUser.prototype);  
    //  the above line is setting the proto of function equals to its prototype
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age ;
    this.address = address;
  
    };
        
CeatUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
}
CreatUser.prototype.is18 = function(){
    return this.age >= 18;
}
const user1 = new CreatUser('harsh', 'vashsith', 'harshit@gmail.com', 18, "my address");
console.log(user1);
console.log(user1.is18());

// HAS OWN PROPERTY
for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}
