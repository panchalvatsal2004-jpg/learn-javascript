// ✅ OPERATORS

// Arithmetic Operators (mathematical operations)
let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3333
console.log(a % b);  // 1 (remainder)
console.log(2 ** 3); // 8 (power)

// Assignment Operators (value assign ya update karna)
let score = 10;
score += 5;  // score = score + 5 (15)
score -= 2;  // score = score - 2 (13)
score *= 2;  // score = score * 2 (26)
score /= 2;  // score = score / 2 (13)
console.log(score);

// Comparison Operators (values compare karna)
console.log(5 == "5");   // true (sirf value check)
console.log(5 === "5");  // false (value aur type dono check)
console.log(5 != 6);     // true
console.log(5 !== "5");  // true
console.log(5 > 3);      // true
console.log(5 < 3);      // false
console.log(5 >= 5);     // true
console.log(5 <= 4);     // false

// Logical Operators (true/false logic)
// AND (&&) => dono true hone par true, warna false
let isAdult = true;
let hasLiecence = false;
console.log(isAdult && hasLiecence);  // false (kyunki hasLiecence false hai)
console.log(isAdult || hasLiecence);  // true  (koi bhi ek true ho to true)
console.log(!isAdult);          // false (NOT, opposite karta hai)



// imp notes avoid:


/*
✅ JavaScript me `null` aur `undefined` ka Comparison - Simple Notes

1️⃣ null aur undefined kya hote hain?
- null → khaali ya kuch nahi
- undefined → variable bana diya, par usme koi value nahi dali

2️⃣ Comparison operators (<, >, >=, <=) ke saath kya hota hai?
- null → number me convert ho jaata hai (0)
- undefined → number me convert hota hai, par ban jaata hai NaN (Not a Number)

3️⃣ == operator ke saath kya hota hai?
- null sirf undefined ke equal hota hai.
- Examples:
  - null == undefined → true
  - null == 0 → false
  - undefined == 0 → false

4️⃣ === operator ke saath kya hota hai?
- === value aur type dono check karta hai.
- Examples:
  - null === undefined → false
  - null === null → true
  - undefined === undefined → true

5️⃣ Examples for Comparison:
console.log(null > 0);      // false (null → 0; 0 > 0 → false)
console.log(null >= 0);     // true  (null → 0; 0 >= 0 → true)
console.log(null == 0);     // false (null sirf undefined ke equal hota hai)

console.log(undefined > 0);  // false (undefined → NaN; NaN > 0 → false)
console.log(undefined >= 0); // false (undefined → NaN; NaN >= 0 → false)
console.log(undefined == 0); // false (undefined sirf null ke equal hota hai)

🌟 Final Yaad Karne Wala Point:
- null → 0 ban jaata hai comparisons me
- undefined → NaN ban jaata hai comparisons me
- null aur undefined sirf aapas me == hote hain (true), kisi aur ke nahi
*/

