 
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
// Ans. In JavaScript, typeof is an operator used to determine the type of a value or expression.
typeof 42;              // "number"
typeof "hello";         // "string"
typeof true;            // "boolean"
typeof {};              // "object"
typeof [];              // "object" (arrays are objects in JavaScript)
typeof function() {};   // "function"
typeof null;            // "object" (this is a known bug from the early days)
typeof undefined;       // "undefined"
typeof Symbol("sym");   // "symbol"





// Qu. What is the output of typeof null and why?
// Ans. The output of typeof null in JavaScript is:
"object"
// This is a well-known bug in JavaScript that has existed since its early days and has been preserved for backward compatibility.
// null is a primitive value in JavaScript that represents "no value" or "empty".
// However, due to a design flaw in the original implementation of JavaScript, typeof null returns "object" instead of "null".
// Historical Reason:
// In early implementations, JavaScript values were stored in a way where the type tag for objects was 0. The value null was represented as the null pointer (0x00), which made it appear as an object type when checked using typeof.




// Qu. What are reference types in JavaScript?
// Ans. In JavaScript, reference types (also called non-primitive types) are types of values that are accessed by reference, rather than by value. This means that when you assign a reference type to a variable, you're storing a reference (or pointer) to the location in memory where the value is stored—not the actual value itself.
// The main reference types in JavaScript are:
// Object
// Array
// Function
// Date
// RegExp
// Map, Set, WeakMap, WeakSet, etc.

// Key Characteristics of Reference Types:
// Mutable: Their contents can be changed after they are created.
// Assigned by reference: When you assign them to a new variable, both variables point to the same object in memory.
// Compared by reference: Two separate objects with the same properties are not equal, because they are stored at different memory locations.

let obj1 = { name: 'Alice' };
let obj2 = obj1;

obj2.name = 'Bob';

console.log(obj1.name); // Output: 'Bob'




// Qu. What is the difference between primitive and reference types?
// Ans. The difference between primitive types and reference types lies in how they store and manage data in memory.

// Primitive Types
// Primitive types hold simple, immutable values. They are stored directly in the memory location associated with a variable.

// Characteristics:
// Stored by value
// Fixed size and memory-efficient
// Immutable (cannot be altered once created)
// Typically stored on the stack (depends on language)
// Comparison is based on value

//  Reference Types
// Reference types store a reference (or pointer) to the actual data, not the data itself. The actual data is stored elsewhere, typically on the heap.

//  Characteristics:
// Stored by reference
// Can be mutable (changeable)
// More memory overhead (due to the reference and heap allocation)
// Comparison is based on reference (memory address), not content
// Can represent complex data structures

// Primitive
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (a is not affected)

// Reference
let obje1 = { x: 1 };
let obj2 = obje1;
obj2.x = 5;
console.log(obje1.x); // 5 (obj1 is affected because both point to the same object)



// Qu. How does JavaScript handle type coercion?
// Ans. JavaScript handles type coercion through implicit and explicit conversions between data types. It often tries to "guess" what the developer meant, which can lead to unexpected results if you're not careful.

//  Types of Type Coercion

// 1. Implicit Coercion
// JavaScript automatically converts one type to another.

'5' + 1       // "51"  → Number 1 is coerced to string, then concatenated
'5' - 1       // 4     → String '5' is coerced to number
true + 1      // 2     → true becomes 1
false + '1'   // "false1" → false becomes "false"
null + 1      // 1     → null becomes 0
undefined + 1 // NaN   → undefined becomes NaN

// 2. Explicit Coercion
// You intentionally convert a value using functions like String(), Number(), or Boolean().
Number("5")   // 5
String(123)   // "123"
Boolean(0)    // false
Boolean("hi") // true

// Common Coercion Rules
// In Arithmetic:
// + operator triggers string concatenation if either operand is a string.
// Other operators (-, *, /, etc.) convert operands to numbers.

//  In Comparisons:
'5' == 5       // true → loose equality with coercion
'5' === 5      // false → strict equality, no coercion
null == undefined // true
// [] == false     // true
// [] == ![]       // true

//  Objects:
// When an object is involved in coercion:
// JavaScript tries to call valueOf()
// If valueOf() doesn’t return a primitive, it tries toString()
const object = {
  valueOf() { return 42; },
  toString() { return "Hello"; }
};

object + 1 // 43

// Best Practice
// Avoid implicit coercion when possible, especially with ==. Use === and explicit conversions to make behavior predictable and code more readable.

// Qu.  What is the difference between == and ===?
// Ans.

// Qu. What is NaN in JavaScript? How can you check for it?
// Ans.

// Qu. What is the result of typeof NaN and why?
// Ans.
