function greet(name) {
  console.log("hello , " + name);
}

greet("Alice");

// sum of 2 numbers
// a and b are parameters (inputs), but they are not used


function add(a, b) {
    return a + b;
}

console.log(add(3, 5));
// flow of execution
// code first sees where the function is being called
// then jumps to the add function
// then assigns the argument to the parameters a =3, b=5
// it then runs the code inside the function body (return 3 + 5;)
// it calculates 3 + 5 = 8
// the return sends the value 8 back to where the function was called
// and add(3, 5) is replaced with 8
// finally console.log(8) is executed and 8 is printed to the console


// even and odd checker

function checkEvenOdd(n) {
    if (n % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkEvenOdd(7)
// when the fuction is called in the last line 
 

// calc area of a rect
function areaOfRectangle(length, width) {
    return 4 * 5;
}

console.log(areaOfRectangle(4, 5));
areaOfRectangle(4, 5);

// celsius to fahrenheit converter
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0));
celsiusToFahrenheit(0);
// fizz buzz function
let n = 10 ;

function fizzBuzz(n) {
    if (n % 3 == 0 && n % 5 == 0) {
        console.log("FizzBuzz");
    } else if (n % 3 == 0) {
        console.log("Fizz");
    } else if (n % 5 == 0) {
        console.log("Buzz");
        // Runs when none of the above are true
    } else {
        console.log(n);
    }
}
fizzBuzz(15);

// leap year checker
// divisible by 4
// NOT divisible by 100, unless it is also divisible by 400
function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("is a leap year: " + true);      
    }
    else {
        console.log("is not aleap year: " + false);
    }
}

isLeapYear(2000);

function addTwoNumbers(x, y) {
    const sum = x + y;
    return sum;

}

// let num = addTwoNumbers(5, 10);

// let num = addTwoNumbers(7, 3);
// function addTwoNumbers(x, y) {
//     const sum = x + y;
//     return sum;
// }


// console.log(num);

