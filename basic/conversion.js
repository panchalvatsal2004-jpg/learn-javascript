// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

// 1=> true;
// 0=> false;
// "vatsal" => true;
// "" => false


// ***********************Conversions**************************//

// Conversion ka matlab hai kisi value ko ek data type se doosre data type mein badalna

// example 1 : number to String
let score = 33;
console.log(score);
console.log(typeof score);
// // convert karne ke liye ek or new variable banana padega
let numbertostring = String(score);
console.log(numbertostring);
console.log(typeof numbertostring);



//example 2:string to number
let total = "33"
console.log(total);
console.log(typeof total);

let stringtonumber = Number(total)
console.log(stringtonumber);
console.log(typeof stringtonumber);


// example 3:
let login = true
console.log(typeof login);

let logintostring = String(login)
console.log(logintostring);
console.log(typeof logintostring);

// example 4:
let user = "vatsal";
console.log(user);
console.log(typeof user);

let userToNumber = Number(user)
console.log(userToNumber);
console.log(typeof userToNumber);



// importanat notes:

let a = 10
let b = 20
let c = 30
// console.log(a+b*c); // logic: a + (b * c)
// console.log((a+b)*c); // logic: (a + b) * c

//

console.log("1" + 2);
console.log(1+"2");

console.log(2+2+"2"); // last me string hoga toh fisrt vala count or last vala jud jaega
console.log("2"+2+2); // fisrt value string hogi toh last me sab string me convert ho jaega







