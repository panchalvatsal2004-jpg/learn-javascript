// ✅ VARIABLES & DATA TYPES

// 🔹 Variables ek container hote hain jisme hum data store karte hain

// 🔸 Declaration Methods:
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

// ✅ Output methods
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);

// 🔸 var allow karta hai dobara declare karna
var x = 10;
var x = 20; // allowed
console.log(x);

// 🔸 let sirf reassign allow karta hai
let y = 10;
y = 20; // ✅ allowed
console.log(y);

// 🔸 const kuch bhi change nahi hone deta
const z = 30;
console.log(z);


// ✅ DATA TYPES (Primitive & Object)

// 🔹 Primitive Types
let str = "hello"; // string
let num = 21; // number
let big = 12345678987654321n; // bigint
let isTrue = false; // boolean
let notDefined; // undefined
let empty = null; // null
let sym = Symbol("id"); // symbol

// 🔹 Object Types
let user = {
  name: "vatsal",
  age: 21
};

let arr = ["a", "b", "c"];

// ✅ typeof se data type check karte hain
console.table([
  typeof str,
  typeof num,
  typeof big,
  typeof isTrue,
  typeof notDefined,
  typeof empty,
  typeof sym,
  typeof user,
  typeof arr
]);
