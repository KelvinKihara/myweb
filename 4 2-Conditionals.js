// compare two values and return a boolean (true or false). They are useful for making decisions in conditional statements. 

// if statement - use this statement if you want to execute some code only if a specified condition is
// true

// let score = 40;

// if (score > 60) {
//   console.log("You passed!");
// }

// let a = false;
// if (a ) {
//   console.log("number");
// }

//  if...else statement - use this statement if you want to execute some code if the condition is true
// and another code if the condition is false
// if (score > 60) {
//   console.log("You passed!");
// }
// else{
//   console.log("You failed.");
// }

//  if...else if....else statement - use this statement if you want to select one of many blocks of code to
// be executed
// if (score > 60) {
//   console.log("You passed!");
// } else if (score == 60) {
//   console.log(" average");
// } else {
//   console.log("You failed.");
// }

//  switch statement - use this statement if you want to select one of many blocks of code to be
// executed 
// let lowerlimit = 10;
// let upperlimit = 35;
// let age = 24;
// // Returns the first “falsy” value if there is one, otherwise returns truthy as the last value.

// if (age >= lowerlimit && age <= upperlimit) {
//   console.log("you are among the youth");
// }
// else {
//   console.log("you are not youth");
// }

// if elseif else 
//   3 - 9 -> lower primary
// 10 - 13 -> upper primary
// 14 - 17 -> high school
// 19 - 22 -> college
// 24 - ... -> not in 844

// let age = 2;

// if (age >= 3 && age <= 9) {
//   console.log("lower primary");
// } else if (age >= 10 && age <= 13) {
//   console.log("upper primary");
// } else if (age >= 14 && age <= 17) {
//   console.log("high school");
// } else if (age >= 19 && age <= 22) {
//   console.log("college");}
// else {
//   console.log("not in 844");
// }

// let age = 2;

// // check if age is even in the possible range
// if (age >= 3) {
//   // If we're here, we know age is 3 or greater.
//   // Now we can check the upper bounds in order.
//   //  nested version if (age >= 3) { if (age <= 9) { ... } } means "if age is >= 3, then check if age is <= 9". The result is the same.
//   if (age <= 9) {
//     console.log("lower primary");
//   } else if (age <= 13) { // We already know age > 9, so we just check the top end
//     console.log("upper primary");
//   } else if (age <= 17) { // We already know age > 13
//     console.log("high school");
//   } else if (age <= 22) { // We already know age > 17
//     console.log("college");
//   } else {
//     // Age is >= 3 but doesn't fit any other category
//     console.log("age is not in any defined category");
//   }
// } else {
//   // This single 'else' catches any age less than 3
//   console.log("age is not in any defined category");
// }


// switch statement
// You are checking one variable against many specific values.
// let amount = 1000;
// switch (true) {
//   case amount < 50:
//     console.log("You can buy a snack");
//   case amount < 100:
//     console.log("You can buy a meal");
//   case amount < 200:
//     console.log("You can buy a gift");
//   default:
//     console.log("You can buy a luxury item");
// }

// if (gender == "male") {
//   gift = "socks";
// } else if (gender == "female") {
//   gift = "jewelry";
// } else {
//   gift = "no idea";
// }


// // ternary operator
// let gender = "female";
// gift=
// gender == "male" ? "socks"
// : gender == "female" ? "jewelry"
// : "no idea";

// console.log(gift);
