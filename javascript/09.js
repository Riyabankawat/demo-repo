// const user1 = {
//     firstname : 'riya',
//          age : 8 ,
//         about(){
//             console.log(this.firstname , this.age);
//         }
//     }  
    
    
    //  we can write this as 
    // const user1 = {
    //     firstname : 'riya',
    //          age : 8 ,
    //         about(){
    //             console.log(this.firstname , this.age);
    //         }
    //     }     
    //     user1.about();



    // function (that function create object)
    // add key value pair
    // object ko return krega
    // object ke andr functions ko methods bhi blte h
    // function createUser(firstName , lastName , email , age , address ){
    //     const user = {};
    //     user.firstName = firstName;
    //     user.lastName = lastName;
    //     user.email = email;
    //     user.age = age ;
    //     user.address = address;
    //     user.about = function(){
    //         return `${this.firstName} is ${this.age} years old` ;

    //     };
    //     user.is18 = function(){
    //         return this.age >= 18;
    //     }
    //     return user;
    // }

    // const user1 = createUser('riya','sharma','riya@gmail.com',18, 'agra');
    // console.log(user1);


    // so the thing is if we call the above function for differetn users 
    //  then for different user same methods will create in memory which require
    // so much space , so for this probem we can create these methods outside 
    // function and use their referenec (adress) inside function 
    // this is how we gonna do it 


    // const userMethods = {
    //     about : function(){
    //         return `${this.firstName} is ${this.age} years old.`;
    //     },
    //     is18 : function(){
    //         return this.age >= 18;
    //     }
    // }
    // function createUser(firstName, lastName, email, age, address){
    //     const user = {};
    //     user.firstName = firstName;
    //     user.lastName = lastName;
    //     user.email = email;
    //     user.age = age;
    //     user.address = address;
    //      user.about = userMethods.about;
    //     user.is18 = userMethods.is18;
    //     return user;
    // }
    
    // const user1 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 9, "my address");
    // const user2 = createUser('harshita', 'vashsith', 'harshit@gmail.com', 19, "my address");
    // const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
    // console.log(user1.about());
    // console.log(user3.about());


    // IMPROVE THE ABOVE CODE 
    // suppose we want to add more methods like many moew thousands 
    // so we have to add theirs references in function createuser ,,,
    // i mean this is very hafty task if we forget to add any of method references
    // than that would be a problem so what we gonna do for this


const userMethods = {
        about : function(){
            return `${this.firstName} is ${this.age} years old.`;
        },
        is18 : function(){
            return this.age >= 18;
        }
    }
    function createUser(firstName, lastName, email, age, address){
        const user = Object.create(userMethods); 
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.age = age;
        user.address = address;
        return user;
    }
    
    const user1 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 9, "my address");
    const user2 = createUser('harshita', 'vashsith', 'harshit@gmail.com', 19, "my address");
    const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
    console.log(user1.about());
    console.log(user3.about());






    // lets discuss someting ese first
    const obj1 = {
        key1: "value1",
        key2: "value2"
    }
    
    // __proto__
    
    // offical ecmascript documentation 
    
    // [[prototype]]
    
    // __proto__ , [[prototype]]
    
    
    
    // prototype    
    
    const obj2 = Object.create(obj1); // {this thing create proto of obj2 which is obj1}
    // there is one more way to create empty object
    obj2.key3 = "value3";
    // obj2.key2 = "unique";
    console.log(obj2);
    
    console.log(obj2.__proto__);
    console.log(obj1.__proto__);

    // 