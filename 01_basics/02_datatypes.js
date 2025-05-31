 
//  Datatypes=> In JavaScript, data types represent the kinds of values you can work with.

// Basic Level

// Qu. What are the primitive data types in JavaScript?
// Ans. There are 7 types of primitive datatypes.
// 1. Number 
// 2. Bigint
// 3. String
// 4. Boolean
// 5. undefined
// 6. null
// 7. symbol 

// Qu. What is the difference between null and undefined?
// Ans.  undefined
// Meaning: A variable has been declared but has not been assigned a value.
// Type: undefined (a primitive type)
let x;
console.log(x); // undefined

function doNothing() {}
console.log(doNothing()); // undefined

let obj = {};
console.log(obj.missingProperty); // undefined

// null
// Meaning: Represents the intentional absence of any value or object.
// Type: object (this is a historical quirk in JavaScript)
// Use cases:
// Explicitly assigned to a variable to indicate “no value” or “empty.”
// Used to reset or clear values.
let y = null;
console.log(y); // null

let user = {
  name: null  // We know there's no name, and we're stating that deliberately
};

// Qu. What is typeof in JavaScript? How does it work?
// Ans.

// Qu. What is the output of typeof null and why?
// Ans.

// Qu. What are reference types in JavaScript?
// Ans.

// Qu. What is the difference between primitive and reference types?
// Ans.

// Qu. How does JavaScript handle type coercion?
// Ans.

// Qu.  What is the difference between == and ===?
// Ans.

// Qu. What is NaN in JavaScript? How can you check for it?
// Ans.

// Qu. What is the result of typeof NaN and why?
// Ans.
