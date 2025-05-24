// JavaScript Variables

// Variable ek container hota hai jisme hum data store karte hain.
// JavaScript me variable declare karne ke 3 tarike hain: var, let, const

// 1. var - Purana tarika (Use avoid karna chahiye)
// Function scoped hota hai (block scoped nahi)
// Redeclare aur reassign dono allowed hai

var a = 10;
var a = 20; // allowed, lekin confusion create kar sakta hai
console.log(a); // Output: 20

// Note: var ka use avoid karo kyunki ye bugs create kar sakta hai

// 2. let - Modern aur recommended tarika
// Block scoped hota hai
// Redeclare nahi kar sakte, lekin reassign kar sakte ho

let b = 15;
// let b = 25; // Error: b already declared
b = 25; // allowed
console.log(b); // Output: 25

// 3. const - Jab value fix ho
// Block scoped hota hai
// Na redeclare kar sakte ho, na reassign

const c = 30;
// const c = 40; // Error: already declared
// c = 40;       // Error: assignment to constant variable
console.log(c); // Output: 30

// Extra Example

const accountId = 12345; // constant value
let accountEmail = "vatsal@gmail.com"; // change ho sakti hai
var accountPassword = 1234; // avoid using var
accountCity = "Jaipur"; // bina keyword ke declare hua, global variable ban gaya
let accountState; // value assign nahi ki, isliye undefined hoga

// Value change karte hue
accountEmail = "abc@gmail.com";
accountPassword = 5678;
accountCity = "pune";

// Output methods
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
