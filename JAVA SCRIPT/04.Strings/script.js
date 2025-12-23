// Strings

// const str = 'I am string 1'
// const str2 = `I am string 2`
// const str3 = "I am string 3"

// console.log(str, str2, str3);


// ❌ Multiline strings are NOT allowed with single quotes
// const str = 'I  
// am string 1'   
// This throws an error because single quotes cannot span multiple lines


// ❌ Multiline strings are NOT allowed with double quotes
// const str3 = "I 
// am string 3"   
// This also throws an error for the same reason


// ✅ Multiline strings using template literals
// const str2 = `I 
// am string 2`   
// Template literals allow multiline strings
// This is why this method is modern and preferred


// String interpolation (injecting variables into a string)
// let age = 18
// const str = `My age is ${age}`
// console.log(str); 
// Prints the string along with the value of age


// const str = `Hello everyone`

// console.log(str.length); 
// Prints the length of the string (including spaces)

// console.log(str[0]);     
// Prints the first character of the string


// Case conversion
// console.log(str.toUpperCase()); 
// Converts string to uppercase

// console.log(str.toLowerCase()); 
// Converts string to lowercase


// Searching in strings
// console.log(str.includes('H')); 
// Checks whether a character or substring exists (returns true/false)

// console.log(str.search('y'));   
// Returns the index of 'y'; returns -1 if not found


// Finding index of substrings
// const str = `Hello everyone ever`

// console.log(str.indexOf('ever'));     
// Returns the starting index of the FIRST occurrence of 'ever'
// Returns -1 if not found

// console.log(str.lastIndexOf('ever')); 
// Returns the starting index of the LAST occurrence of 'ever'


// Slicing strings
// const str = `Hello everyone ever`
// console.log(str.slice(0, 3));  
// 0 is included, 3 is excluded → "Hel"


// Replacing strings
// console.log(str.replace('eve', 'any'));     
// Replaces ONLY the first occurrence

// console.log(str.replaceAll('eve', 'any'));  
// Replaces ALL occurrences


// Trimming whitespace
// const str2 = " abhay "

// console.log(str2.trim());      
// Removes spaces from both start and end

// console.log(str2.trimStart()); 
// Removes spaces only from the start

// console.log(str2.trimEnd());   
// Removes spaces only from the end


// Splitting strings
const str = 'Alice,Bob:Tom,Henry'

console.log(str.split(':')); 
// Splits the string using ':' as the separator
// Returns an array → ["Alice,Bob", "Tom,Henry"]
