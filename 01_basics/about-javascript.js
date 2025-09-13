 
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