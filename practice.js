function greet(name) {
  console.log("hello , " + name);
}

greet("Alice");

// sum of 2 numbers
function add(a, b) {
    return 3 + 5;
}

add(3, 5);
console.log(add(3, 5));

// even and odd checker

function checkEvenOdd(n) {
    if (n % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkEvenOdd(7)

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
    } else {
        console.log(n);
    }
}
fizzBuzz(15);

// leap year checker 
function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 == 0)) {
        console.log("is a leap year: " + true);      
    }
    else {
        console.log("is a leap year: " + false);
    }
}

isLeapYear(2007);
