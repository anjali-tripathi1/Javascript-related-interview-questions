 
 // variables


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
console.log(blockVar); //  blockVar is not defined


// Bonus: Lexical Scope
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
// Ans. no it can't change We cannot reassign the variable to a different value.

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

// Local Variables
// Defined inside a function or block.
// Accessible only within that function or block.
// Created when the function is called and destroyed when the function ends.




// Qu.What are shadowed variables?
// Ans. 

// How does JavaScript handle variable declaration inside loops?

// How do closures relate to variable scope?

//  Advanced Level Questions
// How do closures work with var, let, and const in loops?

// What are immediately-invoked function expressions (IIFE), and how do they affect variable scope?

// How does JavaScript manage memory for variables (garbage collection basics)?

// What are the implications of using global variables in JavaScript?

// What is variable leakage and how can it be avoided?

// What are some best practices for naming and organizing variables in large-scale JavaScript applications?

// How do JavaScript modules handle variable scoping?

// Can you modify the contents of a const object or array?

// What happens if you access a variable before it's declared with let or const?

