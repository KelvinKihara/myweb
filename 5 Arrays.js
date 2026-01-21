// 10 most common array methods in JavaScript
// what a method does
// know what it returns
// know whether its mutable mutating or non-mutating
// let fruits = ["Apple", "Banana", "Orange"];
// forEach()
// Executes a function once for each item in the array (used for performing an action on every element, like printing it to the console or updating a database.
// )returns: undefined. It doesn't return a new array or a value. Its job is just to run the code you give it for each item.
// Mutable?: No. It only reads the items; it doesn't change the array itself.

// map()
// Creates a new array by calling a function on every element of the original array and storing the results
// returns: A new array with the transformed items. The new array will always have the same length as the original.
// Mutable?: No. It is a non-mutating method. The original array is left untouched.

// filter()
// Creates a new array with only the elements that pass a test (i.e., the function you provide returns true). It's for selecting a subset of items.
//  returns: A new array containing only the items that "passed the test". This new array can be shorter than the original, or even empty
// Mutable?: No. It is also non-mutating.


// find() Returns the value of the first element that satisfies the provided testing function. Otherwise undefined is returned.
//  returns: The found element or undefined
//  Mutable?: No. It does not change the original array.
// fruits.find("banana")
// console.log(fruits); // Returns: "Banana"


// reduce() Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
//  returns: The single value that results from the reduction.
//  Mutable?: No. It does not change the original array.


// push() 
// push() Adds one or more elements to the end of an array.
//  returns: The new length of the array.
//  Mutable?: Yes. It changes the original array

// fruits.push("Grapes"); // Add "Grape" to the end
// // console.log(newLength);  // Returns: 4 (the new length)
// console.log(fruits);     // The original array is now MUTATED: ["Apple", "Banana", "Orange", "Mango"]


// pop() Removes the last element from an array and returns that element.
//  returns: The item that was removed.
//  Mutable?: Yes. It changes the original array.
// fruits.pop();
// console.log(fruits); // Returns: "Mango"

// fruits.pop(); // Remove the last item
// // console.log(removedFruit); // Returns: "Mango"
// console.log(fruits);        // The original array is now MUTATED back to: ["Apple", "Banana", "Orange"]

// includes()
// some()
// slice() Extracts a section of an array and returns it as a new array.
//  returns: A new array containing the copied items
// Mutable?: No. This is one of the most important non-mutating methods. It leaves the original array alone.

// join()

// arrays and loops

// let numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// foreach array method 
// runs function once for each element in the array
// adding text to the elemnts 
// for...Of loop
// let fruits = ["Apple", "Banana", "Orange"];

// for (let fruit of fruits) {
//     // fruits is the array 
//     // fruit is a new placeholder (variable) 
//     console.log("I like " + fruit);
// }
// listing items with index 
// for (let i = 0; i < fruits.length; i++) {
//     console.log((i + 1) + ". " + fruits[i]);
// }
// // i + 1 is 0 + 1, which is 1.
// // fruits[i] is fruits[0], which is "Apple".

// // foreach loop to perform an action on each element
// fruits.forEach(fruit => {
//     // fruit => is an arrow function that takes one parameter fruit
//     console.log("I like " + fruit);
//     // fruit is a parameter representing each element in the array during the (iteration) process.
// });

// using while loop 
// used to search for a specific item in an array
// looking for banana 

// let i = 0;
// let fruittofind = "Banana";
// while (i < fruits.length) {
//     if (fruits[i] === fruittofind) {
//         console.log(fruittofind + " found at index " + i);
//         break; // Exit the loop once the fruit is found
//     }
//     i++;
//     // increment i to check the next element
// }

// using pop method to remove items from an array 

// let removedfruit = fruits.pop(); // looks at the array and removes the last item
// console.log("Removed fruit: " + removedfruit); // Outputs: Removed fruit: Orange
// console.log("Updated fruits array after popping: " + fruits); // Outputs: Updated fruits array: Apple,Banana


// i have a list of friend and what to send a hello message 
// make an original list for the friends

// let friends = ["Alice", "Bob", "Charlie"];

// // create an empty array to store messages
// let greetings = [];

// // loops through each name in the friends array
// for (let i = 0; i < friends.length; i++) {
//     let message = "Hello, " + friends[i]; // create a greeting message
//     greetings.push(message); // add the message to the greetings array
// }

// console.log(greetings);


// let colors = ["Red", "Green", "Blue"];

// let text = []

// for (let i = 0; i< colors.length; i++) {
//     let message = "i like " + colors[i]
//     text.push(message); 

// }

// console.log(text);

let prices = [100, 200, 300];

let maxprice

// for (let i = 0; i < prices.length; i++) {

if (prices[0] < prices[1]) {
  
  maxprice = prices[0];     
  prices[0] = prices[1];     
  prices[1] = maxprice; 

if (prices[0] < prices[2]) {
  maxprice = prices[0];
  prices[0] = prices[2];
  prices[2] = maxprice;
}

if (prices[1] < prices[2]) {
  maxprice = prices[1];
  prices[1] = prices[2];
  prices[2] = maxprice;
}


}
console.log("most expensive: " + prices);

