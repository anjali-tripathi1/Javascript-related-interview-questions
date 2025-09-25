 
 // Qu. What is javascript ? Why do We use this ?
 // Ans. JavaScript is a high-level, interpreted programming language that is primarily used to create interactive and dynamic content on websites.JavaScript was originally created by Brendan Eich in 1995 and has since become a versatile and powerful language used both on the client-side (in the browser) and server-side (using environments like Node.js).  

 // Qu. What is Diffrence Between Javascript and Java ?
 // Ans. JavaScript and Java are fundamentally different in purpose, design, and use. 
      //   Javascript is a scripting language. It's interpreted by web browsers (or node.js) this is used for primarily for web devlpoment (frontend and backend with node.js) and it's syntax is light weight and dynamic typing.
    //  Java is a Object-oriented programming language it runs in JVM (Java virtual Machine). and Used for backend applications, Android development, desktop apps. it's syntax is strict and statially typed.

 // Qu. Javascript is a dynamically type language or statically type language ?
 // Ans. Javascipt is a dynamically typed language.   

 // Qu. what is node js ? and Who is the founder of node.js and deno ?
 // Ans. Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript code outside of a web browser—typically on a server. It was created by Ryan Dahl in 2009 and is built on Google Chrome's V8 JavaScript engine. and deno is also created by  Ryan Dahl in 2020 It was created
 // as a modern replacement of node.js addressing several design regrets he had with Node. Deno is secure by default, supports TypeScript out of the box, and aims for better developer experience and built-in tooling.


 //     Javascript Advantages

//  1. Runs directly in the user's browser, reducing server load.
//  2. Provides immediate feedback to users (e.g., form validations, animations).
//  3. Supported by all modern browsers without the need for plugins.
//  4. Standardized by ECMAScript, ensuring consistent behavior.
//  5. Can be used for:
//    1. Front-end (with HTML/CSS)
//    2. Back-end (Node.js)
//    3. Mobile apps (React Native, Ionic)
//    4. Desktop apps (Electron)
//    5. Game development (with libraries like Phaser)

//  6. Huge number of frameworks and libraries:
// Frontend: React, Vue, Angular
// Backend: Express.js, NestJS
// Testing: Jest, Mocha
// NPM (Node Package Manager) has millions of packages.


//     Javascript Limitations
// Code is visible and can be tampered with.
// Prone to XSS and injection attacks.
// Different browsers may interpret JavaScript differently.
// Requires testing and polyfills.
// No strict type checking.
// Bugs due to unexpected type coercion.


// Valid Variable names - a variable should declare in a correct syntax.

// A valid JavaScript variable name must follow these rules
// Can include:
// Letters (A–Z, a–z)
// Digits (0–9)
// Underscores _
// Dollar signs $

// Must NOT begin with a digit
// 1var is invalid
// var1 is valid

// Cannot be a reserved keyword (like let, class, return, etc.)

// Case-sensitive
// myVar and myvar are different.

// Examples of Valid Variable Names

// name	               Simple and valid
// user_name	         Uses underscore
// userName	        CamelCase (common in JS)
// $amount	          $ is allowed
// _privateVar	  _ is allowed and often used for "private"
// total123	      Digits allowed (not at the beginning)


// invalid variable names

// 1name	        Starts with a digit
// var	        var is a reserved keyword
// user-name	  Hyphen - is not allowed
// @value  	    @ is not a valid character
// function	    function is a reserved word

// retrun keyword

// The return keyword is used to exit a function and optionally send a value back to the place where the function was called.
function functionName() {
  return value;
}

// If no return is given, the function returns **undefined** by default
// Anything after return is not executed

// Type conversion 
// Type conversion (also called type casting) is the process of converting a value from one data type to another in programming.



// Implicit type conversion in JavaScript, also called type coercion, is when JavaScript automatically converts one data type to another during operations, without the developer explicitly doing so.
// Happens automatically when using operators (like +, ==, etc.) on values of different types.

// JavaScript is dynamically typed, so it tries to make sense of mixed-type operations by converting types.

// Can lead to unexpected results if not handled carefully. 
let a = "5";
let b = 10;
let result = a + b;
console.log(result);         // "510"
console.log(typeof result);  // "string"
// JS converts the number 10 to string "10" and concatenates.


console.log("7" - 3);  // 4
console.log("6" * 2);  // 12
// Here, JS converts string "7" or "6" implicitly to numbers so subtraction or multiplication works.

console.log(true + 1);   // 2
console.log(false + 10); // 10
// true becomes 1, false becomes 0 automatically.

if ("") {
  console.log("This won't run");
} else {
  console.log("This will run");
}



//  In JavaScript, explicit type conversion (also known as type casting) is when you manually convert a value from one type to another using built-in functions or constructors.

// Convert to Number

// Use the Number() function, parseInt(), or parseFloat():

Number("123");       // 123 (number)
Number("123abc");    // NaN
parseInt("123");     // 123
parseInt("123abc");  // 123
parseFloat("123.45");// 123.45

// Convert to String

// Use the String() function or .toString() method:

String(123);        // "123"
(123).toString();   // "123"
true.toString();    // "true"
// null.toString();    //  Error (null has no toString method)
String(null);       // "null"

// Convert to Boolean
// Use the Boolean() function:

Boolean(0);         // false
Boolean(1);         // true
Boolean("");        // false
Boolean("hello");   // true
Boolean(null);      // false

// Convert to Object
// Most primitive values can be converted to objects using constructors:

Object(123);        // [Number: 123]
Object("hello");    // [String: 'hello']
Object(true);       // [Boolean: true]



//  What is Scope in JavaScript?
// Scope in JavaScript defines where variables, functions, and objects are accessible in your code.

// Prevents variable name conflicts
// Controls variable lifetime and visibility
// Enables closures and secure coding practices


// What are Operators in JavaScript?
// Operators are special symbols or keywords that perform operations on one or more values (called operands) and produce a result.

// 1. Arithmetic Operators
// Perform mathematical operations.
// +	Addition	5 + 3 = 8
// -	Subtraction	5 - 3 = 2
// *	Multiplication	5 * 3 = 15
// /	Division	6 / 3 = 2
// %	Modulus (Remainder)	5 % 2 = 1
// ++	Increment	i++
// --	Decrement	i--


//  2. Assignment Operators
// Assign values to variables.

// =	Assign	x = 5
// +=	Add and assign	x += 2 (x = x + 2)
// -=	Subtract and assign	x -= 2
// *=	Multiply and assign	x *= 3
// /=	Divide and assign	x /= 2
// %=	Modulus and assign	x %= 2


// 3. Comparison Operators
// Compare two values and return true or false.

// ==	Equal to (loose)	5 == "5" → true
// ===	Equal to (strict)	5 === "5" → false
// !=	Not equal (loose)	5 != 10 → true
// !==	Not equal (strict)	5 !== "5" → true
// >	Greater than	5 > 3 → true
// <	Less than	5 < 3 → false
// >=	Greater than or equal	5 >= 5 → true
// <=	Less than or equal	5 <= 6 → true


// 4. Logical Operators
// Combine boolean values.
// Logical operators are used to combine or invert boolean (true/false) values. They are essential for controlling the flow of your program in conditions.


// The AND operator (&&) is a logical operator that returns:
// The first falsy operand it encounters when evaluating from left to right.
// If all operands are truthy, it returns the last operand.
// It is commonly used to check if multiple conditions are true.

true && true    // returns true
true && false   // returns false
0 && "hello"    // returns 0 (falsy)
"hi" && 42      // returns 42 (last truthy value)



// OR (||) Operator Definition
// The OR operator (||) is a logical operator that returns:
// The first truthy operand it encounters when evaluating from left to right.
// If all operands are falsy, it returns the last operand.
// It’s commonly used to check if at least one condition is true.

true || false     // returns true
false || true     // returns true
0 || "hello"      // returns "hello" (first truthy)
"" || 0           // returns 0 (both falsy, returns last)



// NOT (!) Operator Definition
// The NOT operator (!) is a logical operator that inverts the boolean value of its operand:
// Converts true to false
// Converts false to true
// It is a unary operator, meaning it works with a single operand.

!true    // false
!false   // true
!0       // true  (0 is falsy)
!"hello" // false ("hello" is truthy)



//   Diffrence between mutable and immutable

// Mutable
// Definition: An object is mutable if you can change its content after it is created.
// You can update, add, or delete elements in the object.
// Arrays / Lists
// Dictionaries / Objects / Maps
// Sets


let arr = [1, 2, 3];
arr[0] = 99;  // Modifying the original array
console.log(arr);  // Output: [99, 2, 3]


// Immutable
// Definition: An object is immutable if you cannot change its content after it is created.
// To make changes, you must create a new object.

// Strings
// Numbers
// Booleans
// Tuples (in Python)
// In JavaScript: const doesn’t make an object immutable — it just makes the reference unchangeable.

let str = "hello";
str[0] = "H";  // This does nothing
console.log(str);  // Output: "hello"

let newStr = str.replace("h", "H");
console.log(newStr);  // Output: "Hello"








// A self-invoking function (also called an Immediately Invoked Function Expression, or IIFE) is a function in JavaScript that runs as soon as it is defined.

// (function() {
//     // code inside IIFE
//     console.log("This function runs itself!");
// })();


// It's a function expression, not a declaration. So it’s wrapped in parentheses: (function() {}).
// The () at the end invokes the function immediately.


// (function(name) {
//     console.log("Hello, " + name + "!");
// })("Alice");
 
// Advantages of Self-Invoking Functions (IIFE)
// 1. Avoid Global Scope Pollution
// Variables defined inside an IIFE are not accessible globally.
// This prevents naming conflicts and keeps your global namespace clean.


// (function() {
//     var counter = 0; // Not accessible outside
// })();
// console.log(typeof counter); // "undefined"


// Create Private Variables (Encapsulation)
// Useful for data hiding and encapsulation — a key concept in modular programming.

var app = (function() {
    var privateVar = "hidden";
    return {
        reveal: function() {
            return privateVar;
        }
    };
})();
console.log(app.reveal()); // "hidden"


// Immediately Run Setup or Initialization Code
// Useful for running one-time setup logic when a script loads.

(function() {
    console.log("Initializing app...");
    // Setup code here
})();


// 4. Helps with Modular Code (Pre-ES6)
// Before ES6 modules (import/export), IIFEs were the main pattern to create modular code in JavaScript.

// 5. Prevents Variable Hoisting Issues
// Keeps variables localized and unaffected by hoisting or redefinition in other parts of the script.

// 6. Compatible with Older JavaScript Versions
// IIFEs work in ES5 and even earlier, making them a reliable pattern for cross-browser support.


// conditional statements
//  if ,else if, if else, switch, ternary operator

// The ternary operator (also called the conditional operator) is a short-hand for an if-else statement that evaluates a condition and returns one of two values based on whether the condition is true or false. (?)

// condition ? expressionIfTrue : expressionIfFalse;

// Nullish Coalescing Operator (??)
// Definition:
// The nullish coalescing operator returns the right-hand operand when the left-hand operand is null or undefined; otherwise, it returns the left-hand operand.

// let result1 = value1 ?? value2;
// If value1 is not null or undefined, return value1.
// Otherwise, return value2.


// Why use it?
// Unlike the logical OR (||) operator, which treats falsy values (0, '', false, etc.) as false, the nullish coalescing operator only treats null or undefined as nullish, making it safer to provide default values.

let name = null;
let defaultName = "Guest";

let displayName = name ?? defaultName;
console.log(displayName); // Output: "Guest"


let count = 0;

let displayCount = count ?? 10;
console.log(displayCount); // Output: 0 (because 0 is NOT null or undefined)



// Function Definition

// A function in JavaScript is a block of reusable code designed to perform a particular task. Functions can take inputs, called parameters, and can return an output.
// Functions help organize code, avoid repetition, and make programs more modular and maintainable.

// Advantage
//   avoid repetion of same code multple times. 
// Make code easier to read and understand using clear function names.
// Test and debug individual parts of code more easily.
// Update or fix code in one place without affecting the entire program.
// Break complex problems into smaller parts for better code organization.


//   Default Parameters 

// Default parameters allow you to set a default value for a function parameter. If no value (or undefined) is passed for that parameter, the default will be used.


function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet("Alice");   // Output: Hello, Alice
greet();          // Output: Hello, Guest

// Important Notes:
// Default parameters only apply when the argument is undefined.
// Passing null will not trigger the default:

// greet(null); // Output: Hello, null (not "Guest")


function sum(a = 1, b = 2) {
  return a + b;
}

console.log(sum());        // 3
console.log(sum(5));       // 7 (5 + 2)
console.log(sum(5, 10));   // 15

function  defaultValue (p = 2, q = p*3, r = p*q*2) {
      return p+q+r 
}


console.log(defaultValue(6, 3, 5));
console.log(defaultValue(6));
console.log(defaultValue());

function Show (p, q=20) {
    return p+q 
}

console.log(Show(5, 8));
console.log(Show( ));

function sum (p, q) {
    return p+q
}

console.log(sum(5, 9));
console.log(sum());


// We use arguments.length to find out how many arguments were actually passed to a function at the time it was called, regardless of how many parameters the function is defined with.


// Why is this useful?
// To handle functions with a variable number of arguments
// To apply different logic based on how many arguments were passed
// To check if required arguments were provided


function demo(a, b) {
  console.log("Arguments passed:", arguments.length);
}

demo(1);           // Output: Arguments passed: 1
demo(1, 2, 3);     // Output: Arguments passed: 3

// The function is defined with 2 parameters (a, b)
// But we can pass more (or fewer) arguments
// arguments.length tells us how many were actually passed

function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(10));      // Output: 10

//  closure
// A function that can access variables from its parent scope.

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();  // `outer` returns `inner`, which remembers `count`

counter();  // 1
counter();  // 2    
counter();  // 3


//  function invocation
// call, apply, bind

// it is used for invoking a function
// func.call(thisArg, arg1, arg2, ...);



function calls () {
    console.log('Hello ' + this.name)
}

const person = {
    name : 'Anjali',
    age: 20
}

calls.call(person)


function introduce(city, country) {
  console.log(`Hi, I'm ${this.name} from ${city}, ${country}.`);
}

const user = {
  name: "Rahul"
};

introduce.call(user, "Mumbai", "India");  



// apply
// apply() is a method that invokes a function while explicitly setting the this context, just like .call() but it passes arguments as an array.
// functionName.apply(thisArg, [arg1, arg2, ...]);


function greet(city, country) {
  console.log(`Hi, I'm ${this.name} from ${city}, ${country}.`);
}

const persons = {
  name: "Anjali"
};

greet.apply(persons, ["Delhi", "India"]);  



const numbers = [4, 10, 7, 2];

const max = Math.max.apply(null, numbers);
console.log(max);  // Output: 10


// bind
// bind() creates a new function with the this keyword permanently set to the value you provide — but it does not invoke the function immediately (unlike .call() and .apply()).

// const boundFunction = originalFunction.bind(thisArg, arg1, arg2, ...);
// boundFunction();



 function person1 (city, country) {
       console.log(`${this.firstName} ${this.lastName} from ${city}, ${country}`);
        
  }


const person2 = {
  firstName: "Anjali",
  lastName: "Sharma"
};
 
const person3 = {
  firstName: "Rahul",
  lastName: "Verma"
};

// Bind person1.fullName to person2
 person1.bind(person2, "Delhi", "India");

// Bind person1.fullName to person
 person1.bind(person3, "Mumbai", "India");

// console.log(anjaliDetails());  // Output: Anjali Sharma from Delhi, India
// console.log(rahulDetails());   // Output: Rahul Verma from Mumbai, India