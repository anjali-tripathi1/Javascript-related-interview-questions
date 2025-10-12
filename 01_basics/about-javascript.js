 
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

// Math operations

//  Rest parameter and spread parameter
// Rest parameter -- collect all remaining elements or properties into a single array (in function parameters or array destructuring) or object (in object destructuring).
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]

const user1 = { name1: "Alice", age: 25, city: "NY" };
const { name1, ...details } = user1;

console.log(name1);    // Alice
console.log(details); // { age: 25, city: "NY" }



//  Spread operator -- unpack or spread elements of an iterable (like an array, string, or object) into individual elements.
const number = [1, 2, 3];
console.log(...number); // Output: 1 2 3

const users = { name: "Alice", age: 25 };
const clone = { ...users };

console.log(clone); // { name: "Alice", age: 25 }

// arrow function

// function declartion, function expression

// asynchronous code

// promise, async await

//  iife / Self invoking function

//  events  
//  click, onclick, dblclick, mouseover, mouseenter, mouseout, change, submit

// Dom
// form validation

// promise, async await, 

// cookies, localStorage, sessionStorage

// typescript -- Typescript is a free and open source programing language. it is a superset of js means any valid js code is also a valid ts code. in ts we need to define the type.

// Advantages of ts 
// 1. Type safety reduces runtime errors.
// 2. Static typing enables early bug detection.
// 3. Improves code readability with self-documenting types.
// 4. Supports OOP features like classes, interfaces, and inheritance.
// 5. Supports modern JavaScript features with backward compatibility.

// Disadvantages of ts
//  Additional setup and configuration required.
//  Slower development initially due to type annotations.
//  Compilation step needed to run TypeScript code.
//  May overcomplicate small projects.
//  Build process becomes more complex.

// How is TypeScript different from JavaScript?
// TypeScript adds types, interfaces, and compile-time checks, while JavaScript is dynamically typed and interpreted at runtime.

// What is an interface in TypeScript?
// An interface defines the structure of an object (like a contract).

// interface Person {
//   name: string;
//   age: number;
// }
// let user: Person = { name: "Alice", age: 25 };

// what are datatypes
// String, number, boolean , null , object, void, undefined, any, unknown, never, 
// array	A list of values of the same type	let nums: number[] = [1, 2, 3];
// tuple	Fixed-length array with known types	let point: [number, number] = [1, 2];
// union	 Accept multiple types	`let id: number
// intersection	 Combine multiple types into one	 type A = {x: number} & {y: number}
// enum          Defines a set of named constants  enum Color { Red, Green, Blue }

// tupels 
// A tuple in TypeScript is a typed array with a fixed number of elements, where each element can have a different type.

// union
// A union type in TypeScript allows a variable to hold more than one type. It's defined using the | (pipe) symbol.
// let value: string | number;
// value = "hello";
// value = 42;   

// An intersection type is a type that combines multiple types into one. An object of an intersection type must satisfy all the types involved.
// type A = { name: string };
// type B = { age: number };
// type C = A & B; // Intersection type

// const person: C = {
//   name: "Alice",
//   age: 30
// };

// it is not strictly necessary to use type when working with intersection types in TypeScript, but it's highly recommended for:
// Clarity
// Reusability
// Maintainability

// the type keyword is the only keyword that directly supports using the & operator to create intersection types.
// You must use type to declare intersection types explicitly.
// There is no direct alternative keyword to replace type for this use.

// You cannot use interface with & directly:

//  Invalid
// interface Person = A & B; // Error!

// interface A { name: string }
// interface B { age: number }

// interface Person extends A, B {} //  Works for objects only

// You can use intersection types directly in variable declarations without creating a separate type. But using type (or interface) makes the code more readable and reusable.

// without using type 
// let person: { name: string } & { age: number } = {
//   name: "Anjali",
//   age: 25
// };

// console.log(person);

// What is the difference between any, unknown, and never?
// any	       accept any type(disables type checking (avoid using often)
// unknown	   Safer alternative to any, must check type
// never	     For values that never occur (e.g., errors)

// What is a union type?
// A variable can hold more than one possible type.
 // let value: string | number;
// value = "Hello";
// value = 123;


// npm install -g typescript       # Install
// tsc file.ts                     # Compile TypeScript to JavaScript


// two types of typescript -- explicit type, inference type
// explicit type - an explicit type means you define the type of a variable, function, parameter, or return value yourself, instead of letting TypeScript infer it automatically.
// Advantages:
// Makes code more readable and predictable
// Helps catch bugs early
// Useful in function parameters and API design

// let username: string = "Alice";
// let age: number = 30;
// let isAdmin: boolean = false;



// inference type -- Type Inference is when TypeScript automatically determines the type of a variable or expression without you explicitly writing it.

// readonly keyword -- The readonly keyword in TypeScript is used to make a property immutable, meaning it cannot be changed after initialization. (we can't update array or any specific object after its declartion.)

// type declare inside function object and array

// oops 
// oops -- OOPs stands for Object-Oriented Programming System. It is a programming paradigm based on the concept of "objects", which can contain data and methods that operate on that data.
// Core Concepts of OOPs:

// Class – A blueprint for creating objects (e.g., Car, Person).
// Object – An instance of a class with specific values.
// Encapsulation – Hiding internal data and showing only what’s necessary.
// Abstraction – Showing only essential features and hiding complexities.
// Inheritance – One class can inherit properties and behaviors from another.
// Polymorphism – Objects can take many forms (e.g., method overloading/overriding).


  
             // in class , in subclass, in outsideclass
// private       // yes        no          no
// public,       // yes        yes         yes
// protected     // yes        yes         no

// option chaining operator 
// the ?. syntax is known as the Optional Chaining Operator, and it's used for optional error handling when you're accessing properties or calling functions on potentially null or undefined values.

// typescript object
//  class (blueprint)
// using constructor (private, public)

// Encapsulation -- bundals the data and methods into single unit(class).
// 1. prevents the unauthorized user to access the internal data.
// 2. enforces controlled interactions through getters and setters.
// 3. promots the data intregity and security.


// Encapsulation is the bundling of data (properties) and methods that operate on that data into a single unit (class),
// Yes, using private, public, and protected is important in encapsulation in TypeScript (and in object-oriented programming in general). These access modifiers help control how the internal state of a class is accessed and modified, which is the core idea of encapsulation.

// extend
// The extends keyword in TypeScript is used to create a subclass from a parent (superclass). It allows a class to inherit properties and methods from another class.


// class interface
// A class is a blueprint for creating objects with specific properties and behaviors (methods). It defines what an object should look like and what it can do.

// Think of it like this:
// If you were building cars in a factory:
// A class is the template for building a car (defines shape, color, engine, etc.).
// An object is the actual car built using that template.
// Why Use
// Reusability, structure, clean code, and support for OOP

// constructer
// a constructor is a special method used in a class that gets called automatically when a new instance of the class is created. It's mainly used to initialize class properties and perform any setup the object needs before it is used.
// You use constructors to assign initial values to the properties of a class.
// You can hide logic inside the constructor to simplify object creation for the user of the class.
// Constructors allow you to pass in dependencies or configuration data when creating an instance.

//  public, private, protected
// public, private and protected are the access modifiers used to control the visibility and accessbility of class members. these modifiers used in oops to enforces encapsulation which helps protect internal logic from misuse or external interference.

// supercall -- it is used to extract a parent class into sub class.it Allows a subclass to call the constructor or methods of its parent class.

// Record 
// Record is a utility type used to create an object type with specific keys and value types.
// Record<Keys, ValueType>
// Keys: The type of the keys (e.g., string, number, union like 'name' | 'age')
// ValueType: The type of the values for all those keys
// what does it do
// Record builds a type where:
// All keys must be of the specified type (string in your example)
// All values must be of the specified value type (any in your example)

// let personDetails: Record<string, any> = {
//   name: "John",
//   age: 25,
//   isStudent: true
// };
// All keys are strings: "name", "age", "isStudent"

// All values can be anything (any)

// can be write like this.
// let personDetails: { [key: string]: any } = {
//   name: "John",
//   age: 25,
//   isStudent: true
// };

// let sym1 = Symbol('course');
// let sym2 = Symbol('price');
// let details:Record<symbol, any> = {
//      [sym1] : 'Angular',
//      [sym2] : 5999 
// }

// console.log(details);

// enum
// it's stand for enumeration
// an enum (short for enumeration) is a way to define a set of named constants. You use it when you want to represent a collection of related values that can be numbers or strings.
// enum comes in two main types:
// 1. Numeric Enums
// These are the default in TypeScript.
// Values are numbers.
// If you don't assign a value, it auto-increments starting from 0.
// enum Direction {
//   Up,      // 0
//   Down,    // 1
//   Left,    // 2
//   Right    // 3
// }
// You can also assign custom numeric values:
// enum Direction {
//   Up = 1,
//   Down,     // 2
//   Left = 5,
//   Right     // 6
// }

// Reverse Mapping (only works for numeric enums):
// console.log(Direction.Up);      // 1
// console.log(Direction[1]);      // "Down"

// 2. String Enums
// Each member must be explicitly initialized with a string value.
// No auto-increment.
// Safer and more readable, especially for APIs or logs.


// enum Status {
//   Success = "SUCCESS",
//   Failure = "FAILURE",
//   Pending = "PENDING"
// }
// let currentStatus: Status = Status.Success;
// console.log(currentStatus); // "SUCCESS"

// No reverse mapping:
// console.log(Status["SUCCESS"]); // undefined

// Feature	            Numeric Enum	              String Enum
// Default Value        	Starts at 0	              Must assign manually
// Auto-increment           	Yes                        	No
// Reverse Mapping           	Yes	                        No
// Value Type               	number	                  string
// Use Case	Internal       logic, math	            API responses, labels


// polymorphism --> Polymorphism means "many forms" — the same function or method can operate on different types of objects.
// Polymorphism allows objects of different classes to be treated as objects of a common superclass. The same method name can be used for different types.
// new
// it means multiple implementation that allows objects of different types to be treated as instances of the same type through a shared interface or base class.
// use of polymorphism
// Code reusability, flexibility, scalability, easy maintenance, dynamic method binding, loose coupling, better testing, support for design patterns, simplified interfaces, efficient framework integration. 


// getter --> to read and get the private data safely.
// setter --> to modify and update the private data safley.



// overriding
// overloading
// getters - read 
// setters - modified
// interface 
// examples
// diffrence between interface and class
// implements
// processer 
// abstraction
// calling abstracton with function


// an interface is a powerful way to define the shape of an object. It allows you to specify the structure, including the properties and method signatures, that an object must have — without providing actual implementation.
// Purpose of Interfaces
// Interfaces are used to:
//  Define object shapes
//  Support code reusability
//  Ensure type safety
//  Improve readability and maintainability
//  Help with object-oriented programming (e.g., implements in classes)


// implements
// **implements** keyword is used by a class to indicate that it is agreeing to follow a structure defined by an interface.
// This means the class must provide implementations for all the properties and methods declared in the interface.
// "implements means the class promises to follow the rules set by the interface."

// Why use implements?
// To make sure a class has all the properties and methods declared in the interface.
// To enforce consistency across different classes.
// To catch errors early when a class is missing something it should have.
// To support object-oriented programming (OOP)
// It aligns with OOP principles like abstracti on and polymorphism.
// provides the Type safety, structure, consistency
// For type safety
// TypeScript will throw an error if the class misses any part of the interface — preventing bugs early.


// Why don't we use extends instead of implements in interfaces?
// Actually:
//  We do use extends with interfaces.
// But the key is:
// implements is used by classes to follow an interface.
// extends is used by interfaces to inherit from other interfaces.


// Summary Table:
// Keyword	            Used With	                     Meaning
// implements          Class → Interface         Class agrees to implement all properties/
//                                                     methods of the interface

// extends                Interface → Interface     Interface inherits properties/methods from 
//                                                        another interface

// extends                   Class → Class             Class inherits from another class 
//                                                         (including logic)


// Why Not Use implements Between Interfaces?
// Because:
// implements is meant for classes to promise that they follow an interface.
// Interfaces themselves don’t implement anything — they only describe structure.
// When you want one interface to build on another, you use **extends**.

// Use **implements** when a class wants to follow an interface.
// Use **extends** when one interface wants to build on another interface.


