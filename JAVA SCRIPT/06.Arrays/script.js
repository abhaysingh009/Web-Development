// let arr = [1, 2, 'abhay']
// console.log(arr)

// console.log(arr[0], arr[2]) // access elements using index

// arr[2] = 8 // modifying an element

// console.log(arr)

// ================= Array operations =================

// arr.push("as")  // adds a new element at the end
// arr.push("1")

// console.log(arr)

// arr.pop()  // removes the last element
// console.log(arr)

// arr.unshift(10)  
// adds element at the beginning 
// (NOT recommended for large arrays because it shifts all elements)
// console.log(arr)

// arr.shift() 
// removes element from the beginning 
// (NOT recommended for large arrays because of shifting)
// console.log(arr)


// ================= Traversing arrays =================

// let arr = [10, 30, 50, 90, 11]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]) // traditional for loop
// }

// for (let num of arr) { 
//     // for...of loop (similar to forEach, but simpler)
//     console.log(num)
// }


// ================= Reference behavior =================

// let arr1 = [10, 30, 50, 90, 11]
// let arr2 = arr1  // both point to the same array in memory

// arr1.push(890)

// console.log(arr2) 
// arr2 will also include 890 because arrays are objects 
// and objects are copied by reference

// console.log(typeof arr1) // "object"


// ================= const with arrays =================

// const arr = [10, 20, 40, 83, 92]

// arr = [92, 92, 9893] 
// ❌ NOT allowed: cannot reassign a const array

// arr[0] = 90290  // ✅ allowed: modifying existing elements
// arr.push(828)   // ✅ allowed: manipulating the same array

// console.log(arr)


// ================= slice vs splice =================

// console.log(arr.slice(1, 4)) 
// slice(start, end)
// returns a NEW array
// original array remains unchanged

// console.log(arr)

// console.log(arr.splice(1, 3)) 
// splice(startIndex, deleteCount)
// removes elements from the ORIGINAL array

// console.log(arr)

// arr.splice(1, 3, "abhay", 810)
// removes 3 elements starting from index 1
// then inserts "abhay" and 810 at that position

// console.log(arr)


// ================= Combining arrays =================

// const arr = [10, 82, 92, 3, 2, 49, 93]
// const arr2 = [93, 82, 9272, 726, 72]
// const arr3 = [763, 82, 674, 922]

// const arr4 = arr.concat(arr2, arr3) 
// combines arrays and returns a new array

// const arr4 = [arr, arr2, arr3] 
// creates an array of arrays (nested array)

// const arr4 = [...arr, ...arr2, ...arr3] 
// spread operator: modern and preferred way to merge arrays

// console.log(arr4)


// ================= Array to string =================

// let str = arr.toString() 
// converts array into a single string

// console.log(typeof str, str)

// console.log(arr.join(":")) 
// similar to toString but allows custom separator (:, space, etc)


// ================= Searching in array =================

// const arr = ["Alice", "Rohit", "Bob", "Mohit", "Charlie", "Bob"]

// console.log(arr.indexOf("Bob"))     
// returns first index of occurrence or -1

// console.log(arr.lastIndexOf("Bob")) 
// returns last index of occurrence or -1

// console.log(arr.includes("Bob"))    
// returns true or false


// ================= Sorting =================

// arr.sort() 
// sorts elements as strings (ASCII-based sorting)

// arr.reverse()
// console.log(arr)

// const arr = [10, 83, 932, 729, 73, 62, 190]
// arr.sort()
// console.log(arr)
// sorted incorrectly for numbers because it compares as strings


// ================= Numeric sorting =================

// const arr = [10, 82, 62, 916, 6522, 0, 182]
// arr.sort((a, b) => a - b) 
// correct numeric ascending sort

// console.log(arr)


// ================= Nested arrays =================

const arr = [10, 20, [90, 87, [73, 91, 43], 76], 30]
//           |   |    |   |    0    1   2    |    |
//           |   |    0   1        2         3    |
//           0   1            2                   3

// Accessing elements
// console.log(arr[2])          // [90,87,[73,91,43],76]
// console.log(arr[2][0])       // 90
// console.log(arr[2][2][0])    // 73


// ================= Flattening arrays =================

console.log(arr.flat())     
// flattens 1 level
// [10,20,90,87,[73,91,43],76,30]

console.log(arr.flat(2))    
// flattens 2 levels
// [10,20,90,87,73,91,43,76,30]

// arr.flat(Infinity)
// flattens all nested levels
// returns a NEW array


// ================= Important concept =================

// In JavaScript, arrays are NOT true arrays like in C/C++.
// Internally, an array is a special type of OBJECT 
// with numeric keys and a length property.
