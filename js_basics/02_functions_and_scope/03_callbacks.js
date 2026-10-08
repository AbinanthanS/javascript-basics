/**
 * ============================================================================
 * 03 - CALLBACK FUNCTIONS & HIGHER-ORDER FUNCTIONS
 * ============================================================================
 * Run in terminal: node js_basics/02_functions_and_scope/03_callbacks.js
 * 
 * Key Concepts:
 * 1. What is a Callback? A function passed as an argument to another function
 * 2. Higher-Order Functions: Functions that accept or return other functions
 * 3. Synchronous Callbacks (math calculations, formatters)
 * 4. Asynchronous preview (handling delayed operations without blocking)
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. BASIC CALLBACK PATTERN");
console.log("==================================================");

function executeOperation(a, b, callback) {
    const result = callback(a, b);
    console.log(`Executing operation with (${a}, ${b}) => Result: ${result}`);
    return result;
}

// Defining separate callback functions:
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
const power = (x, y) => Math.pow(x, y);

executeOperation(5, 3, add);
executeOperation(5, 3, multiply);
executeOperation(5, 3, power);

// Passing inline anonymous arrow callbacks:
executeOperation(10, 4, (x, y) => x % y);


console.log("\n==================================================");
console.log("▶ 2. FORMATTING WITH CALLBACKS");
console.log("==================================================");

function processUser(name, formatter) {
    return formatter(name);
}

const toUpper = str => str.toUpperCase();
const toSlug = str => str.toLowerCase().replace(/\s+/g, "-");
const toSecret = str => "*".repeat(str.length);

console.log("Uppercase:", processUser("Abinanthan S", toUpper));
console.log("Slug     :", processUser("Abinanthan S", toSlug));
console.log("Masked   :", processUser("Abinanthan S", toSecret));


console.log("\n==================================================");
console.log("▶ 3. SIMULATING ASYNCHRONOUS CALLBACK");
console.log("==================================================");

function fetchUserData(userId, callback) {
    console.log(`[1] Fetching data for user ID #${userId}...`);
    
    // Simulate non-blocking network latency with setTimeout:
    setTimeout(() => {
        const mockDatabase = {
            101: { id: 101, username: "abinanthan", role: "admin" },
            102: { id: 102, username: "patrick", role: "editor" }
        };
        const user = mockDatabase[userId] || null;
        console.log(`[2] Data retrieved! Invoking callback now.`);
        callback(user);
    }, 500);
}

fetchUserData(101, (userData) => {
    console.log("[3] Callback received payload:", userData);
    console.log("\n✔ Callback Functions demonstration completed successfully.");
});
