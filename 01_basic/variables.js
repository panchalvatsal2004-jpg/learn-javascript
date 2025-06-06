// VARIABLES & DATA TYPES

// Variables ek container hote hain jisme hum data store karte hain

// Declaration Methods:
// var - purana tareeka, function scoped, use mat karo
// let - block scoped, value change kar sakte ho
// const - block scoped, value ek baar hi set hoti hai

const accountId = 12345;
let accountEmail = "vatsal@gmail.com";
var accountPassword = 2512;
accountCity = "jaipur"; // bina keyword ke, global ban jata hai
let accountState; // sirf declare, value undefined

// Value change karna:
// accountId = 54321; ❌ not allowed (const)
accountEmail = "panchal@gmail.com"; // ✅ allowed
accountPassword = 2004; // ✅ allowed


accountCity = "gandhinagar"; // ✅ allowed

// Output methods
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);

// var allow karta hai dobara declare karna
var x = 10;
var x = 20;
console.log(x);

// let sirf reassign allow karta hai
let y = 10;
y = 20;
console.log(y);

// const kuch bhi change nahi hone deta
const z = 30;
console.log(z);
