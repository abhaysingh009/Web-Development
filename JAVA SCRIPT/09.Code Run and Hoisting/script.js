//How JS code runs

// code Run--> Execution context 
// execution context will be created 
//   -Memory allocation
//   -Execution phase
    
// first memory allocated to  all global variables and functions and stored undefined in var and function code in functions   -memory allocation
// then in execution phase actual value get stored in variables and function calls -execution phase 
// -in a function call again same process followed -memory allocation and then execution phase 

// console.log(a);
// var a=10;
// var b=20;
// function addNumber(num1 ,num2){
//     return num1+num2;
// }
// sumResult1=addNumber(a,b);
// sumResult2=addNumber(129,82);
// console.log(sumResult1,sumResult2);


// //memory allocation
// a=undefined;
// b=undefined;
// addNumber=func code;
// sumResult1=undefined;
// sumResult2=undefined;
// //execution phase 
// console.log(a);--> prints undefined
// a=10;
// b=20;
// function addNumber---remains same;
// sumResult1=function call -->repeat same process for function after returned value 30 stored in sumResult1;
// sumResult2=function call ........
// console.log(sumResult1,sumResult2);--> prints values



//let and const 
// in let and const memory allocation phase var is initialized as --uninitialized  (this is called temporal dead zone--means memory allocated to variable but none can acces until any actual value is initialized)

// console.log(b);//this will throw error-->Cannot access 'b' before initialization
let a=10;
const b=29;
const res=addNumber(a,b);
console.log(res);
let addNumber=function(num1,num2){
    return num1+num2;
}


//Hoisting in JS


// Hoisting is java script's behaviour of knowing about  a variable or function's existence before executing the code . 
// -function: Hoisted completely (name and body)
// var : Hoisted and initialized with undefined
// let/const : Hoisted but not  initialized . They are put in temporal zone.