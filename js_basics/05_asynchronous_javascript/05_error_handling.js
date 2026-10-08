/**
 * ============================================================================
 * 05 - ERROR HANDLING (try, catch, finally & throw)
 * ============================================================================
 * Run in terminal: node js_basics/05_asynchronous_javascript/05_error_handling.js
 * 
 * Key Concepts:
 * 1. The Error object (message, name, stack)
 * 2. try { ... }: Code that might throw an unexpected or runtime error
 * 3. catch (err) { ... }: Intercepts and recovers from the error
 * 4. finally { ... }: Guarantees execution (used for cleanup, closing resources)
 * 5. Throwing custom errors: throw new Error("...")
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. SAFE DIVISION WITH CUSTOM VALIDATION");
console.log("==================================================");

function safeDivide(dividend, divisor) {
    if (typeof dividend !== "number" || typeof divisor !== "number" || isNaN(dividend) || isNaN(divisor)) {
        throw new TypeError("Both arguments must be valid finite numbers!");
    }
    if (divisor === 0) {
        throw new RangeError("Division by zero is undefined!");
    }
    return dividend / divisor;
}

const testCases = [
    { a: 20, b: 4 },
    { a: 10, b: 0 },         // Will throw RangeError
    { a: "abc", b: 2 }       // Will throw TypeError
];

testCases.forEach(({ a, b }, index) => {
    console.log(`\n--- Test Case #${index + 1}: ${a} / ${b} ---`);
    try {
        const result = safeDivide(a, b);
        console.log(`✔ Success: ${a} / ${b} = ${result}`);
    } catch (error) {
        console.error(`❌ Caught Error [${error.name}]: ${error.message}`);
    } finally {
        console.log("🔒 Finally block: Cleanup & transaction finalized.");
    }
});


console.log("\n==================================================");
console.log("▶ 2. PARSING JSON DEFENSIVELY");
console.log("==================================================");

function parseJsonSafely(jsonString) {
    try {
        const parsed = JSON.parse(jsonString);
        return { success: true, data: parsed };
    } catch (err) {
        return { success: false, error: err.message };
    }
}

const validJson = '{"framework": "Vanilla JS", "version": 2026}';
const corruptedJson = '{ framework: "Broken, missing quotes" }';

console.log("Valid JSON parse    :", parseJsonSafely(validJson));
console.log("Corrupted JSON parse:", parseJsonSafely(corruptedJson));

console.log("\n✔ Error Handling demonstration completed successfully.");
