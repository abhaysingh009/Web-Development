// console.log("if js file is connected then see me in colsole")
// const element =document.getElementById('first');// object return kr ke dega
// console.log(element) // see in brower's console because
// // Browser
// //  ├── JavaScript
//  ├── document ✅
//  ├── window   ✅
//  └── DOM      ✅

// Node.js
//  ├── JavaScript
//  ├── document ❌
//  ├── window   ❌
//  └── DOM      ❌

// console.log(element.textContent)// text content printed in browser's console

// why output is directly showing (without executing it ) in browser's console at the time of opening console 
// index.html
//      ↓
// Browser reads <h1>
//      ↓
// Browser sees:
// <script src="script.js">
//      ↓
// "Okay, I need to load script.js"
//      ↓
// Loads your JS file
//      ↓
// Browser's V8 engine executes the JS
//      ↓
// Console shows the output
// element.textContent="Hello"; // text content of h1 will be changed but i want it change when i click on h1's text
// so we can wrap up this in a function and call that function on click 

//function changetext(){
//     const element =document.getElementById('first');
//     element.textContent="Hello";
// }
// changetext()// this directly calls the function but we want it conditionally
// const element =document.getElementById('first');

// element is an object and onclick is its property jaise hi click kiya jaye changetext ko call karo initailly element.onclick =null
// element.onclick=function changetext(){
    //     element.textContent="Hello";
    // }
    
// ab mujhe background color bhi change krna hai 
    
    // element.onclick=function changetext(){
    //     element.textContent="Hello";
    //     element.style.backgroundColor="red"
    // }
// if you call seperately for both then onlylast one  will work because it overrides the value
// eg element.onclick =changetext() then if you again call the element.onclick= xyz()

    // element.onclick=function changetext(){
    //     element.textContent="Hello";
    // }
    // element.onclick= ()=>{
    //     element.style.backgroundColor="red"
    // }
    // only color changes because it overrides changetext()

// ye ek old method hai 

//now see the modern method


// which is eventlistener

const element=document.getElementById('first')
// events like  moving cursor , click on anywhere , keyboard entry these are events
callback=()=>{
        element.style.backgroundColor="red"
}
// jaise hi click ho function ko call kar do
element.addEventListener('click',callback)
// element.addEventListener('dblclick',callback) for double click

