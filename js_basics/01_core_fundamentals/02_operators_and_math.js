/**
 * ============================================================================
 * 02 - OPERATORS & THE MATH OBJECT IN JAVASCRIPT
 * ============================================================================
 * Run in terminal: node js_basics/01_core_fundamentals/02_operators_and_math.js
 * 
 * Key Concepts:
 * 1. Arithmetic Operators (+, -, *, /, %, **)
 * 2. Operator Precedence (Parentheses, Exponents, Mult/Div/Mod, Add/Sub)
 * 3. Assignment & Comparison Operators (== vs ===, != vs !==)
 * 4. The JavaScript Math Object (round, floor, ceil, trunc, pow, sqrt, abs, min, max, trig)
 * 5. Random Number Generation (min to max formula)
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. ARITHMETIC OPERATORS & PRECEDENCE");
console.log("==================================================");

let a = 10;
let b = 3;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${(a / b).toFixed(2)}`);
console.log(`${a} % ${b} (Modulo / Remainder) = ${a % b}`);
console.log(`${a} ** ${b} (Exponentiation: 10^3) = ${a ** b}`);

// Precedence order:
// 1. ( ) Parentheses
// 2. ** Exponents
// 3. * / % Multiplication, Division, Modulo (left to right)
// 4. + - Addition, Subtraction (left to right)
let complexCalc = 10 + 5 * 2 ** 3 / (4 - 2);
console.log(`Calculation: 10 + 5 * 2 ** 3 / (4 - 2) = ${complexCalc}`);
// Step by step:
// (4 - 2) = 2
// 2 ** 3 = 8
// 5 * 8 = 40
// 40 / 2 = 20
// 10 + 20 = 30


console.log("\n==================================================");
console.log("▶ 2. EQUALITY OPERATORS: == vs ===");
console.log("==================================================");

console.log('5 == "5"  :', 5 == "5", "  (Loose equality: converts types)");
console.log('5 === "5" :', 5 === "5", " (Strict equality: checks value AND type)");
console.log('null == undefined  :', null == undefined, " (Treated equal by loose equality)");
console.log('null === undefined :', null === undefined, "(Different types)");
console.log('0 == false :', 0 == false);
console.log('0 === false:', 0 === false);


console.log("\n==================================================");
console.log("▶ 3. THE BUILT-IN Math OBJECT");
console.log("==================================================");

let val = 2.9;
let negVal = -4.7;

console.log(`Original value: ${val}`);
console.log("Math.round(2.9) :", Math.round(val), " (Rounds to nearest integer)");
console.log("Math.floor(2.9) :", Math.floor(val), " (Always rounds down)");
console.log("Math.ceil(2.1)  :", Math.ceil(2.1), " (Always rounds up)");
console.log("Math.trunc(2.9) :", Math.trunc(val), " (Removes decimal fraction)");
console.log("Math.pow(2, 4)  :", Math.pow(2, 4), " (2 raised to power 4)");
console.log("Math.sqrt(64)   :", Math.sqrt(64), " (Square root of 64)");
console.log("Math.abs(-4.7)  :", Math.abs(negVal), " (Absolute / positive value)");
console.log("Math.sign(-50)  :", Math.sign(-50), " (Sign: -1 for negative, 1 for positive, 0 for zero)");
console.log("Math.max(5, 12, 99, 3) :", Math.max(5, 12, 99, 3));
console.log("Math.min(5, 12, 99, 3) :", Math.min(5, 12, 99, 3));
console.log("Math.PI         :", Math.PI);
console.log("Math.E          :", Math.E);


console.log("\n==================================================");
console.log("▶ 4. GENERATING RANDOM NUMBERS");
console.log("==================================================");

// Formula for random integer between min and max (inclusive):
// Math.floor(Math.random() * (max - min + 1)) + min;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random decimal [0, 1):", Math.random());
console.log("Random dice roll (1 - 6):", getRandomInt(1, 6));
console.log("Random percentage (1 - 100):", getRandomInt(1, 100));

// Generate 5 random numbers between 50 and 80:
const randomSamples = Array.from({ length: 5 }, () => getRandomInt(50, 80));
console.log("5 random numbers between 50 and 80:", randomSamples);

console.log("\n✔ Operators & Math demonstration completed successfully.");
