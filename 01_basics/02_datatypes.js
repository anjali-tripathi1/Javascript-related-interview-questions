 
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
// Ans. In JavaScript, == and === are comparison operators, but they behave differently:

// == (Equality / Loose Equality)
// Performs type coercion: It converts the operands to the same type before comparing.
// Used when you want to check if values are loosely equal, regardless of their type.
'5' == 5     // true (string '5' is coerced to number 5)
false == 0   // true
null == undefined // true

// === (Strict Equality)
// Does not perform type coercion: It compares both value and type.
// Used when you want to ensure that the two values are exactly equal.
'5' === 5    // false (different types: string vs number)
false === 0  // false
null === undefined // false

// Rule of Thumb:
// Use === (strict equality) by default to avoid unexpected behavior from type coercion.
// Use == only when you explicitly want loose comparison and understand its implications.





// Qu. What is NaN in JavaScript? How can you check for it?
// Ans. In JavaScript, NaN stands for "Not-a-Number". It is a special value that indicates a value is not a legal number.

// What Causes NaN?
// NaN is typically the result of:
// Invalid or undefined mathematical operations
// Attempting to parse non-numeric strings to numbers
// Dividing zero by zero
let e = 0 / 0;           // NaN
let f = parseInt("abc"); // NaN
let g = Math.sqrt(-1);   // NaN

// How to Check for NaN
// Recommended: Number.isNaN(value)
// This is the safest and most accurate method to check for NaN.
Number.isNaN(NaN);      // true
Number.isNaN("hello");  // false
Number.isNaN(123);      // false

// Legacy: isNaN(value)
// This global function tries to coerce the value to a number first, which can lead to unexpected results.
isNaN("hello"); // true (because "hello" coerces to NaN)
isNaN(NaN);     // true
isNaN(123);     // false

//  Don't use value === NaN
// This doesn't work because NaN is not equal to itself:
NaN === NaN; // false






// Qu. What is the result of typeof NaN and why?
// Ans. The result of typeof NaN in JavaScript is:
"number"

// Why?
// NaN stands for "Not-a-Number", but paradoxically, its type is "number". This is due to how JavaScript was originally designed.
// Explanation:
// NaN is a special value in JavaScript that represents an invalid number result (e.g., 0 / 0, parseInt("abc"), etc.).
// Despite its name, NaN is still classified as a numeric value in JavaScript. It is part of the Number type, according to the ECMAScript specification.
// So typeof NaN === "number" is technically correct, though confusing to many developers.

console.log(typeof NaN); // "number"
console.log(isNaN(NaN)); // true

// In summary:
// NaN is a numeric value that doesn't represent a real number.
// It's a member of the Number type, hence typeof NaN is "number".






// Qu. Is NaN a data type? Explain.
// Ans. No, NaN is not a data type. Instead, it is a special value used within certain data types to represent "Not a Number."

// Explanation:
// NaN stands for "Not a Number".
// It is commonly used in floating-point data types to indicate the result of an undefined or unrepresentable numerical operation, such as:
// 0 / 0
// sqrt(-1) (in real numbers)
// infinity - infinity
// In JavaScript: NaN is a global value of type Number.

// Summary:
//  NaN is a value
//  NaN is not a standalone data type
// It exists within data types like float to signal an undefined or missing number.





// Qu. What is the default value of an uninitialized variable in JavaScript?
// Ans. In JavaScript, the default value of an uninitialized variable is undefined.
let m;
console.log(m); // Output: undefined
// In this case, m is declared but not initialized, so its value is undefined.





// Qu. What is type coercion in JavaScript?
// Ans. Type coercion in JavaScript is the automatic or implicit conversion of values from one data type to another. It happens when JavaScript expects a certain type but is given a different one, and it tries to convert the value to the expected type.
// Two Types of Type Coercion
// Implicit Coercion (automatic by JavaScript)
// Explicit Coercion (done manually by the developer)

// Implicit Coercion
// This happens when JavaScript automatically converts types behind the scenes:
let result = '5' + 2;  // "52" (number 2 is coerced to string)
let result2 = '5' - 2; // 3 (string '5' is coerced to number)
let result3 = true + 1; // 2 (true is coerced to 1)
// Rules:
// If using + and one operand is a string, JS converts the other to a string.
// For -, *, /, JavaScript tries to convert both operands to numbers.

// Explicit Coercion
// This is when you manually convert types using functions or methods:
String(123);     // "123"
Number("456");   // 456
Boolean(0);      // false

// Best Practice
// To avoid unexpected behavior:
// Use strict equality (===) instead of loose equality (==) to avoid implicit coercion.
// Perform explicit conversions when needed.






// Qu. How is Symbol different from other primitives?
// Ans. In JavaScript, Symbol is a primitive data type, just like string, number, boolean, null, undefined, and bigint. However, it has several unique characteristics that make it different from other primitives:
//  1. Uniqueness
// Every Symbol value is guaranteed to be unique, even if created with the same description:
const sym1 = Symbol('desc');
const sym2 = Symbol('desc');
console.log(sym1 === sym2); // false
// This makes Symbol ideal for creating unique property keys in objects to avoid naming conflicts.

//  2. Not Auto-Coerced to String
// Unlike most primitives, Symbol cannot be automatically converted to a string. Trying to concatenate or display it directly will throw an error:
const sym = Symbol('id');
console.log('My symbol is ' + sym); // TypeError
// You must explicitly convert it using String(sym) or sym.toString().

//  3. Use as Object Property Keys
// Symbols can be used as object keys, and those keys are non-enumerable by default (i.e., they don’t show up in for...in, Object.keys(), etc.):
const id = Symbol('id');
const username = {
  name: 'Alice',
  [id]: 123
};
// This allows developers to create hidden or internal properties.

// 4. Global Symbol Registry
// Symbols created using Symbol.for(key) are stored in a global registry:
const symb1 = Symbol.for('shared');
const symb2 = Symbol.for('shared');
console.log(symb1 === symb2); // true
// Useful for sharing symbols across different parts of code or modules.




// Qu. How do JavaScript data types differ from Java or Python?
// Ans. JavaScript, Java, and Python are all popular programming languages, but they handle data types in different ways due to differences in language design, typing systems, and runtime behavior. 
// 1. Typing System
// Feature	              JavaScript	            Java	                         Python
// Typing	            Dynamically typed	       Statically typed	          Dynamically typed
// Type checking	       At runtime        	   At compile time	            At runtime
// Type inference	  Some (with TypeScript)	  Yes (some in newer versions)	  Yes (dynamic, implicit)

// 2. Primitive Data Types

// JavaScript Primitives:
// Number (all numbers, including floats and ints)
// String
// Boolean
// undefined
// null
// Symbol
// BigInt

// Java Primitives:
// int, long, short, byte
// float, double
// char
// boolean

// Python Primitives (Built-in types):
// int
// float
// str
// bool
// NoneType (similar to null)

// Key Differences:

// JavaScript has a single Number type for both integers and floats.
// Java has fixed-size primitive types (e.g., int is 32-bit).
// Python supports arbitrary-precision integers by default.
// JavaScript’s undefined and null are separate (unlike Python's None or Java's null).

// 3. Objects and Complex Types

// JavaScript:
// Objects are key-value pairs; almost everything (except primitives) is an object.
// Arrays are a type of object.
// Functions are first-class objects.

// Java:
// Objects are instances of classes.
// Arrays are a distinct type, not general objects.
// Functions are not first-class citizens (until Java 8+ with lambdas).

// Python:
// Everything is an object (even functions, classes, and types).
// Lists, dictionaries, sets, and tuples are built-in types.
// Functions are first-class objects.

// Key Differences:
// JavaScript uses prototypes for inheritance; Java and Python use classes (Python supports multiple inheritance).
// Java is more rigid due to strong typing; JavaScript and Python are more flexible but risk runtime errors.

//  4. Special/Undefined Values
// Concept	          JavaScript	   Java	     Python
// Null value           	null       null	      None
// Undefined value	    undefined	   N/A       	N/A
// Not a Number	           NaN	  Double.NaN	  float('nan')
// JavaScript has both null and undefined, which can be a source of confusion.




// Qu. Is typeof a reliable way to determine a data type?
// Ans. The typeof operator in JavaScript is useful but not always reliable for determining data types due to some quirks and limitations.
// When typeof works reliably:
typeof "hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof Symbol()    // "symbol"
typeof BigInt(1)   // "bigint"
typeof function(){} // "function"
// These are all accurate and consistent.

//  When typeof is problematic or misleading:
// Value	                 typeof result	                          Why it's problematic
// null	                     "object"                     	This is a long-standing bug in JavaScript.
// Array.isArray([])	  true, but typeof [] is "object"  	  Arrays are objects; use Array.isArray() instead.
// typeof new Date()	        "object"	                    Cannot distinguish Date objects from other objects.
// typeof {}	                "object"	                    Same as with arrays — not specific.
// typeof NaN	                "number"	                    Technically true, but NaN is a special case.

// Summary:
// Use typeof for primitives (string, number, boolean, undefined, symbol, bigint, function).
// Use Array.isArray() for arrays.
// Use instanceof or Object.prototype.toString.call() for more detailed type checks.





// Qu. What are falsy values in JavaScript?
// Ans. 



// Qu. How can you check if a variable is an array?
// Ans. 