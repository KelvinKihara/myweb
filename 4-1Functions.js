
// JavaScript reads the code top to bottom.
// JavaScript does not execute the function now

// It just stores the function in memory for later use
// Executed immediately
// console.log("Hey there");


console.log("Hey there");


function callMe() {
    console.log("i have been called");
}

callMe();


console.log("Hey");


// Arrow Functions Function Expression not hoisted 
// const greet = (name) => {
//     console.log(`Hello, ${name}`);
// }

// greet("Kelvin");

// let and const are not accessible before declaration (they exist in the temporal dead zone).

// sayHello()
// const sayHello = () {
//     console.log("Hello kk");
// }

// sayHello();

// let sayHello = function () {
//   console.log("Hello");
// };

