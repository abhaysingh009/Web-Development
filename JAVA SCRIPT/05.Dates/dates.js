// const now = new Date();
// console.log(now); 
// Prints the current date and time
// It is created based on your device's local time (internally stored in UTC)

// console.log(now.toString());
// Converts the date object to a readable string in local time


// Various formats to get date and time according to local time
// console.log(now.toLocaleTimeString()); // Time only (local)
// console.log(now.toISOString());         // ISO format (always UTC)
// console.log(now.toDateString());        // Date only (readable)
// console.log(now.toLocaleString());      // Date + time (local)
// console.log(now.getTime());             // Timestamp (milliseconds since Jan 1, 1970)
// console.log(now.getDate());             // Day of the month (1–31)
// console.log(now.getHours());            // Hour (0–23)
// console.log(now.getMonth());             
// Month starts from 0
// 0 = January, 1 = February, ..., 11 = December


// year, month, date, hour, minute, second, millisecond
// const now = new Date(2025, 11, 23, 8, 25, 16, 125);
// Month is 0-based, so 11 = December
// This creates a custom date (in local time)
// console.log(now);


// Timestamp
const n = Date.now();
console.log(n); 
// Returns current timestamp (milliseconds since Jan 1, 1970)

const dates = new Date(n);
console.log(dates);
// Converts timestamp back to Date object (utc)

console.log(dates.toString());
// Displays the date in a readable local-time format
