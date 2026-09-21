

// arr.sort((a,b)=>a-b);


// custom sorting  
const arr = [10,20,1,3,98,8,11];
Callback = (a,b)=> a<b;

// arr.sorting=function(){
//     // Bubble sort
//     for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-1;j++){
//         if(Callback(arr[j],arr[j+1])){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     } 
//    }

// }
// arr.sorting();
// console.log(arr)

// if we add sorting using above code then when we'll print array after sorting in array function will also get printed
// now to avoid that func print we use the code below 
//  Array.prototype. ??????? we ll learn in upcomming lectures

// Array.prototype.sorting = function(Callback){
    
//     // Bubble sort
//     for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-1;j++){
//         if(Callback(arr[j],arr[j+1])){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     } 
//    }
// }


// arr.sorting((a,b)=> a>b);


// // a>b: a and b swap
// // dont swap them 

// console.log(arr);


// const obj = {
//     name: "Rohit",
//     age: 20
// }


// obj.sorted = function(){
//     console.log("sorted");
// }

// console.log(obj);

// An array is a special kind of object. Conceptually, its indexed elements can be thought of as key-value pairs where 
// the keys are numeric indexes, but JavaScript engines use specialized internal representations to store arrays efficiently."
