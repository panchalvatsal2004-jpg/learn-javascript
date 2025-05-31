let str = "   JavaScript is awesome!   ";

// Important string methods:
console.log(str.length);              // String ki length (size) ke liye
console.log(str.trim());              // Aage-piche ke spaces hata deta hai
console.log(str.toUpperCase());       // String ko uppercase me convert karta hai
console.log(str.toLowerCase());       // String ko lowercase me convert karta hai
console.log(str.slice(0, 10));        // 0 se 9 tak ka part dikhata hai
console.log(str.includes("is"));      // String me "is" hai ya nahi, true/false dega
console.log(str.charAt(4));           // 4th index ka character
console.log(str.indexOf("a"));        // Pehli baar "a" kaha aaya, uska index
console.log(str.replace("awesome", "great")); // "awesome" ko "great" se replace karta hai
console.log(str.repeat(3));           // String ko 3 baar repeat karta hai
console.log(str.split(" "));          // String ko array me convert karta hai (space ke hisab se)
