// object literals syntax:

const user = {
    
}

// Object literal syntax ka example
const person = {
    name: "panchal vatsal",  // key: name, value: "panchal vatsal"
    age: 21,
    gmail: "vatsal123@gmail.com",
    gender: "male",
    address: "jashodanagar"
};

console.log(person);

// Object ki property access karne ki method 1: dot notation
console.log(person.gmail);

// Object ki property access karne ki method 2: bracket notation (keys by default string hoti hain)
console.log(person["address"]);

// Kisi key ki value change karna
person.name = "virat kohli";
console.log(person);

// Nayi property add karna
person.phone = "9876543210";
console.log(person);

// Property delete karna
delete person.age;
console.log(person);

// Object ko freeze karna taki uske properties change na ho sakein
Object.freeze(person);

// Freeze karne ke baad value change karne ki koshish (ye change nahi hogi)
person.name = "chai or code";
console.log(person);  // ab bhi "virat kohli" hi rahega

// **********************************************************************
// Interview question: Symbol ko object ki key banake dikhana

// Symbol banana jiska description "user-id" hai
const sym = Symbol("user-id");

// Symbol ko object ki key banana (bracket notation use karna zaroori hai)
const user1 = {
    [sym]: "key1"
};

console.log(user1);

/*
Samjhauta:
- Symbol("user-id") ek unique symbol banata hai jiska description "user-id" hota hai.
- Description debugging me madad karta hai, lekin symbol hamesha unique hota hai.
- Symbol ko object me key banane ke liye bracket notation [sym] lagani padti hai.
- Is key ke andar "key1" value store ki gayi hai jo user ka unique id dikhata hai.
- Jab object print karte hain toh symbol key normal string key se alag dikhti hai.
- Symbol keys collision se bachati hain aur unique rehti hain.
*/
