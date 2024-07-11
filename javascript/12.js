// let numbers = [1,2,3];

// // console.log(Object.getPrototypeOf(numbers));
// console.log(Array.prototype);
// console.log(numbers);

// function hello(){
//     console.log("hello");
// }


// CLASS keyword


// class CreatUser{
//     constructor(firstName , lastName , email , age , address ){
//         console.log('constructor called')
      
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age ;
//     this.address = address;
//     }
//     about(){
//         return `${this.firstName} is ${this.age} years old.`;
//     }
//     is18(){
//         return this.age >= 18;
//     }
//   }
// //   without new keyword constructor will not be called
//   const user1 = new CreatUser('harsh', 'vashsith', 'harshit@gmail.com', 18, "my address");
// console.log(user1.firstName);
// console.log(Object.getPrototypeOf(user1));



// class Animal{
//     constructor(name , age){
//         this.name = name ;
//         this.age = age ;
//     }
//     eat(){
//       return`${this.name} is eating`;

//     }
//     isCute(){
//         return this.age <=5;
//     }
// }
// const tommy = new Animal('elephant',4);
// console.log(tommy);
// console.log(tommy.eat());
// console.log(tommy.isCute());



// dog class
// class Dog{
//     constructor(name , age){
      
//             this.name = name ;
//             this.age = age ;
//         }
//         eat(){
//           return`${this.name} is eating`;
    
//         }
//         isCute(){
//             return this.age <=5;
//         }
//     }

// const tommy = new Dog('tommy',3);
// console.log(tommy);
// console.log(tommy.eat());
// console.log(tommy.isCute());

// class Cat extends Dog {

// }
// const tom = new Cat('kiten',9);
// console.log(tom);
// console.log(tom.eat());



// SUPER KEYWORD




// // GETTER AND SETTER
// class Person{
//     constructor(firstName , lastName , age ){
//         this.firstName = firstName ;
//         this .lastName = lastName;
//         this.age = age;
//     }
//   get fullname(){
//         return `${this.firstName} ${this.lastName}`
//     }

// // const person1 =new Person('riya','bankawat',19);
// // console.log(person1.fullname);
// // // want to call this function as property person1.fullname use get
// // console.log(person1.fullname);

// // setter
// setName(firstName , lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// }
// const person1 =new Person('riya','bankawat',19);
// person1.setName('riya','sharma');
// console.log(person1.firstName);
// console.log(person1.lastName);


// // another way
// set fullname(fullname){
//     fullname.split(' ')
// }


// static methods and properties
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return 'this is person class';
    }
    static desc = "static property";
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat(){
        return `${this.firstName} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const person1 = new Person("harshit", "sharma", 8);
// // console.log(person1.eat());
// const info = Person.classInfo();
// console.log(person1.desc);
// console.log(info);





















