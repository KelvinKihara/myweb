// Loops in JavaScript are used to execute the same block of code a specified number of times or while
// a specified condition is true.

// The for loop is used when you know in advance how many times the script should run.

// loop will continue to run as long
// as i is less than, or equal to 10. i will increase by 1 each time the loop runs.


// for - loops through a block of code a specified number of times
//  while - loops through a block of code while a specified condition is true
// Syntax for (initialization; condition; update) {
  // code to run


// for (let i = 0; i <= 5; i++) {
//   console.log( i );
// }



// let hobby = ["coding", "reading", "gaming"];
// for (let i = 0; i < hobby.length; i++) {
//   console.log(hobby[i]);
// }


// loop inside a loop
// i++ to increase the value  till 6and prevent from reapeation
// for (let i = 1; i <= 5; i++) {
//   console.log(i);

//   for (let j = 1; j <= 3; j++) {
//     console.log("hello: " + j); 
// }

// }


// syntax
// while (condition) {
  // code block to be executed
// }

// let i = 0; // Initialization
// while (i < 10) { // Condition check (true/false)
//   console.log(i); // Executes, printing the current value of i
//   i++; // Executes, increasing the value of i by 1.
//   // The variable i is now 1.
//   // repeats the loop until i is no longer less than 10
//   // The Final Loop will print numbers from 0 to 9
// }


// do..while loop - is similar to the while loop, except that the code block is executed at least once(its a logic)
// Syntax
// do {
//   // code to run
// } while (condition);

// let i = 1; // Initialization
// do {
//   console.log("hello " + i); // First, console.log("hello " + i); runs.
//   // Output: hello 1
//   i++; // Second, i++; runs, increasing the value of i by 1.
//   // The variable i is now 2.
// } while (i <= 5); 
// // After the do block finishes, the program checks the condition at the end: i <= 5
// // so 2 <= 5 is true, so the loop runs again.
// // This process repeats until i is no longer less than or equal to 5.

// break/continue statements
// The break statement is used to exit a loop or a switch statement before it has completed its normal
// execution.

for (let i = 1; i <= 5; i++) {
  // for loops starts i is initialized to 1
  // condition is checked if i is less than or equal to 5
  // if true the code block is executed


    if (i === 3) {
      // if statement checks if i is equal to 3
      // because the if condition is false the code inside it (breaks) is skipped
      // the program continues to the next line
      // output 1 and after the increment 2
    break;
}
console.log(i);
}



for (let i = 1; i <= 5; i++) {
//   The for loop starts. i is initialized to 1.
// The condition i <= 5 is checked. Is 1 <= 5? True.
// The loop body is entered.

    if (i === 3) {
    continue;
}
console.log(i);
}
