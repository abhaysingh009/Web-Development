
const arr = [10,20,8,19,14,23];

// foreach is a method of array we are pasing an arrow function in it
// arr.forEach((num)=>{console.log(num)})
// // print with index
// arr.forEach((num,idx)=>{console.log(num,idx)})
// // print array also
// arr.forEach((num,idx,arr)=>{console.log(num,idx,arr)})

// const printer = (num)=>{
//     console.log(num);
// }

// printer(20);


// internally how forEach function is working........  
// imp--> in js if arguments are more than paramenters then extra arguments are ignored  
Array.prototype.forLoop = function(Callback){
    for(let i=0;i<arr.length; i++){
        Callback(arr[i],i,arr);
    }
   
}
arr.forLoop((val,i,arr)=>{console.log(val,i,arr)})





// or 
// arr.forLoop((num,index)=>{
//     console.log(num,index);
// });



// const arr = [10,20,8,19,14,23];

// // First value number, second: index, third: array 
// arr.forEach((i,j,k)=>{
//    console.log(i,j,k);
// })



// function aditya(num1){
//    console.log(num1);
// }
// aditya(10,20,"Rohit");// extra arg will be ignored

// A normal function is simply a function that you define and call when you want.
// A callback function is a function that you pass to another function, so that the other function can call it later.