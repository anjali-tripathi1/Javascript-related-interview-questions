 
//  Datatypes=> In JavaScript, data types represent the kinds of values you can work with.

// Basic Level

// Qu. What are the different data types in JavaScript?
// Ans. In JavaScript, data types are broadly categorized into primitive types and reference types.

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
// Ans. In JavaScript, falsy values are values that, when evaluated in a Boolean context, are considered false.
// There are exactly seven falsy values in JavaScript:
// false – the Boolean value false itself.
// 0 – the number zero.
// -0 – negative zero.
// 0n – BigInt zero.
// "" – an empty string (single or double quotes).
// null – the absence of any value.
// undefined – a variable that has been declared but not assigned a value.
// NaN – Not-a-Number.
if (!false) console.log("Falsy");     // Falsy
if (!0) console.log("Falsy");         // Falsy
if (!"") console.log("Falsy");        // Falsy
if (!null) console.log("Falsy");      // Falsy
if (!undefined) console.log("Falsy"); // Falsy
if (!NaN) console.log("Falsy");       // Falsy

// All other values are truthy, meaning they evaluate to true in a Boolean context, including:
// Non-zero numbers (e.g., 1, -42)
// Non-empty strings (e.g., "hello")
// Arrays ([])
// Objects ({})
// Functions




// Qu. How can you check if a variable is an array?
// Ans. To check if a variable is an array, the method depends on the programming language you're using.

// JavaScript
// Use Array.isArray():
let arr = [1, 2, 3];
console.log(Array.isArray(arr)); // true




// Qu. What does typeof null return? Why is that considered a bug in JavaScript?
// Ans. In JavaScript:

typeof null // returns "object"

// Why is it considered a bug?
// Because semantically, null is not an object — it represents the absence of any object value. This makes its typeof result misleading and unintuitive:

typeof {}       // "object"
typeof []       // "object"
typeof null     // "object" <-- misleading!

// Why hasn't it been fixed?
// Changing this behavior now would break a huge amount of existing code, which relies on typeof null === "object" for backward compatibility. JavaScript values stability and backward compatibility, so the bug remains — now considered a "legacy quirk" rather than a fixable issue.

// To check for null, use:
value === null
// Rather than relying on typeof.


// Qu. How are primitive and reference types stored in memory?
// Ans. In JavaScript, primitive types and reference types are stored differently in memory, which affects how they behave — especially when assigned or passed to functions.
// Feature	                 Primitive	                       Reference
// Stored in	                  Stack	                 Heap (referenced from stack)
// Stored as	                 Actual value	             Reference (pointer)
// Mutability	                  Immutable	                   Mutable
// Assignment	                Creates a copy	            Copies the reference

// Primitive Types
// (Stored directly in the stack)
// Memory Behavior:
// Primitives are immutable and stored by value.
// Each variable holds its own copy of the value.

let c = 10;
let d = a;
b = 20;
console.log(a); // 10 (not affected by b)

// Stack:
// c → 10
// d → 20


// Reference Types
// (Stored in the heap, reference stored in the stack)
// Memory Behavior:
// Stored by reference.
// The stack holds a pointer (reference) to the object in the heap.
// If two variables point to the same object, changes via one variable affect the other.

let obj2 = { name: "Alice" };
let obj3 = obj1;
obj3.name = "Bob";
console.log(obj2.name); // "Bob"


// Stack:
// obj2 → 🡒 (ref) → Heap: { name: "Bob" }
// obj3 → 🡒 (same ref)

// Heap:
// { name: "Bob" }



// Qu. What is the difference between shallow copy and deep copy?
// Ans. In JavaScript, shallow copy and deep copy refer to how objects and arrays are duplicated—specifically how nested objects or arrays are handled in the copy.

// Shallow Copy
// A shallow copy creates a new object or array, but only copies references to nested objects/arrays instead of duplicating them.
// Copies:
// Primitive values (strings, numbers, booleans)
// Top-level properties

const original = { a: 1, b: { c: 2 } };
const shallow = { ...original };

shallow.b.c = 42;

console.log(original.b.c); // 42 — affected!

// Common Methods:
// Object.assign({}, obj)
// Spread syntax: { ...obj } or [...array]

//  Deep Copy
// A deep copy recursively copies all properties and nested structures, ensuring completely independent objects.
// Copies:
// Everything, including nested objects/arrays

const original1 = { a: 1, b: { c: 2 } };
const deep = JSON.parse(JSON.stringify(original1));

deep.b.c = 42;

console.log(original1.b.c); // 2 — unaffected!

// JSON.parse(JSON.stringify(obj)) doesn't handle functions, undefined, symbols, or circular references well.



// Qu. How does assigning one object to another variable work in JavaScript?
// Ans. In JavaScript, when you assign one object to another variable, you’re assigning a reference to that object, not a copy of the object.

let obj3 = { name: 'Alice' };
let obj4 = obj3;

obj4.name = 'Bob';

console.log(obj3.name); // 'Bob'

// What’s happening:
// obj1 holds a reference to an object: { name: 'Alice' }
// obj2 = obj1 makes obj2 point to the same object in memory.
// Changing obj2.name also changes obj1.name because they both point to the same object.



// Qu. What are different ways to check the data type of a variable?
// Ans. In JavaScript, there are several ways to check the data type of a variable. Each method has its own use case, strengths, and limitations.

//  1. typeof Operator
// The most commonly used way to check primitive types.
typeof 42;               // "number"
typeof "hello";          // "string"
typeof true;             // "boolean"
typeof undefined;        // "undefined"
typeof Symbol();         // "symbol"
typeof BigInt(123);      // "bigint"

typeof null;             // "object"  (quirk of JS)
typeof [1, 2, 3];        // "object"
typeof {a: 1};           // "object"
typeof function() {};    // "function"
// Limitation: Cannot distinguish between objects like arrays, null, or Date.


// 2. instanceof Operator
// Checks if an object is an instance of a constructor.
[] instanceof Array;                   // true
new Date() instanceof Date;           // true
// {} instanceof Object;                // true
// function(){}  instanceof Function;   // true
// Limitation: Doesn’t work well across different execution contexts (like iframes).


// 3. Object.prototype.toString.call()
// More reliable for complex types.
Object.prototype.toString.call(42);           // "[object Number]"
Object.prototype.toString.call("hello");      // "[object String]"
Object.prototype.toString.call([]);           // "[object Array]"
Object.prototype.toString.call(null);         // "[object Null]"
Object.prototype.toString.call(undefined);    // "[object Undefined]"
Object.prototype.toString.call(new Date());   // "[object Date]"
Object.prototype.toString.call(() => {});     // "[object Function]"
// Most precise and avoids pitfalls of typeof.


// 4. constructor Property
// You can access the constructor of an object:
let array = [1, 2, 3];
array.constructor === Array;       // true

let str = "hello";
str.constructor === String;      // true
//  Limitation: Can be tampered with (e.g., someone overrides .constructor).


// 5. ES6 Array.isArray()
// Specially made to check if a value is an array:
Array.isArray([]);         // true
Array.isArray({});         // false


// Qu. What does the instanceof operator do?
// Ans. The instanceof operator in JavaScript (and some other object-oriented languages) is used to check whether an object is an instance of a particular constructor or class.
object instanceof Constructor

// What it does:
// It returns true if the prototype property of the constructor appears anywhere in the prototype chain of the object.
// Otherwise, it returns false.
function Animal() {}
let dog = new Animal();

console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true (because all objects inherit from Object)
console.log(dog instanceof Array);  // false

// With classes:
class Person {}
let userOne = new Person();
console.log(userOne instanceof Person); // true

// Key Notes:
// It checks inheritance, not just direct creation.
// It's reliable for custom classes and constructor functions.
// For primitives (like numbers or strings), it returns false:




// Qu. What is the difference between implicit and explicit type conversion?
// Ans. In JavaScript, the difference between implicit and explicit type conversion is particularly important because JavaScript is a dynamically typed language, and type coercion can sometimes lead to unexpected results.

// Implicit Type Conversion (Type Coercion)
// Performed automatically by JavaScript
// Happens during operations between different types
// JavaScript tries to coerce values to a common type

let resultOne = '5' + 2;
console.log(resultOne); // "52" (number 2 is coerced to string)

let resultTwo = '5' * 2;
console.log(resultTwo); // 10 (string '5' is coerced to number)
// JS decides whether to convert to string, number, or boolean based on the operator and context.

// Explicit Type Conversion (Type Casting)
// Performed manually using built-in functions
// You intentionally convert a value to a specific type

let str1 = "123";
let num = Number(str1);    // Explicitly converting string to number
console.log(num);         // 123

let n = 456;
let str2 = String(n);     // Explicitly converting number to string
console.log(str2);        // "456"

// Common Pitfalls with Implicit Coercion
false == 0          // true
null == undefined   // true
' ' == 0            // true
// [] == ''            // true
// Always be cautious with == in JavaScript. Use === for strict equality to avoid unwanted coercion.



// Qu. How can you convert a string to a number in JavaScript?
// Ans. In JavaScript, there are several ways to convert a string to a number. Here are the most common methods:
// 1. Using Number()
// Converts the string to a number.
let strOne = "42";
let number = Number(strOne);
console.log(number); // 42

// 2. Using parseInt()
// Parses the string and returns an integer.
let strTwo = "42";
let numberTwo = parseInt(strTwo);
console.log(numberTwo); // 42

// 3. Using parseFloat()
// Parses the string and returns a floating-point number.
let strThree = "3.14";
let numberThree = parseFloat(strThree);
console.log(numberThree); // 3.14

// 4. Using the Unary + Operator
// A concise way to convert a string to a number.
let strFour = "42";
let numberFour = +strFour;
console.log(numberFour); // 42

// 5. Using Math.floor() or Math.ceil() (if applicable)
// These will also coerce the string into a number if it's numeric.
let strFive = "42.9";
let number5 = Math.floor(strFive);
console.log(number5); // 42

// Notes:
// If the string is not a valid number, methods like Number() or unary + will return NaN.
// parseInt() and parseFloat() are more forgiving and will parse as much as possible.



// Qu. How do you convert a number to a string?
// Ans. In JavaScript, you can convert a number to a string in several ways.
// 1. Using toString() method
let num1 = 123;
let str5 = num1.toString();
console.log(str5); // "123"

// 2. Using String() function
let num2 = 123;
let str6 = String(num2);
console.log(str6); // "123"

// 3. Using string concatenation
let num3 = 123;
let str7 = num3 + "";
console.log(str7); // "123"

// All three methods are valid. toString() is method-based, String() is function-based, and + "" is often used in quick or concise code, though it may be less readable.


// Intermediate level 

// Qu. What is the difference between Array and Object data types?
// Ans. The difference between Array and Object data types lies in how they store and access data.
//  Array
// Definition: An ordered collection of values.
// Indexing: Uses numeric indices (starting at 0).
// Use Case: When you want to store a list of items in a specific order (e.g., list of names, numbers).

let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // 'apple'

// Key Characteristics:
// Maintains order of elements.
// Values are accessed by index.
// Ideal for iteration and enumeration.


//  Object
// Definition: An unordered collection of key-value pairs.
// Key Type: Keys are usually strings (or symbols in JavaScript).
// Use Case: When you want to represent data as properties with named labels.

let person = {
  name: 'Alice',
  age: 30
};
console.log(person['name']); // 'Alice'

// Key Characteristics:
// Unordered by default (though modern engines often preserve insertion order).
// Accessed using keys (e.g., object['key'] or object.key).
// Best for storing structured data.




// Qu. What are template literals and what data type do they return?
// Ans. Template literals (also known as template strings) are a feature in JavaScript that allow you to embed expressions within string literals. They're enclosed by backticks (`) instead of regular single (') or double (") quotes.
const name = 'Alice';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!

// Key Features:
// String interpolation using ${} to insert variables or expressions.
// Multi-line strings without needing escape characters.
// Supports expression evaluation within the placeholder.

// Data Type Returned:
// Template literals always return a string.
typeof greeting; // "string"

// More Examples:
const p = 5;
const q = 10;
console.log(`The sum of ${p} and ${q} is ${p + q}`);
// Output: "The sum of 5 and 10 is 15"



// Qu. How does JavaScript treat numbers and BigInt?
// Ans. JavaScript treats numbers and BigInt as distinct types used for numerical values, but they behave differently in terms of precision, size, and operations.

// 1. Numbers in JavaScript
// Type: number
// Representation: Follows the IEEE 754 double-precision floating-point standard (64-bit).
// Range:
// Max safe integer: Number.MAX_SAFE_INTEGER = 2^53 - 1 (≈ 9 quadrillion)
// Min safe integer: Number.MIN_SAFE_INTEGER = -(2^53 - 1)
// Precision: Up to 15–17 decimal digits.
let w = 42;          // integer
let v = 3.14;        // float
let z = 1e21;        // exponential notation

// Limitations: Precision issues with large integers:
console.log(9007199254740992 === 9007199254740993); // true (should be false)


// 2. BigInt in JavaScript
// Type: bigint
// Purpose: Represents integers larger than Number.MAX_SAFE_INTEGER, with arbitrary precision.
// Created by: Appending n to the end of an integer or using BigInt().
let big = 9007199254740993n;
let big2 = BigInt("123456789012345678901234567890");

// Operations: Supports +, -, *, /, %, etc.
let j = 10n + 20n; // 30n

// Limitations:
// Cannot mix number and bigint directly:
10n + 10; // TypeError

// Use explicit conversion if needed:
BigInt(10) + 10n; // OK
Number(10n) + 10; // OK

// When to Use What
// Use number for general-purpose math, including decimals and performance-sensitive code.
// Use bigint when working with large integers (e.g., cryptography, precise counters) that exceed the safe range of number.







// Qu. What is Symbol in JavaScript and when would you use it?
// Ans. In JavaScript, a Symbol is a primitive data type introduced in ES6 (ECMAScript 2015). It’s used to create unique identifiers for object properties, which are guaranteed not to clash with any other property, even if the same name is used.

// What Is a Symbol?
// A Symbol is created using the Symbol() function:
const mySymbol = Symbol();

// You can also give it an optional description for debugging purposes:
const idSymbol = Symbol('id');

// Key Characteristics
// Uniqueness: Every symbol is unique, even if they have the same description:
Symbol('foo') === Symbol('foo'); // false

// Non-enumerable by default: Symbol-keyed properties do not appear in for...in, Object.keys(), or JSON.stringify().
// Use-case: Typically used to create hidden or special properties in objects to avoid accidental overwrites.

// When Would You Use a Symbol?
//  1. Avoid Property Name Collisions
// If you're working with objects that might be extended or modified by others (e.g., in a library), you can use symbols to avoid clashing with existing or future property names.
const SECRET = Symbol('secret');

const obje = {
  [SECRET]: 'hidden value'
};

console.log(obje[SECRET]); // 'hidden value'


// 2. Implement Private-like Properties (Soft Privacy)
// Symbols can be used to simulate private properties (though not fully private):
const _password = Symbol('password');

class User {
  constructor(password) {
    this[_password] = password;
  }

  checkPassword(pw) {
    return this[_password] === pw;
  }
}

// 3. Custom Behavior with Well-Known Symbols
// JavaScript defines several well-known Symbols to customize language behavior:
// Symbol.iterator — Makes an object iterable
// Symbol.toPrimitive — Customize how an object converts to a primitive
// Symbol.toStringTag — Customize [object Object] output
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (let value of myIterable) {
  console.log(value); // 1, 2, 3
}





// Qu. Explain the typeof return values for various built-in types (e.g., functions, arrays, null). 
// Ans. In JavaScript, the typeof operator returns a string that indicates the type of a given value. While it's mostly straightforward, there are a few quirks you should be aware of—especially with things like null and arrays.

// typeof Return Values for Common Built-in Types
// Value	               typeof Result	                       Notes
// undefined	              'undefined'	     The type of an uninitialized variable or undefined itself.
// null	                    'object'	              Quirk! Legacy behavior due to early JavaScript bug.
// true, false	            'boolean'	                        Standard boolean values.
// 42, 3.14, NaN	          'number'	          All numbers (including NaN and Infinity) return 'number'.    
// "hello", 'world'	        'string'	              Any string literal or object coerced to string.
// Symbol('id')	            'symbol'	             ES6 feature. Unique and immutable identifiers.
// 10n (BigInt)	            'bigint'	               ES2020 feature for arbitrarily large integers.
// function() {}	          'function'	       Only functions return 'function' (a subtype of object).
// [] (Array)	              'object'	       Arrays are objects; use Array.isArray() to distinguish.
// {} (Object literal)	    'object'	                       Standard object.
// new Date()	              'object'	                    Built-in object type.
// class Foo {}	            'function'	         Classes are technically special functions.


// Key Quirks and Gotchas
//  typeof null === 'object'
// This is a well-known JavaScript bug:
typeof null; // "object"
// This behavior stems from the early days of JavaScript and cannot be fixed due to backward compatibility.

// Arrays are 'object'
typeof [];         // "object"
Array.isArray([]); // true
// To accurately check if something is an array, use Array.isArray().

//  Functions have a special type
typeof function(){}; // "function"
// This is the only "subtype" that typeof exposes directly.

// NaN is a number
typeof NaN; // "number"
// Because NaN stands for “Not-a-Number”, it's ironically still of type 'number'.

// How to Better Check Types
// For more precise checks, you can use:
Object.prototype.toString.call(value);
// Examples:
Object.prototype.toString.call(null);     // "[object Null]"
Object.prototype.toString.call([]);       // "[object Array]"
Object.prototype.toString.call(() => {}); // "[object Function]"

// Summary Table of typeof Results
typeof undefined      // "undefined"
typeof null           // "object"    //  quirk
typeof true           // "boolean"
typeof 42             // "number"
typeof "hello"        // "string"
typeof Symbol()       // "symbol"
typeof 10n            // "bigint"
typeof []             // "object"    // Use Array.isArray()
typeof {}             // "object"
typeof function() {}  // "function"
typeof class X {}     // "function"



// Qu. What is NaN and how is it different from undefined or null?
// Ans. the differences between NaN, undefined, and null, especially in the context of JavaScript, where these terms are commonly used.
// NaN (Not-a-Number)
// Type: number
// Meaning: A value that is not a valid number, even though it’s technically of the number type.
// When it appears: Usually when a mathematical operation fails.
let resul = 0 / 0;       // NaN
parseInt("abc");          // NaN
Math.sqrt(-1);            // NaN

// Key behavior:
// NaN === NaN is false.
// Use Number.isNaN(value) to reliably check for NaN.

// undefined
// Type: undefined
// Meaning: A variable has been declared but not assigned a value.
// When it appears:
// Accessing a variable that hasn't been assigned.
// A function that doesn't return a value.
// Accessing a non-existent object property.
let s;
console.log(s);           // undefined

function foo() {}
console.log(foo());       // undefined

let objec = {};
console.log(objec.key);     // undefined

// null
// Type: object (this is a known design flaw in JavaScript)
// Meaning: Represents the intentional absence of any object value.
// When to use: When you want to explicitly say "this variable should be empty" or "no value".
let user1 = null;         // deliberately no value

Gotchas
// typeof NaN === "number"  (surprisingly!)
// typeof undefined === "undefined" 
// typeof null === "object"  (a legacy bug in JavaScript)








// Qu. Why is typeof NaN === "number"?
// Ans. The reason typeof NaN === "number" in JavaScript boils down to how NaN is defined in the language specification.

// Why NaN is a "number"
// NaN stands for "Not-a-Number", but ironically, it is considered a value of the number type in JavaScript.
// This is because NaN is part of the IEEE 754 floating-point standard, which JavaScript uses for all its numeric values.

// In other words:
// NaN is a special numeric value that represents an invalid or unrepresentable number, such as the result of 0 / 0 or Math.sqrt(-1).

// IEEE 754 & JavaScript Numbers
// JavaScript doesn’t have separate types for integers, floats, or special values like Infinity or NaN. All numeric values are treated as 64-bit floating-point numbers under the IEEE 754 spec. That includes:
// Regular numbers (42, 3.14)
// Infinity
// -Infinity
// NaN
typeof NaN
// JavaScript sees NaN as just another (albeit special) numeric value, and returns:
"number"

// Why It Feels Confusing
// It's counterintuitive because "Not-a-Number" sounds like it shouldn’t be a number at all.
// But think of it more as: “This should be a number, but the operation failed to produce a valid one.”
let badCalc = "hello" * 3;
console.log(badCalc);         // NaN
console.log(typeof badCalc);  // "number"

// Even though the multiplication makes no sense, the result is still of type "number"—just an invalid one.





// Qu. What is the difference between Infinity, -Infinity, and NaN?
// Ans. Infinity, -Infinity, and NaN are all special numeric values in JavaScript (and in IEEE 754 floating-point math, which JavaScript uses under the hood).

// Infinity
// Type: number
// Represents: A value greater than any other number — positive infinity.
// Occurs When:
// A number exceeds the maximum possible value.
// Dividing a positive number by 0.
1 / 0          // Infinity
Number.MAX_VALUE * 2  // Infinity


// -Infinity
// Type: number
// Represents: A value less than any other number — negative infinity.
// Occurs When:
// A very large negative number underflows.
// Dividing a negative number by 0.
-1 / 0         // -Infinity
-Number.MAX_VALUE * 2  // -Infinity

// NaN (Not-a-Number)
// Type: number
// Represents: A result that isn’t a valid number, even though it's in the number type family.
// Occurs When:
// Math fails: e.g. dividing 0 / 0, parsing non-numeric strings, or invalid math ops.
0 / 0            // NaN
parseInt("abc")  // NaN
Math.sqrt(-1)    // NaN

// Quick Code Demo

console.log(typeof Infinity);      // "number"
console.log(typeof -Infinity);     // "number"
console.log(typeof NaN);           // "number"

console.log(Infinity > 1e308);     // true
console.log(NaN === NaN);          // false
console.log(Number.isNaN(NaN));    // true




// Qu. What is the isNaN() function and how does it work?
// Ans. The isNaN() function is a built-in JavaScript function that determines whether a value is NaN (Not-a-Number). It is often used to check if a value cannot be converted into a valid number.

isNaN(value)
// value: The value to be tested.

// Returns:
// true if the value is NaN or cannot be converted into a number.
// false if the value is a number or can be coerced into a number.

// How it Works:
// isNaN() tries to convert the value to a number. If the result is NaN, it returns true.
isNaN("hello")    // true — cannot be converted to a number
isNaN("123")      // false — can be converted to number 123
isNaN(123)        // false — it is already a number
isNaN(NaN)        // true — it is NaN
isNaN(undefined)  // true — cannot be converted to a number

//  Important Note:
// The global isNaN() can be misleading because it coerces the value to a number first. For stricter checking, use Number.isNaN() instead.

Number.isNaN("hello")    // false — no coercion, "hello" !== NaN
Number.isNaN(NaN)        // true

// Use Number.isNaN() when you want to check if a value is truly the special NaN value, without coercion.



// Qu. What is the difference between Number.isNaN() and isNaN()?
// Ans. The difference between Number.isNaN() and isNaN() in JavaScript lies in how strictly they check for NaN and what kinds of values they accept or convert.
// isNaN(value)
// Loosely checks whether a value is NaN after coercing it to a number.
// It tries to convert the value to a number first, and then checks if the result is NaN

isNaN("hello")     // true  → "hello" becomes NaN
isNaN(undefined)   // true  → undefined becomes NaN
isNaN("123")       // false → "123" becomes 123
isNaN(NaN)         // true
// Good for loose checking, but may return true for things that aren't actually NaN (like strings or undefined).

// Number.isNaN(value)
// Strictly checks whether a value is actually the NaN value (without coercion).
// It does not convert the value to a number.

Number.isNaN("hello")     // false → "hello" is not NaN
Number.isNaN(undefined)   // false
Number.isNaN("123")       // false
Number.isNaN(NaN)         // true
// Safer and more predictable — it only returns true if the value is exactly NaN.
// Use Number.isNaN() when you want to reliably check if a value is really NaN.




// Qu. What are BigInt numbers? How do they differ from regular numbers?
// Ans. BigInt is a special numeric data type used in programming (notably in JavaScript and other languages) to represent arbitrarily large integers, beyond the limits of regular number types.

// Differences Between BigInt and Regular Numbers:
// Feature	           Regular Numbers (Number type)            	BigInt
// Data Type	       Number (IEEE 754 double-precision)	          BigInt
// Max Safe Value	    Up to 2^53 - 1 (≈ 9 quadrillion)	   Arbitrary size (limited by memory)
// Syntax	               Just digits (e.g., 123)	          Add n at the end (e.g., 123n)
// Decimal Support	     Supports floating-point numbers	    Only supports integers
// Precision	       Can lose precision with large integers	     Always precise
// Performance	         Faster for most operations	          Slower, especially with large values
// Operations        	Works with +, -, *, /, etc.	          Similar, but mixed-type ops throw errors

const regular = 9007199254740991;  // Max safe integer
const tooBig = 9007199254740993;   // Precision is lost
console.log(tooBig === 9007199254740992);  // true — precision issue

const bigInt = 9007199254740993n;
console.log(bigInt + 1n);  // 9007199254740994n — accurate!

// When to Use BigInt:
// When working with very large integers (e.g., cryptography, precise timestamps).
// When integer accuracy is crucial and values exceed the safe limit for Number.

// Note: You cannot mix Number and BigInt in most operations directly without explicit conversion.


// Qu. How are strings represented in JavaScript?
// Ans. n JavaScript, strings are represented as immutable sequences of UTF-16 code units.

// Basic Characteristics of JavaScript Strings:
// Primitive Type:
// Strings are one of JavaScript’s primitive data types (alongside number, boolean, null, undefined, symbol, and bigint).

// Immutable:
// Once a string is created, it cannot be changed. Any operation that appears to modify a string actually creates a new string.

// UTF-16 Encoding:
// Internally, strings are sequences of 16-bit code units using UTF-16 encoding:

// Most common characters (e.g. ASCII) are stored in a single 16-bit unit.

// Characters outside the Basic Multilingual Plane (e.g., many emojis or some Chinese characters) are represented by a pair of 16-bit code units, known as a surrogate pair.

let star = "Hello 👋";
console.log(star.length); // 7 — because "👋" is a surrogate pair (2 units)

// Even though "👋" appears as one character, .length counts UTF-16 code units, so it counts as 2.

// Working with Strings:
// JavaScript provides a rich set of string methods:
// .length — gets the number of UTF-16 code units
// .charAt(index) — gets the UTF-16 code unit at a given index
// .slice(), .substring(), .substr() — extract substrings
// .replace(), .split(), .toUpperCase() — manipulate string content

// Unicode Awareness:
// For working accurately with characters (especially emojis or non-Latin scripts), you might need modern Unicode-aware methods:
// Array.from(string)
// String.prototype.codePointAt()
// for...of loop over the string
// String.fromCodePoint()

let emoji = "👨‍👩‍👧‍👦"; // Family emoji (uses zero-width joiners)
console.log([...emoji]); // Logs individual Unicode characters









// Qu. What are template literals?
// Ans. Template literals (also known as template strings) are a feature in JavaScript that allows you to create strings with embedded expressions, multi-line support, and enhanced readability. They were introduced in ES6 (ECMAScript 2015).

// Syntax
// Template literals are enclosed by backticks (`), instead of single (') or double (") quotes.
let name1 = "Alice";
let greeting1 = `Hello, ${name1}!`;
console.log(greeting1); // "Hello, Alice!"



// Qu. What is a Symbol? Why would you use one?
// Ans. In JavaScript, a Symbol is a primitive data type introduced in ES6 (2015). It represents a unique and immutable identifier. Symbols are often used to create hidden or unique properties on objects that won't clash with other property keys.

const symbol = Symbol(); // A unique symbol
const namedSym = Symbol("description"); // Optional description

// Even if two symbols have the same description, they are not equal:
Symbol("id") === Symbol("id"); // false

//  Why Use a Symbol?
//  1. Avoid Property Name Collisions
// When working with objects that might be extended or modified (like in libraries or frameworks), you can use Symbols to create non-conflicting keys:

const ID = Symbol("id");

let user2 = {
  name: "Alice",
  [ID]: 1234 // Hidden, unique key
};
// No other code can accidentally overwrite or access user[ID] unless it has the same symbol reference.

//  2. Define "Hidden" Object Properties
// Symbol-keyed properties are not visible during normal iteration:
for (let key in user) {
  console.log(key); // "name" only — `ID` is skipped
}

console.log(Object.keys(user)); // ["name"]
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id)]




// Qu. Can you use Symbols as object keys? Why or why not?
// Ans. Yes, you can use Symbols as object keys in JavaScript.

// Why?
// JavaScript object keys can be:
// Strings
// Symbols
// A Symbol is a primitive data type introduced in ES6 that represents a unique identifier. Because each Symbol is unique, even if two symbols have the same description, they are not equal:

Symbol('id') === Symbol('id'); // false

// Why use Symbols as keys?
// Uniqueness: Prevents property name collisions.
// Non-enumerability: Symbol keys are not included in:
// for...in
// Object.keys()
// JSON.stringify()
// This helps define "hidden" properties on objects.
// Safe for extensions: Useful in libraries or APIs where you want to add metadata or internal properties without affecting the user’s object.

const sym3 = Symbol('secret');

const user3 = {
  name: 'Alice',
  [sym]: 'hidden value'
};

console.log(user3.name);        // 'Alice'
console.log(user3[sym3]);        // 'hidden value'
console.log(Object.keys(user3)); // ['name']

// Why not always use them?
// Not enumerable by default (you have to use Object.getOwnPropertySymbols()).
// Not serializable via JSON.stringify().
// Can make debugging harder if overused.

// You can use Symbols as object keys because they’re a supported primitive type that allows for unique, non-colliding, optionally hidden property keys—useful for advanced or internal object design.




// Qu. How are arrays different from objects in JavaScript?
// Ans. Arrays and objects in JavaScript are both reference types, but they serve different purposes and have distinct characteristics.

// Key Differences Between Arrays and Objects
// Feature	                        Arrays	                            Objects
// Purpose	          Store ordered collections of data	             Store key-value pairs (unordered)
// Key Type	           Indexed by numbers (0, 1, 2, …)        	     Indexed by strings or Symbols
// Built-in Methods	 Has many (e.g., .push(), .map(), .filter())	  Fewer by default (e.g., Object.keys(), 
                                                                                  //  Object.values())

// Length property	   Has .length to track number of elements	     No .length property by default
// Iteration	      Best used with loops like for, forEach, map	     Iterated with for...in, Object.entries
                                                                          // (), etc

// Use case                Lists, sequences, stacks, queues           Dictionaries, configurations, 
//                                                                         objects with named properties

// Array:
const fruit = ['apple', 'banana', 'cherry'];
console.log(fruit[1]);     // 'banana'
console.log(fruit.length); // 3

// Object:
const persons = { name: 'Alice', age: 30 };
console.log(persons.name);   // 'Alice'
console.log(Object.keys(persons)); // ['name', 'age']

// Under the Hood
// Arrays are a special kind of object where keys are numeric indices and values are stored in order.
// You can technically add properties to an array like an object:
const arrays = [1, 2];
arrays.name = "Numbers";
console.log(arrays.name); // "Numbers"

// But this is not standard usage and should be avoided.





// Qu. How can you clone an object in JavaScript? 
//  Ans. In JavaScript, cloning an object can be done in several ways depending on whether you want a shallow copy or a deep copy:

// 1. Shallow Clone (one level deep)
// A shallow copy only copies the top-level properties. Nested objects or arrays will still reference the same memory.

// Option A: Using Object.assign()
const originalval = { a: 1, b: 2 };
const clone = Object.assign({}, originalval);

//  Option B: Using Spread Syntax { ... }
const originalval1 = { a: 1, b: 2 };
const clone1 = { ...originalval1 };

// 2. Deep Clone (including nested objects/arrays)
// A deep copy means all levels of the object are cloned, not just the first.
//  Option A: JSON Methods (simple but limited)
const originalval2 = { a: 1, b: { c: 2 } };
const clone2 = JSON.parse(JSON.stringify(originalval2));
// Limitations:
// Cannot clone functions, undefined, Date, Map, Set, circular references, etc.

//  Option B: Using structuredClone() (modern & robust)
const originalval3 = { a: 1, b: { c: 2 } };
const clone3 = structuredClone(originalval3);
// Available in modern browsers and Node.js 17+
// Supports most types including Date, Map, Set, and handles circular references.

// Option C: Using a library like Lodash
import cloneDeep from 'lodash/cloneDeep';

const originalval4 = { a: 1, b: { c: 2 } };
const clone4 = cloneDeep(originalval4);




// Qu. How do you check if a value is an object?
// Ans. To check if a value is an object (and not something like null or an array), you need to be careful, because:

// typeof null === 'object'  but it's not a usable object'
// Arrays are technically objects too: typeof [] === 'object'

//  Best way to check if a value is a plain object:
function isPlainObject(value) {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value)
  );
}

// This checks:
// typeof value === 'object' → must be object-like
// value !== null → filters out null
// !Array.isArray(value) → filters out arrays




// Qu. What is the difference between a Map and an Object?
// Ans. The difference between a Map and an Object in JavaScript lies in how they store data, what types of keys they accept, their performance characteristics, and intended use cases.
// 1. Key Types
// Feature	                          Object	                             Map
// Key Types	                   Strings and Symbols      	Any type (objects, functions, etc.)

const object1 = {};
object1[42] = 'value';         // 42 is converted to "42"

const map1 = new Map();
map1.set(42, 'value');      // 42 stays as a number

// 2. Ordering of Keys
// Feature	Object	Map
// Key Order	Unordered (mostly)	Ordered (insertion order)
const map2 = new Map();
map2.set('a', 1);
map2.set('b', 2);
console.log([...map2]); // [['a', 1], ['b', 2]]

// 3. Performance
// Operation	                       Object	                      Map
// Frequent Add/Delete	             Slower	                    Faster
// Large Data Sets	              Less optimized	             Optimized
// Maps are generally faster for frequent additions/removals.


// 4. Iteration
// Feature	                       Object                        	Map
// Iteration Support	     Not iterable directly	    Iterable with for...of, spread
// Methods	                  Object.keys() etc.	      .entries(), .forEach(), etc.
const map = new Map([['a', 1]]);
for (const [key, value] of map) {
  console.log(key, value);
}


// 5. Prototype Inheritance
// Feature	Object	Map
// Inherits from	Object.prototype	None (pure data)
// This means objects can accidentally inherit unwanted properties (like toString), unless you create them with Object.create(null).
// Object
const object2 = { name: "Alice" };
object2["age"] = 30;

// Map
const map3 = new Map();
map3.set("name", "Alice");
map3.set("age", 30);
map3.set({ key: "obj" }, "value"); // Allowed in Map



// Qu. What is the difference between a Set and an Array?
// Ans. The key difference between a Set and an Array lies in how they store data and what operations they optimize for. 
// Array
// An Array is an ordered collection of elements, where:
// Duplicates are allowed
// Elements are accessed via indices (0-based)
let array2 = [1, 2, 3, 2];
console.log(array2[1]); // Output: 2
// Key Characteristics:
// Maintains insertion order
// Can contain duplicate values
// Allows indexed access (e.g., arr[0])
// Useful for tasks where order matters or you need position-based access

// Set
// A Set is an unordered collection of unique values.
// Example (in JavaScript):
let mySet = new Set([1, 2, 3, 2]);
console.log(mySet); // Output: Set {1, 2, 3}

// Key Characteristics:
// No duplicates allowed (automatically filters them out)
// Does not maintain order (in some languages, like Python’s set)
// No index-based access (you can't do mySet[0])
// Ideal for checking existence (has(value)) or ensuring uniqueness









// Qu. What is the difference between Object.create() and a constructor function?
// Ans. Both Object.create() and constructor functions are used in JavaScript to create objects, but they do it in different ways and have different use cases.

// Object.create()
//  Purpose:
// Creates a new object and sets the specified object as its prototype.
const proto = {
  greet() {
    console.log("Hello!");
  }
};

const object3 = Object.create(proto);
object3.greet(); // Output: "Hello!"
// Key Features:
// You manually define the prototype.
// Returns a plain object.
// No this, no constructor logic.
// Great for simple inheritance or prototype delegation.

// Constructor Function
//  Purpose:
// Defines a template for creating multiple objects using the new keyword.
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hello, I'm ${this.name}`);
};

const person1 = new Person("Alice");
person1.greet(); // Output: "Hello, I'm Alice"

// Key Features:
// Used with the new keyword.
// Automatically sets the prototype.
// this refers to the new instance.
// Better for object blueprints and instantiation.

// Using Object.create
const animal = { type: 'animal' };
const dogs = Object.create(animal);
console.log(dogs.type); // 'animal' (inherited)

// Using constructor function
function Animal() {
  this.type = 'animal';
}
const cat = new Animal();
console.log(cat.type); // 'animal' (own property)





// Qu. What are WeakMap and WeakSet?
// Ans. WeakMap and WeakSet are special types of collections in JavaScript that allow for "weakly held" references to objects. This has big implications for memory management and garbage collection.
// WeakMap
//  Purpose:
// A WeakMap is like a regular Map, but:
// Keys must be objects (not primitives)
// Keys are weakly referenced—if there’s no other reference to the key object, it can be garbage collected

const wm = new WeakMap();

let object4 = {};
wm.set(object4, "some value");

console.log(wm.get(obj)); // "some value"

obj = null; // Now the object can be garbage collected
// Key Features:
// Only objects as keys
// Values can be any type
// No way to iterate, clear, or check size
// Useful for private data storage (e.g., in class instances)

// WeakSet
//  Purpose:
// A WeakSet is like a Set, but:
// Only holds objects (no primitives)
// Objects are held weakly
const ws = new WeakSet();

let user4 = { name: "Alice" };
ws.add(user4);

console.log(ws.has(user)); // true

user = null; // The object can be garbage collected

// Key Features:
// Only objects allowed
// Automatically removes objects once they're no longer referenced
// No iteration, size, or clear method

// Why Use Them?
// Helps avoid memory leaks
// Good for caching, private data, or tracking object lifetimes
// Because of weak references, they allow JavaScript’s garbage collector to clean up when objects are no longer needed—even if they're still inside a WeakMap or WeakSet







// Qu. When would you use a WeakMap or WeakSet over Map/Set?
// Ans. You'd use a WeakMap or WeakSet over a regular Map or Set in specific cases where memory management and object references are critical, particularly for:

//  When to use WeakMap or WeakSet:
// 1. When you want to associate data with objects without preventing garbage collection
// WeakMap lets you attach metadata to an object without keeping it alive in memory.
// Once there are no more references to the object elsewhere, it will be garbage collected, even if it's a key in the WeakMap.
let object5 = {};
let wm1 = new WeakMap();

wm1.set(object5, 'some metadata');

object5 = null; // Now both obj and its metadata in wm can be garbage collected

// In contrast, Map would keep obj and its value alive as long as the map exists.

// 2. For internal/private data in classes or libraries
// WeakMap is often used to store private data that you don’t want accessible from outside the class.
const privateData = new WeakMap();

class Person {
  constructor(name) {
    privateData.set(this, { name });
  }

  getName() {
    return privateData.get(this).name;
  }
}
// No one outside can access privateData, and the data is cleaned up when the Person instance is.

// 3. When tracking object existence without preventing garbage collection (WeakSet)
// WeakSet only stores object references, and those objects can still be garbage collected.
// Useful for marking or tracking objects, like caching or tracking visited nodes.

let visited = new WeakSet();

function traverse(node) {
  if (visited.has(node)) return;
  visited.add(node);
  // ... do something
}

//  When not to use WeakMap or WeakSet:
// You need to iterate over the keys/values (they are not iterable).
// You want to know how many items are in the structure (no .size property).
// You’re using primitive keys or values (they only work with objects).
// You want to store data persistently; they’re for ephemeral use only.







// Qu. How does JavaScript garbage collection relate to WeakMaps?
// Ans. JavaScript's garbage collection (GC) and WeakMap are tightly connected—WeakMap is designed to allow objects to be garbage collected even if they’re used as keys. Here's how it works and why it matters:

// What is JavaScript Garbage Collection (GC)?
// GC is the process by which JavaScript automatically frees memory that’s no longer in use. An object becomes "garbage" (eligible for collection) when nothing references it anymore.

// How WeakMap Relates to Garbage Collection
//  WeakMap keys are weakly held
// In a WeakMap, keys must be objects, and those object keys are held weakly.

// This means the presence of the object as a key in the WeakMap does NOT prevent it from being garbage collected.

//  When an object key becomes unreachable:
// If there are no other references to the object key outside the WeakMap, that object and its associated value in the WeakMap are automatically removed during garbage collection.

// You can’t observe this cleanup directly, because:
// WeakMap is not iterable.
// You can’t check its size.
// There's no notification when GC happens.

// Practical Use: Memory-Efficient Object Metadata
// Imagine a DOM manipulation library that stores layout info for elements:

let elementData = new WeakMap();

function setLayout(el, layout) {
  elementData.set(el, layout);
}

function getLayout(el) {
  return elementData.get(el);
}

// Why this matters
// With regular Map, keys are strongly held: even if an object has no other references, it won’t be GC’d as long as it’s a key in the map.
// WeakMap lets you avoid memory leaks in scenarios where you associate temporary data with objects (like DOM nodes or class instances).





// Qu. What are typed arrays in JavaScript?
// Ans. Typed arrays in JavaScript are array-like objects that provide a mechanism to read and write raw binary data in memory buffers. They are used when you're working with binary data—like from files, WebSockets, or WebGL.
// Key Concepts:
// ArrayBuffer:
// A fixed-length binary data buffer.
// Represents a generic, fixed-length raw binary data buffer.
// Doesn't have a method to access data directly—you use views like typed arrays to read/write.

// Typed Array Views:
// Views over an ArrayBuffer that allow you to interpret the buffer data as various numeric types.
// Examples: Int8Array, Uint8Array, Float32Array, Uint16Array, etc.

// Create a buffer of 8 bytes
let buffer = new ArrayBuffer(8);

// Create a 32-bit integer view into the buffer
let int32View = new Int32Array(buffer);

// Assign values
int32View[0] = 42;
int32View[1] = 100;

console.log(int32View); // Int32Array(2) [42, 100]

// Why Use Typed Arrays?
// Better performance with binary data.
// Required for interacting with certain APIs (like WebGL).
// Fine-grained control over memory layout.

// Important Notes:
// Typed arrays have fixed length once created.
// Each type has a specific byte size per element.
// Endianness may matter when interpreting bytes.






// Qu. What is the type of a function in JavaScript?
// Ans. In JavaScript, the type of a function is "function".
// You can check this using the typeof operator:
function greet() {
  console.log("Hello!");
}

console.log(typeof greet); // "function"

// Breakdown:
// Functions are first-class objects in JavaScript.
// While typeof returns "function", under the hood, functions are objects with special callable behavior.
// Functions can have properties, be passed as arguments, returned from other functions, and stored in variables.

console.log(typeof function(){}); // "function"
console.log(typeof (() => {}));   // "function"
console.log(typeof class A {});   // "function" (yes, classes are functions too)

// Although typeof returns "function", the internal class is:

Object.prototype.toString.call(greet); // "[object Function]"



// Qu. Can functions be assigned to variables? Why?
// Ans. Yes, functions can absolutely be assigned to variables in JavaScript—and this is a core feature of the language.

// Why?
// Because functions are first-class objects in JavaScript. This means:
// They can be assigned to variables
// Passed as arguments to other functions
// Returned from other functions
// Stored in arrays, objects, etc.

// Example: Assigning a Function to a Variable

const sayHello = function() {
  console.log("Hello!");
};

sayHello(); // "Hello!"

// Or using an arrow function:

const add = (a, b) => a + b;

console.log(add(2, 3)); // 5

// Why This Matters
// Assigning functions to variables makes functional programming patterns possible, such as:
// Callbacks (e.g. in setTimeout, event listeners)
// Higher-order functions (functions that take or return functions)
// Composition of behaviors dynamically

// Summary
// Yes, functions can be assigned to variables because JavaScript treats them as first-class objects. This gives the language a great deal of flexibility and expressiveness.










// Qu. What is the difference between function declarations and function expressions?
// Ans. The key difference between function declarations and function expressions in JavaScript lies in how they're defined, when they’re hoisted, and how they behave in code execution.

// 1. Function Declaration
// A function declaration defines a named function using the function keyword at the top level of a script or block.
function greet() {
  console.log("Hello!");
}

// Hoisted: You can call it before it's defined in the code.

greet(); //  Works!

function greet() {
  console.log("Hello!");
}

// 2. Function Expression
// A function expression defines a function as part of an expression, usually assigned to a variable.
const greet = function() {
  console.log("Hello!");
};

// Not hoisted (in usable form): You can't call it before the assignment.

greet(); //  TypeError: greet is not a function

const greet = function() {
  console.log("Hello!");
};

// Named vs Anonymous Function Expressions
// You can name the function in an expression (named function expression), or leave it anonymous:

// Anonymous
const sayHi = function() {};

// Named
const sayBye = function bye() {};
// The name bye is only accessible inside the function body (useful for recursion or debugging stack traces).





// Qu. What is a callback function?
// Ans. A callback function in JavaScript is a function that is passed as an argument to another function, and is executed later—usually after some kind of event or operation completes.

// Why Use Callbacks?
// Callbacks let you:
// Defer execution until something happens (like a button click or data load)
// Customize behavior of generic functions
// Handle asynchronous code (like reading files, fetching data)

function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// Output:
// Hello, Alice
// Goodbye!

// Here, sayGoodbye is a callback passed into greet.



// Qu. How do closures affect the data types captured inside?
// Ans. Closures in JavaScript don’t change the data types of the variables they capture—but they preserve access to those variables and their current values even after the outer function has finished executing.

// What Is a Closure?
// A closure is a function that "remembers" the environment (scope) in which it was created.
function outer() {
  let count = 0; // primitive type

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2

// Here, inner() closes over count. It remembers count even though outer() has finished.

// How Are Data Types Affected?
// Type                                                     	Behavior in Closure
// Primitives (number, string, boolean, etc.)	            Captured by value; latest value is used
// Objects (object, array, function)	                  Captured by reference; changes affect the closure

function createLogger() {
  let message = "Hello";

  return function log() {
    console.log(message); // Uses current value
  };
}

const logger = createLogger();
logger(); // "Hello"

// Even if message is a primitive, the closure remembers it.



// Advanced Level
// Qu. How does JavaScript internally represent different data types (boxed objects vs primitives)?

// Qu. What are wrapper objects in JavaScript? (e.g., new String("abc"))

// Qu. How are objects compared in JavaScript?

// Qu. Explain the difference between shallow copy and deep copy. How do data types affect this?

// Qu. How can you clone an object properly in JavaScript?

// Qu. What is structural typing vs nominal typing, and how does JavaScript handle types?

// Qu. Why is typeof NaN equal to 'number'? What’s the rationale behind it?

// Qu. What are typed arrays in JavaScript? When would you use them?

// Qu. What is a WeakMap and WeakSet, and how do they relate to object data types?

// Qu. Why is typeof [] equal to "object"?

// Qu. Why is typeof function() {} equal to "function" but still technically an object?

// Qu. What are wrapper objects (new Number(), new String(), etc.), and why should you avoid them?

// Qu. How is equality checked for objects vs primitive values?

// Qu. What’s the difference between deep equality and shallow equality?

// Qu. What happens when you use JSON.stringify() on different data types?

// Qu. What values are falsy in JavaScript?

// Qu. What is autoboxing in JavaScript?