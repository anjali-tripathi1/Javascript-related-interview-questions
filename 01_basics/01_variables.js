 
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
//       var is reassign and redeclared both, let is reassign and not redeclared, const is not reassign and not redeclared.

// What is variable hoisting in JavaScript?

// What is the scope of a variable in JavaScript?

// (Block scope vs. Function scope vs. Global scope)

// Can you reassign a value to a const variable?

// What happens if you declare a variable without var, let, or const?

// What is the default value of an uninitialized variable?

//  Intermediate Level Questions
// What is temporal dead zone (TDZ)?

// How do let and const handle block scoping differently than var?

// What is the difference between undefined and null?

// Can you declare the same variable multiple times using var, let, and const?

// What is the difference between global variables and local variables?

// What are shadowed variables?

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

