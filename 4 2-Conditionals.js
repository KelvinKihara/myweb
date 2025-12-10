// compare two values and return a boolean (true or false). They are useful for making decisions in conditional statements. 

// if statement - use this statement if you want to execute some code only if a specified condition is
// true

let score = 40;

if (score > 60) {
  console.log("You passed!");
}

//  if...else statement - use this statement if you want to execute some code if the condition is true
// and another code if the condition is false
if (score > 60) {
  console.log("You passed!");
}
else{
  console.log("You failed.");
}

//  if...else if....else statement - use this statement if you want to select one of many blocks of code to
// be executed
if (score > 60) {
  console.log("You passed!");
} else if (score == 60) {
  console.log(" average");
} else {
  console.log("You failed.");
}

//  switch statement - use this statement if you want to select one of many blocks of code to be
// executed 
