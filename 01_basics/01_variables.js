 
 // variables=> In JavaScript, variables are used to store data values or They are used for creating  space in 
//          memory for store data value. and for using variables in Javascript we declare variables.


//   Basic Level Questions

//  Qu.What are the different ways to declare variables in JavaScript?
//  Ans. There are three ways to declare a variable
 //  1 . var - Introduced in ES5 or Earlier, can be re-declared and updated.
          var name = "Anjali";
          name = "Saroj";
          var name = "Aditya";  // allowed
          console.log(name);
          
  //  2. let - Introduced in ES6(2015), Can be updated, but not re-declared in the same scope.
           let age = 19;
           age = 25;  // allowed
           console.log(age);
        //    let age = 23; not allowed  in same block 

   //  3. const - introduced in ES6,  Cannot be re-declared or updated.
            const value =  3.14;
            console.log(value);
            // value = 3.15 not allowed 
                
            
     

// Qu. What is the difference between var, let, and const?
// Ans.  var is Fuction scoped, let and const is block scoped 
//       var is reassign and redeclared both, let is reassign but not redeclared, const is not reassign and not redeclared.



// Qu. What is variable hoisting in JavaScript?
// Ans. Variable hoisting in JavaScript is a behavior where variable and function declarations are moved (or "hoisted") to the top of their containing scope (either the function scope or the global scope) during the compilation phase, before the code is executed.
// However, only the declarations are hoisted, not the initializations.

// var Example
var a;             // Declaration is hoisted
console.log(a);    // undefined
var a = 5;         // Intialization remains place
console.log(a);    // 5



// Qu. What is the scope of a variable in JavaScript?
// (Block scope vs. Function scope vs. Global scope)
// Ans. In JavaScript, the scope of a variable refers to the context in which the variable is defined and determines where the variable can be accessed or used in your code.
// There are three main types of variable scope in JavaScript:

// 1. Global Scope
// A variable has global scope if it's declared outside of any function or block.
// It can be accessed and modified anywhere in the program.


let globalVar = "I'm global";

function test() {
  console.log(globalVar); // Accessible
}

// 2. Function Scope
// Variables declared using var inside a function are function-scoped.
// They are accessible only within that function.

function test() {
  var functionVar = "I'm local";
  console.log(functionVar);
}
console.log(functionVar);  // functionVar is not defined

// 3. Block Scope
// Variables declared with let and const are block-scoped.
// They are accessible only within the block {} where they are defined.

if (true) {
  let blockVar = "I'm block scoped";
  const anotherBlockVar = "Me too";
 }

  console.log(blockVar);  //  blockVar is not defined


// Bonus: Lexical Scope (Static scope)
// JavaScript also uses lexical scoping, meaning:
// A function can access variables from its parent scopes.

function outer() {
  let outerVar = "I'm from outer";
  function inner() {
    console.log(outerVar); //  Accessible due to lexical scope
  }
  inner();
}
outer();



// Qu. Can you reassign a value to a const variable?
// Ans. no it can't change We cannot reassign the const variable to a different value.

 const accountId = 212121
 console.log(accountId);
//  const accountId = 12345 (not allowed)

// Qu. What happens if you declare a variable without var, let, or const?
// Ans. In JavaScript, if we declare a variable without using var, let, or const,the variable becomes implicitly global.


// Qu. What is the default value of an uninitialized variable?
// Ans. The default value of an uninitialized variable depends on the programming language and the context (e.g., global vs. local scope).
// JavaScript
// Uninitialized declared variables (with var, let, or const) are:
// undefined if declared but not assigned.
// ReferenceError if accessed before declaration in the case of let and const.
var x;
console.log(x); // undefined


//  Intermediate Level Questions

// Qu. What is temporal dead zone (TDZ)?
// Ans. The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when trying to access a variable declared with let, const, or class before its declaration in the code is evaluated.


// Qu. How do let and const handle block scoping differently than var?

// Qu. What is the difference between undefined and null?
// Ans. undefined is a type in itself. It means variable is declared but value is not assigned.
      //  null is a object type . It's a standlone value and this retpresents empty value.
  
      let accountState;
      console.log(typeof accountState);  // undefined

      let salary = null;
      console.log(typeof salary); // object
      
      

// Qu. Can you declare the same variable multiple times using var, let, and const?
// Ans. var can be redeclared and reassigned without any error, let can't be redeclared but it can be reassigned and const can't redeclared and reassigned.

var b = "Anjali";
var b = "Saroj"
console.log(b);

let y = 25
// let y = 30  not allowed 
y = 30
console.log(y);

const accountEmail = "abc@.com";
console.log(accountEmail);

// const accountEmail = "xyz@.com"  not allowed


  

// Qu. What is the difference between global variables and local variables?
// Ans. The difference between global variables and local variables lies in their scope—that is, where in a program they can be accessed or modified.
// Global Variables
// Defined outside of all functions or blocks.
// Accessible from anywhere in the program, including inside functions (unless shadowed by a local variable with the same name).
// Persist throughout the program's execution.

var globelVar = "I'm global";

function printGlobal() {
  console.log(globelVar); // Accessible here
}

printGlobal();
console.log(globelVar); // Also accessible here

// Local Variables
// Defined inside a function or block.
// Accessible only within that function or block.
// Created when the function is called and destroyed when the function ends.

function myFunction() {
  let localVar = "I'm local";
  console.log(localVar); // Accessible here
}

myFunction();
console.log(localVar); //   localVar is not defined


// Qu.What are shadowed variables?
// Ans. Shadowed variables occur in programming when a variable declared within a certain scope (e.g., inside a function or block) has the same name as a variable declared in an outer scope. The inner (more local) variable "shadows" or hides the outer variable, making the outer one inaccessible in that scope.

let x = 10;

function demo() {
    let x = 5;  // This 'x' shadows the outer 'x'
    console.log(x); // Output: 5
}

demo();
console.log(x); // Output: 10



// Qu. How does JavaScript handle variable declaration inside loops?
// Ans. avaScript handles variable declaration inside loops in different ways depending on whether you use var, let, or const.

// 1. Using var
// var has function scope, not block scope.
// If you declare a variable with var inside a loop, it's accessible outside the loop block (within the same function).
// All iterations of the loop share the same variable binding.
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3 3 3

// 2. Using let
// let has block scope.
// When used inside a loop, each iteration has a new, unique binding of the variable.
// This makes let much more reliable for closures in loops.
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0 1 2

// 3. Using const
// const also has block scope, like let.
// But it must be initialized immediately and cannot be reassigned.
// Useful in loops like for...of or forEach where you don't need to change the loop variable.
const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value);
}
// Output: 10 20 30

// Trying to use const like this:
for (const i = 0; i < 3; i++) {
  console.log(i);
}
// Throws an error – because i cannot be reassigned.



// Qu. How do closures relate to variable scope?
// Ans. Closures in JavaScript are a fundamental concept that directly relate to variable scope, particularly lexical (static) scope.
// What is a Closure?
// A closure is a function that "remembers" the variables from its lexical scope even when the function is executed outside that scope.
// In other words:
// A closure allows a function to access variables from an outer scope even after that outer function has finished executing.
// How It Relates to Variable Scope
// JavaScript uses lexical scoping, which means that the scope of a variable is determined by its position in the source code.
// When a function is defined inside another function, it forms a closure and captures the variables from the outer function’s scope.

function outerFunction() {
    let outerVariable = 'I am from the outer scope';

    function innerFunction() {
        console.log(outerVariable); // accesses variable from outer scope
    }

    return innerFunction;
}

const closureFunc = outerFunction(); // outerFunction runs, but doesn't delete its scope
closureFunc(); // logs: "I am from the outer scope"

// Here’s what’s happening:
// innerFunction is defined within outerFunction, so it has access to outerVariable.
// Even though outerFunction has finished executing, the returned innerFunction retains access to outerVariable. This is a closure.

// Consider this loop with var:

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // prints 3 three times
    }, 100);
}

// using let

for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // prints 0, 1, 2
    }, 100);
}



//  Advanced Level Questions

// Qu. How do closures work with var, let, and const in loops?
// Ans. Closures in JavaScript can behave differently depending on whether you use var, let, or const in loops. This difference is especially noticeable in constructs like for loops.
// var in Loops and Closures
// var has function scope and does not create a new binding per iteration of the loop. This causes closures inside the loop to capture the same variable — which changes as the loop continues.

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// let and const in Loops and Closures
// Both let and const have block scope, and in for loops, JavaScript creates a new binding for each iteration. This means each closure captures a separate instance of the loop variable.
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}


// Qu. What are immediately-invoked function expressions (IIFE), and how do they affect variable scope?
// Ans. An Immediately-Invoked Function Expression (IIFE) is a JavaScript function that is defined and immediately executed after its creation.
(function() {
    // code here runs immediately
})();

// Or using arrow functions:
(() => {
    // code here runs immediately
})();

// Purpose of an IIFE
// 1. Create a new scope to avoid polluting the global namespace.
// 2. Encapsulate variables and logic so that they don’t interfere with other code.

(function() {
    var message = "Hello from IIFE";
    console.log(message);
})();

console.log(typeof message); // "undefined"
// Inside the IIFE, message is defined and logged.
// Outside, message is not accessible—it’s scoped to the IIFE only.

// How IIFEs Affect Variable Scope

// JavaScript has function-level (pre-ES6) and block-level (with let and const) scoping.
// IIFEs create a new function scope, which means:
// Variables declared inside an IIFE do not leak into the surrounding code.
// This is especially useful when:
// Avoiding conflicts with other scripts.
// Protecting variables from accidental access or modification.

// Example – Avoiding Scope Pollution

var count = 10;

(function() {
    var count = 0;
    console.log("Inside IIFE:", count); // 0
})();

console.log("Outside IIFE:", count); // 10
//  the inner count variable is isolated from the outer count variable.





// Qu. How does JavaScript manage memory for variables (garbage collection basics)?
// Ans. JavaScript manages memory automatically through a process called garbage collection. Here's a basic breakdown of how it works:

//  Memory Management Basics in JavaScript
// JavaScript programs use memory in two primary phases:
// Allocation: When variables, objects, or functions are created.
// Deallocation (Garbage Collection): When those items are no longer needed and the memory can be reclaimed.

// Garbage Collection
// JavaScript engines (like V8 in Chrome and Node.js) use automatic garbage collection to free up memory that's no longer in use.
// The most common garbage collection strategy is:

// Mark-and-Sweep Algorithm
// This is the core of modern garbage collectors in JavaScript.
// How it works:

// Mark Phase:
// The GC starts with a set of "roots" (e.g., global variables, the call stack).
// It traverses all reachable (accessible) objects from those roots and marks them as "in use."

// Sweep Phase:
// Anything not marked is considered unreachable.
// These unreachable values are then removed from memory.

//  When is memory considered unreachable?
// Memory is unreachable when there are no references to it from any reachable code.
// Example:
let person = {
  name: "Alice"
};

person = null; // The object is now unreachable (unless referenced elsewhere)
// Once person is set to null, the original object is no longer referenced and is eligible for garbage collection.

//  Tips to Avoid Memory Leaks
// Break circular references in closures or DOM elements.
// Clean up timers, event listeners, or observers when not needed.
// Use tools like Chrome DevTools to monitor memory usage and identify leaks.




// Qu. What are the implications of using global variables in JavaScript?
// Ans. Using global variables in JavaScript can have several important implications, both technically and in terms of code maintainability.
// Negative Implications

// 1. Namespace Pollution
// All global variables are added to the global object (window in browsers, global in Node.js).
// If multiple scripts define global variables with the same name, they can overwrite each other, causing unexpected behavior.

// 2. Tight Coupling
// Code becomes tightly coupled to specific variables in the global scope, making it harder to isolate or reuse components.
// Any change to a global variable might inadvertently affect unrelated parts of the application.

// 3. Testing Difficulty
// Global variables make unit testing harder because test cases may rely on or affect shared state.
// Resetting the environment between tests can be cumbersome.

// 4. Security Risks
// Global variables can be manipulated by other scripts, including third-party libraries or malicious code.
// This can lead to data leakage or unintended side effects.

// 5. Debugging Complexity
// It's harder to track bugs when state is shared across many places in your application.
// Errors caused by a global variable change may appear far from the actual source.

//  When Global Variables Might Be Acceptable
// Constants or configuration values that never change (e.g., const API_BASE_URL = "...") and are used throughout the app.
// Polyfills or environment-specific helpers that must be globally accessible.
// In small scripts or educational examples where modularity isn't a priority.

//  Best Practices / Alternatives

// Use let, const, or var inside functions or modules to avoid polluting the global scope.
// Use IIFEs (Immediately Invoked Function Expressions) or ES6 modules to create local scopes.
// Use namespaces or single global objects to contain all global data if some shared state is necessary (e.g., window.MyApp = {}).
// In modern codebases, rely on module bundlers (Webpack, Vite) or frameworks that promote modular design.



// Qu. What is variable leakage and how can it be avoided?
// Ans. Variable leakage in JavaScript refers to the unintended creation of global variables, usually due to improper variable declaration. This can lead to bugs, collisions, and unexpected behavior, especially in larger codebases or when integrating third-party scripts.

// How Variable Leakage Happens
// 1. Missing var, let, or const
// When a variable is assigned a value without being declared, JavaScript implicitly creates it in the global scope.
function testLeak() {
  leakedVar = "Oops!";  // No declaration keyword
}
testLeak();

console.log(leakedVar);  // "Oops!" — now a global variable!

// 2. Accidental Reuse of Globals
// You may unintentionally overwrite or access a global variable due to name conflicts.
var data = "global";

function test() {
  data = "modified";  // modifies the global variable!
}

// How to Avoid Variable Leakage
// 1. Always Use let, const, or var

function safeFunction() {
  let localVar = "Safe";
}
// let and const are block-scoped (preferred in modern JS)
// var is function-scoped (older, avoid if possible)

// 2. Use 'use strict'; Mode
// Enabling strict mode will throw an error when assigning to undeclared variables.
'use strict';

function strictFunction() {
  undeclared = 42;  // ReferenceError: undeclared is not defined
}

// 3. Use IIFEs (Immediately Invoked Function Expressions) for Scope Isolation
(function() {
  let scoped = "I'm safe here";
})();

// 4. Modularize Code
// Use ES6 modules or module bundlers to isolate scope.
// module.js
export function doSomething() {
  const localOnly = "kept private";
}

// 5. Lint Your Code
// Use tools like ESLint to catch variable leaks and enforce consistent style.

// Qu. What are some best practices for naming and organizing variables in large-scale JavaScript applications?
// Ans.

// Qu. How do JavaScript modules handle variable scoping?
// Ans.

// Qu. Can you modify the contents of a const object or array?
// Ans.

// Qu. What happens if you access a variable before it's declared with let or const?
// Ans.
