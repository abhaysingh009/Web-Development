//  Scope and closure, HOF 
// Global --> Accessible to everyone 
// functional -->  Accessible only within the function 
// block-->  Accessible only within the block

// !important --- var keyword does not respects block
// let a=10;
// const b=20;//global var


// if (true){
//     let c=290; //block level
//     var z=45;
// }

// console.log(z); //valid for var

// function fun(){
//     let d=823;//function level
//     var sd=453;
// }
// console.log(sd);//throws error


//Closure--> a function that remembers variables fromt its outer scope even after ther outer function has finished executing.

// function createCounter(){
//     let count =0;
//     function increment(){
//         count++;
//         return count;
//     }
//     return increment;
// }

// let counter=createCounter();
// console.log(counter());
// console.log(counter());

// Use Case of closure property
// function createBankAccount() {
//     let balance = 1000;//behaves like private variable 
//     // return{
//     let user = {
//         deposite: function (amount) {
//             if (typeof amount === "number" && amount > 0) {
//                 balance += amount;
//                 return balance;
//             }
//         },
//         withdraw: function (amount) {
//             if (typeof amount === "number" && amount < balance) {
//                 balance -= amount;
//                 return balance;
//             }
//         },
//         getBalance: function () {
//             return balance;
//         }


//     }
//     return user;

// }
// // Now we can't access balance directly
// let Customer = createBankAccount();
// // console.log(Customer);
// console.log(Customer.deposite(1000));
// console.log(Customer.deposite('abc'));
// console.log(Customer.getBalance());


//higher order function
function double(val){

    function execute(value){
        return val*value;
    }
    return execute;
}

// let amount=double(10);
// console.log(amount(20));
            //OR
// we can also call both functions like this
let amount=double(10)(20);
console.log(amount);    
