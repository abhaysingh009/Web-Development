// ======================= NUMBER METHODS & PRIMITIVES =======================

// 'a' is a PRIMITIVE number (not an object)
let a = 7389.92738;

// toFixed(n):
// → rounds the number to 'n' decimal places
// → RETURNS A STRING
// → original value of 'a' remains unchanged
console.log(a.toFixed(2));      // "7389.93"
console.log(a);                 // 7389.92738

// toPrecision(n):
// → rounds the number to 'n' TOTAL significant digits
// → RETURNS A STRING
console.log(a.toPrecision(5));  // "7389.9"


// ======================= HOW PRIMITIVES HAVE METHODS =======================

// Even though 'a' is a primitive, JavaScript allows method calls.
// Internally, JavaScript does AUTO-BOXING:

// JavaScript temporarily converts:
// a → new Number(a)
// calls the method
// then destroys the temporary object

// Example (internal working):
// new Number(a).toFixed(2);

// This is why primitives appear to have methods.


// ======================= WRAPPER OBJECTS =======================

// Creating Number objects explicitly (NOT recommended)
let x = new Number(5);
let y = new Number(5);

// Objects are compared by REFERENCE (memory address)
console.log(x == y); // false (different objects in memory)


// ======================= OBJECT COMPARISON =======================

let obj1 = { num: 5 };
let obj2 = { num: 5 };

// Different objects → different memory locations
console.log(obj1 == obj2); // false

// Copying reference
let obj3 = obj1;

// Both variables point to SAME object in memory
console.log(obj1 == obj3); // true

// NOTE:
// Primitive data types → compared by VALUE
// Non-primitive data types (objects, arrays) → compared by REFERENCE


// ======================= MATH OBJECT =======================

console.log(Math.floor(3.4));   // 3  (rounds DOWN)
console.log(Math.ceil(3.4));    // 4  (rounds UP)
console.log(Math.PI);           // 3.14159...
console.log(Math.SQRT2);        // √2
console.log(Math.min(3, 5, 1)); // 1
console.log(Math.max(3, 5, 1)); // 5


// ======================= RANDOM NUMBER GENERATION =======================

// Math.random():
// → generates a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());

// Random number between 1 and 10
console.log(Math.ceil(Math.random() * 10));

// Random number between 1 and 6 (dice)
console.log(Math.floor(Math.random() * 6) + 1);

// Random number between min and max (inclusive)
let minimum = 15;
let maximum = 25;

console.log(
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
);
// Generates a random number from 15 to 25 (inclusive)
