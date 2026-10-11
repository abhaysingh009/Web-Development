// class and object

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.x = 10;
         // 'this' keyword is initially pointing an empty object so when you write this.name it adds name into that object
    }

    greet(){
        console.log(`Hi ${this.name}`)
    }
};


const user1 = new Person("Rohit",20);
const user2 = new Person("Sohan",10);

console.log(user1);// it will not print greet method 
// When you create:
// const user1 = new Person("Rohit", 20);

// JavaScript roughly creates:
// user1
// ├── name: "Rohit"
// ├── age: 20
// └── x: 10
//       │
//       ↓ [[Prototype]]
// Person.prototype
// └── greet()

// It doesn't show greet() because greet() belongs to:
// Person.prototype
console.log(user2);

// user1.greet();

const user3 = {
    name: "Mayank",
    age: 72,
    greet: function(){
        console.log(`Hi ${this.name}`)
    }
}

console.log(user3);


const arr = [10,20,30];

console.log(arr);