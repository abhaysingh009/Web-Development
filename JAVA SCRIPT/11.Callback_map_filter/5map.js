
const arr = [10,20,40,73,18];

// const newArr = arr.map((num)=> num*5);// applies on all elements 

// console.log(newArr);
 callback=(num)=>5*num
Array.prototype.ownMap=function(callback){
    for(let i=0;i<arr.length;i++){// use this instead of arr to work with array that is calling it 
        arr[i]=callback(arr[i]); // here i modified original array but map returns a new array you can also store res in new array and return that array
        // without modifying original array
    }
}
arr.ownMap(callback);
console.log(arr)
// reducer function