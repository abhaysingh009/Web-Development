// ================= OBJECT BASICS =================

// Object with key–value pairs
const user = {
    name: "abhay",               // keys are internally strings
    age: 15,
    account: 1987291,
    "home address": "delhi",      // keys with space must be in quotes

    // method inside object
    greeting: function () {
        console.log(`Hello ${this.name}`); // 'this' refers to current object
        return 20;
    }
};

// ================= ACCESS VALUES =================

console.log(user.name);                 // dot notation
console.log(user["home address"]);      // bracket notation

// ================= UPDATE / ADD / DELETE =================

user.age = 32;          // update value
user.adhar = 54267;     // add new property
delete user.adhar;      // delete property

// ================= COPY BY REFERENCE =================

const user2 = user;     // copy by reference
user2.age = 99;
console.log(user.age);  // 99 (same object in memory)

// ================= OBJECT METHODS =================

let val = user.greeting();   // call method
console.log(val);

// ================= OBJECT KEYS / VALUES =================

console.log(Object.keys(user));      // array of keys
console.log(Object.values(user));    // array of values
console.log(Object.entries(user));   // array of [key, value]

// ================= LOOPING OBJECT =================

for (let key in user) {
    console.log(key, user[key]); // user.key ❌ (wrong)
}

// ================= DESTRUCTURING =================

const { name, age } = user;           // object destructuring
console.log(name, age);

const { name: userName, age: userAge } = user; // renaming
console.log(userName, userAge);

// ================= ARRAY DESTRUCTURING =================

const arr = [10, 20, 30, 40];
const [first, second] = arr;
console.log(first, second);

// ================= NESTED OBJECT =================

const user3 = {
    name: "abhay",
    address: {
        city: "Noida",
        state: "UP"
    }
};

console.log(user3.address.city);

// ================= SHALLOW COPY =================

const shallowCopy = { ...user3 };   // nested object still shared

// ================= DEEP COPY =================

const deepCopy = structuredClone(user3); // full independent copy

// ================= SYMBOL AS KEY =================

const sym = Symbol("id");

const user4 = {
    name: "abhay",
    [sym]: "secret value"
};

console.log(user4[sym]); // access symbol key

// ================= NUMBER KEYS =================

const obj = {
    0: "zero",
    1: "one"
};

console.log(obj[0]); // arrays are stored like this internally
