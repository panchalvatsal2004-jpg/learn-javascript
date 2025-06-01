let mydate = new Date(); // current date aur time
console.log(mydate); // 2025-06-01T05:15:10.123Z

console.log(mydate.getDate()); // 1

console.log(mydate.getHours()); // 5

console.log(mydate.getMinutes()); // 15

console.log(mydate.getSeconds()); // 10

console.log(mydate.getMilliseconds()); // 123

console.log(mydate.toDateString()); // Sun Jun 01 2025

console.log(mydate.toString()); // Sun Jun 01 2025 05:15:10 GMT+0000 (Coordinated Universal Time)

console.log(mydate.toLocaleDateString()); // 6/1/2025

console.log(mydate.toLocaleString()); // 6/1/2025, 5:15:10 AM

console.log(mydate.toTimeString()); // 05:15:10 GMT+0000 (Coordinated Universal Time)
