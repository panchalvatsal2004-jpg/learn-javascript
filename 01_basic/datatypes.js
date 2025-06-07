// ✅ DATA TYPES (Primitive & Non-Primitive)

// 🔹 Primitive Types
let str = "hello";                // string
let num = 21;                     // number
let big = 12345678987654321n;     // bigint
let isTrue = false;               // boolean
let notDefined;                   // undefined
let empty = null;                 // null
let sym = Symbol("id");           // symbol

// 🔹 Non-Primitive (Reference) Types

// Object
let user = {
    name: "vatsal",
    age: 21
};

// Array (special type of object)
let arr = ["a", "b", "c"];

// ✅ typeof se data type check karte hain
console.table([typeof str, typeof num, typeof big, typeof isTrue, typeof notDefined, typeof empty, typeof sym, typeof user, typeof arr]);



