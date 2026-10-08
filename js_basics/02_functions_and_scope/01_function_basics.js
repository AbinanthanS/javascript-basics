/**
 * ============================================================================
 * 01 - FUNCTION DECLARATIONS, EXPRESSIONS & PARAMETERS
 * ============================================================================
 * Run in terminal: node js_basics/02_functions_and_scope/01_function_basics.js
 * 
 * Key Concepts:
 * 1. Function Declarations (hoisted)
 * 2. Function Expressions (anonymous & named, not hoisted)
 * 3. Default Parameters
 * 4. Rest Parameters (...args) vs Spread
 * 5. Return values & side effects
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. FUNCTION DECLARATIONS VS EXPRESSIONS");
console.log("==================================================");

// 1. Function Declaration (can be called before its definition due to hoisting)
console.log("Calling hoisted function declaration:", greet("Alice"));

function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// 2. Function Expression (assigned to a variable, not hoisted)
const calculateArea = function(width, height) {
    return width * height;
};
console.log("Rectangle Area (5 x 8) =", calculateArea(5, 8));


console.log("\n==================================================");
console.log("▶ 2. DEFAULT PARAMETERS");
console.log("==================================================");

function createUser(username = "Guest", role = "Viewer", isActive = true) {
    return {
        username,
        role,
        isActive,
        createdAt: new Date().toISOString().split("T")[0]
    };
}

console.log("Default user:", createUser());
console.log("Custom user :", createUser("Abinanthan", "Admin", true));


console.log("\n==================================================");
console.log("▶ 3. REST PARAMETERS (...args)");
console.log("==================================================");

// Rest parameter bundles any number of arguments into a real JavaScript Array
function sumAllNumbers(...numbers) {
    console.log(`Received ${numbers.length} numbers:`, numbers);
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

console.log("Sum (1, 2, 3)             =", sumAllNumbers(1, 2, 3));
console.log("Sum (10, 20, 30, 40, 50)  =", sumAllNumbers(10, 20, 30, 40, 50));

// Combining standard parameters with rest parameters:
function formatSentence(prefix, ...words) {
    return `${prefix}: ${words.join(" ")}`;
}

console.log(formatSentence("Title", "Mr.", "Spongebob", "Squarepants", "is", "ready!"));

console.log("\n✔ Function Basics demonstration completed successfully.");
