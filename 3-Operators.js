// Arithmetic Operators
let x = 10 + 5; // addition
console.log(x);

let y = 10 - 5; // subtraction
console.log(y);

let z = 10 * 5; // multiplication
console.log(z);

let a = 10 / 5; // division
console.log(a);

// % gaming and loop conditions
// ++ increment increase a number by 1
// -- decrement decrease a number by 1
// ** calculate square

let number2 = 15 * 3;
console.log(number2);


// Assignment Operators
// Assignment operators assign values to JavaScript variables. 

// Given that x=10 and y=5
// =

// += 
x+=y
// same as x=x+y

// -=
x-=y 
// same as x=x-y

// *=
x*=y
// same as x=x*y

// /=
x/=y
// same as x=x/y

// %=
x%=y
// same as x=x%y


let number = 10; 
number = number + 5;

let b = 5;

x+=b; 

let n = 10;
n += 5;
n *= 2;
console.log(n);



let k = 100 + 50 * 3;

console.log(k);
// // Comparison Operators
// Comparison operators are used in logical statements to determine equality or difference between variablesx==8 is false
// or values.
// results to true or false

// Given that x=5

// ==  equal to
x==8 
// is false 

// === is exactly equal to (value and type) 
x===5 
// is true

x==="5" 
// is false

// != is not equal
!(x==y)
// is not equal

// > is greater than 
// < is less than
// >= is greater than or equal to 
// <= is less than or equal to 

let age = 10;
console.log(age >= 18 && age <= 35);
// false bcz 10 is not >=18 bcz && returns first falsy value
console.log(age < 20 || age > 60);
// true bcz 10 < 20 bcz || returns first truthy value
console.log(age < 18 && "you are a child");
 // you are a child bcz theres no falsy value so we check for the last truthy value
console.log(age >= 18 && age <= 35 && "you are an adult");
// false bcz age >=18 is false and && returns first falsy value
console.log(age >= 18 && age <= 35 && "you are among the youth");
// false bcz age >=18 is false and && returns first falsy value
console.log(age >= 18 && age <= 35 || "you are not among the youth");



// // Logical Operators

// Given that x=6 and y=3

// && // AND 
// Returns the first “falsy” value if there is one, otherwise returns truthy as the last value.
(x < 10 && y > 1) 

// || // OR 
// Returns the first “truthy” value if there is one, otherwise returns falsy as the last value.

(x==5 || y==5) 
// is false

// !  // NOT 
!(x==y) 
// is true

console.log("" && "Hello"); 
// "" first falsy
console.log("" || "World");
//  hello first truthy
console.log(0 || 7);
//  7 first truthy
console.log("hey there" && "false" && true); 
// true last truthy
console.log(0 || "" || "false"); 
// "false" first truthy

