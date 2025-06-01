// Array: multiple items ko ek single variable me store karne ke liye array ka use hota hai

// ✅ Array declaration
// Array ko declare karne ke liye [] ka use hota hai
// Array ki indexing 0 se start hoti hai
// Example:

let fruits = ["apple", "banana", "kiwi", "mango"]; // multiple items store kiye ek single variable me
console.log(fruits);          // ["apple", "banana", "kiwi", "mango"]
console.log(fruits[2]);       // "kiwi" - Array indexing 0 se start hoti hai

// ✅ Array methods:

// 1️⃣ push() - Array ke last me ek item ko add karta hai
let a = ["apple", "kiwi", "mango"];
a.push("banana");
console.log(a);               // ["apple", "kiwi", "mango", "banana"]

// 2️⃣ pop() - Array ke last item ko remove karta hai
let arr = ["apple", "banana", "kiwi", "chary"];
arr.pop();
console.log(arr);             // ["apple", "banana", "kiwi"]

// 3️⃣ unshift() - Array me first item add karta hai
let b = ["apple", "banana", "kiwi"];
b.unshift("mango");
console.log(b);               // ["mango", "apple", "banana", "kiwi"]

// 4️⃣ shift() - Array ke first item ko remove karta hai
let newArr = ["apple", "banana", "kiwi"];
newArr.shift();
console.log(newArr);          // ["banana", "kiwi"]

// 5️⃣ slice() - Naya array banata hai, start index se end index tak (end index include nahi hota)
let x = ["vatsal", "yash", "rahul", "herry", "aditi"];
let y = x.slice(1, 4);
console.log(y);               // ["yash", "rahul", "herry"]

// 6️⃣ splice() - Array me se items ko remove ya add karta hai
let num = [1, 2, 3, 4, 5];

// Remove karna ho:
num.splice(1, 3);             // index 1 se 3 items remove honge (2,3,4)
console.log(num);             // [1, 5]

// Add karna ho:
num.splice(1, 0, "vatsal", "rahul"); // index 1 se 0 items remove kar ke ye items add honge
console.log(num);             // [1, "vatsal", "rahul", 5]


// ✏️ Summary:
// - Indexing 0 se start hoti hai
// - slice() original array ko nahi badalta
// - splice() original array ko modify karta hai
