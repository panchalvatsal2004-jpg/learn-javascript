// 1. if statement
if (condition) {
  // condition true ho to yeh chalega
}

// 2. if-else statement
if (condition) {
  // true hone pe yeh chalega
} else {
  // false hone pe yeh chalega
}

// 3. if-else if-else
if (condition1) {
  // condition1 true hone pe yeh chalega
} else if (condition2) {
  // condition2 true hone pe yeh chalega
} else {
  // sab false hone pe yeh chalega
}

// 4. Nested if
if (condition1) {
  if (condition2) {
    // dono conditions true hone par yeh chalega
  }
}

// 5. Logical Operators in conditions
// && means AND, dono true honi chahiye
if (condition1 && condition2) {
  // yeh chalega
}
// || means OR, koi ek true ho to chalega
if (condition1 || condition2) {
  // yeh chalega
}
// ! means NOT, condition ka opposite
if (!condition) {
  // jab condition false ho to yeh chalega
}

// 6. switch statement
switch (expression) {
  case value1:
    // agar expression value1 ke barabar ho to yeh chalega
    break;
  case value2:
    // agar expression value2 ke barabar ho to yeh chalega
    break;
  default:
    // agar koi case match nahi hua to yeh chalega
}


// examples :


// 1. if
let age = 20;
if(age >= 18){
  console.log("Adult");
}

// 2. if-else
let age2 = 16;
if(age2 >= 18){
  console.log("Adult");
} else {
  console.log("Minor");
}

// 3. if-else if-else
let marks = 85;
if(marks >= 90){
  console.log("Grade A+");
} else if(marks >= 75){
  console.log("Grade A");
} else {
  console.log("Fail");
}

// 4. Nested if
let agee = 14
let voterid = true

if (agee >= 18) {
    if (voterid) {
        console.log("ok");
    }

}
else {
    console.log("error");

}
// 5. Logical Operators
if(age >= 18 && hasID){
  console.log("Allowed");
}
if(age >= 18 || hasID){
  console.log("Maybe allowed");
}
if(!hasID){
  console.log("No ID");
}

// 6. switch
let day = "monday";
switch(day){
  case "monday":
    console.log("Week start");
    break;
  case "sunday":
    console.log("Holiday");
    break;
  default:
    console.log("Normal day");
}
