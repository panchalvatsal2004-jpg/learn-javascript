//  1️⃣ concat() Method
//  Ye method 2 ya 3 arrays ko jodta hai.
let arr1 = ["apple", "banana"];
let arr2 = [1, 2, 3];
let arr3 = ["kiwi", "mango"];

let merged1 = arr1.concat(arr2, arr3);
console.log("Using concat:", merged1);
// Output: ["apple", "banana", 1, 2, 3, "kiwi", "mango"]


// 2️⃣ Spread Operator (...)
/*
 ... ka matlab hai: array ke andar ki cheez ko bahar nikal do.
 Ye bhi arrays ko merge kar deta hai.
*/
let merged2 = [...arr1, ...arr2, ...arr3];
console.log("Using spread:", merged2);
// Output: ["apple", "banana", 1, 2, 3, "kiwi", "mango"]


// 3️⃣ flat() Method
/*
Ye nested arrays (andar dabbe) ko ek hi level pe la deta hai.
 flat(Infinity) se sab level ke arrays khul jate hain.
*/
let nestedArr = [1, 2, [3, 4, [5, 6]]];
let flatArr = nestedArr.flat(Infinity);
console.log("Using flat:", flatArr);
// Output: [1, 2, 3, 4, 5, 6]


// 🌟 4️⃣ Array.of() Method
/*
 Ye method naya array banata hai.
Jo bhi cheez do, sab ek array me le aata hai.
*/
let name1 = "vatsal";
let name2 = "yash";
let name3 = "moon";

let newArray = Array.of(name1, name2, name3);
console.log("Using Array.of:", newArray);
// Output: ["vatsal", "yash", "moon"]
