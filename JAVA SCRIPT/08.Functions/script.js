// =======================
// Basic Function
// =======================

// function fun() {
//     console.log("hello");
// }
// fun();


// =======================
// Parameterized Function
// =======================

// function add(num1, num2) {
//     return num1 + num2;
// }
// let x = add(2, 3);
// console.log(x);


// =======================
// Function with Default Parameters
// =======================

// function add(num1, num2, num3 = 0, num4 = 0) {
//     return num1 + num2 + num3 + num4;
// }

// Default value of num3 and num4 is set to 0 if not provided
// console.log(add(2, 4));
// console.log(add(2, 4, 9));
// console.log(add(2, 4, 5, 2));


// =======================
// Rest Operator
// =======================

// Rest operator converts multiple arguments into a single array
// function add(...num) {
//     let sum = 0;
//     for (let n of num) {
//         sum += n;
//     }
//     return sum;
// }

// let x = add(2, 4);
// let y = add(2, 4, 9);
// let z = add(2, 4, 5, 2);
// console.log(x);
// console.log(y);
// console.log(z);


// =======================
// Difference between Spread and Rest Operator
// =======================

let arr5 = [1, 2, 3, 4, 5, 56];

// Rest operator collects remaining values into an array
const [first, second, ...num] = arr5;
console.log(first, second, num);


// =======================
// Spread Operator
// =======================

// Spread operator expands array elements
// Used here to merge two arrays
const arr = [1, 2, 3, 4, 5, 5];
const arr2 = [1, 2, 3, 4, 5, 5];

const ans = [...arr, ...arr2];
console.log(ans);


// =======================
// Function Expression
// =======================

// console.log(addNumber(2, 3)); ❌ Error
// Function expressions cannot be called before initialization

const addNumber = function (a, b) {
    return a + b;
};

console.log(addNumber(2, 3));


// =======================
// Function Declaration
// =======================

// Function declarations are hoisted,
// so they can be called before definition

console.log(addNum(7, 8));

function addNum(a, b) {
    return a + b;
}


// =======================
// Arrow Functions
// =======================

const sayHello = () => {
    console.log("hello");
};
sayHello();


// Arrow function with rest operator
const addNumbers = (...num1) => {
    let sum = 0;
    for (let i of num1) {
        sum += i;
    }
    return sum;
};
console.log(addNumbers(1, 2, 3));


// If only one return statement exists,
// we can omit curly braces and 'return'
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(1, 2));


// If only one parameter exists,
// parentheses are optional
const square = num => num * num;
console.log(square(4));


// =======================
// Returning Object from Arrow Function
// =======================

// ❌ This will not work
// const objfun = () => { name: "abhay", age: 16 };

// ✅ Wrap object in parentheses
const objfun = () => ({ name: "abhay", age: 16 });
console.log(objfun());


// =======================
// IIFE (Immediately Invoked Function Expression)
// =======================

(function greeting() {
    console.log("hello");
})();

(() => {
    console.log("hello");
})();


// =======================
// Callback Functions
// =======================

// A callback function is a function
// passed as an argument to another function

function zomato() {
    console.log("We are preparing your food");
}

function blinkit() {
    console.log("We are packaging your order");
}

function payment(amount, callback) {
    console.log(`${amount} rs payment received`);
    callback();

    // more code...
    // processing...
}

payment(500, zomato);
payment(320, blinkit);
