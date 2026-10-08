/**
 * ============================================================================
 * 01 - VARIABLES & DATA TYPES IN JAVASCRIPT
 * ============================================================================
 * Run in terminal: node js_basics/01_core_fundamentals/01_variables_and_datatypes.js
 * 
 * Key Concepts:
 * 1. Declaration keywords: var (function-scoped), let (block-scoped), const (immutable reference)
 * 2. JavaScript Data Types:
 *    - Primitives: string, number, boolean, undefined, null, symbol, bigint
 *    - Reference types: Object, Array, Function
 * 3. Type Checking: typeof operator and its edge cases
 * 4. Type Conversion: Explicit vs Implicit (Coercion)
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. DECLARATION KEYWORDS (var vs let vs const)");
console.log("==================================================");

// 'let' - block scoped, can be reassigned
let userName = "Abinanthan";
let userAge = 20;
console.log(`Initial User: ${userName}, Age: ${userAge}`);
userAge = 21; // valid reassignment
console.log(`Updated Age: ${userAge}`);

// 'const' - block scoped, cannot be reassigned
const BIRTH_YEAR = 2004;
console.log(`Birth Year (constant): ${BIRTH_YEAR}`);
// BIRTH_YEAR = 2005; // ❌ TypeError: Assignment to constant variable.

// Note: const objects and arrays can have their internal properties mutated:
const userProfile = { name: "Abinanthan", role: "Developer" };
userProfile.role = "Senior Developer"; // ✅ Allowed! Reference doesn't change
console.log("Mutated const object:", userProfile);

// 'var' - function scoped, hoisted with undefined (Legacy, avoid in modern JS)
var legacyVar = "I am function-scoped";
console.log("var value:", legacyVar);


console.log("\n==================================================");
console.log("▶ 2. PRIMITIVE DATA TYPES");
console.log("==================================================");

const aString = "Hello, JavaScript!";
const anInteger = 42;
const aFloat = 3.14159;
const aBoolean = true;
let notAssigned; // undefined
const emptyValue = null; // intentional absence of value
const uniqueId = Symbol("id"); // unique identifier
const bigNumber = 9007199254740991n; // BigInt for integers beyond 2^53 - 1

console.log("String:   ", aString, "       | typeof:", typeof aString);
console.log("Integer:  ", anInteger, "              | typeof:", typeof anInteger);
console.log("Float:    ", aFloat, "         | typeof:", typeof aFloat);
console.log("Boolean:  ", aBoolean, "            | typeof:", typeof aBoolean);
console.log("Undefined:", notAssigned, "       | typeof:", typeof notAssigned);
console.log("Null:     ", emptyValue, "            | typeof:", typeof emptyValue, "(Note: legacy JS bug!)");
console.log("Symbol:   ", uniqueId.toString(), "  | typeof:", typeof uniqueId);
console.log("BigInt:   ", bigNumber.toString(), "| typeof:", typeof bigNumber);


console.log("\n==================================================");
console.log("▶ 3. REFERENCE DATA TYPES");
console.log("==================================================");

const fruitsArray = ["Apple", "Orange", "Banana"];
const personObj = { firstName: "Spongebob", lastName: "Squarepants", age: 30 };
const greetFunction = function() { return "Hello!"; };

console.log("Array:   ", fruitsArray, "| Array.isArray?:", Array.isArray(fruitsArray), "| typeof:", typeof fruitsArray);
console.log("Object:  ", personObj, "| typeof:", typeof personObj);
console.log("Function:", greetFunction, "| typeof:", typeof greetFunction);


console.log("\n==================================================");
console.log("▶ 4. TYPE CONVERSION & TYPE COERCION");
console.log("==================================================");

// Explicit Conversion
console.log("--- Explicit Conversion ---");
const strNum = "123";
const convertedNum = Number(strNum);
console.log(`Number("${strNum}") =>`, convertedNum, typeof convertedNum);

const boolTrue = Boolean("Hello"); // Non-empty string is truthy
const boolFalse = Boolean("");     // Empty string is falsy
console.log('Boolean("Hello") =>', boolTrue);
console.log('Boolean("")      =>', boolFalse);

const numToStr = String(456);
console.log("String(456) =>", `"${numToStr}"`, typeof numToStr);

// Implicit Coercion (JavaScript tries to be helpful, but be cautious!)
console.log("\n--- Implicit Coercion ---");
console.log('"5" + 2  =>', "5" + 2, " (string concatenation)");
console.log('"5" - 2  =>', "5" - 2, "   (numeric subtraction)");
console.log('"5" * "2"=>', "5" * "2", "  (numeric multiplication)");
console.log('true + 1 =>', true + 1, "   (boolean true coerced to 1)");
console.log('false + 1=>', false + 1, "   (boolean false coerced to 0)");

console.log("\n✔ Variables & Data Types demonstration completed successfully.");
