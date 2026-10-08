/**
 * ============================================================================
 * 04 - CONDITIONALS & LOGICAL FLOW IN JAVASCRIPT
 * ============================================================================
 * Run in terminal: node js_basics/01_core_fundamentals/04_conditionals_and_logic.js
 * 
 * Key Concepts:
 * 1. Truthy & Falsy Values in JavaScript
 * 2. if / else if / else Decision Trees
 * 3. The Ternary Operator (? :)
 * 4. Logical Operators (&&, ||, !) & Short-circuiting
 * 5. Nullish Coalescing (??) vs Logical OR (||)
 * 6. The switch Statement & Fallthrough rules
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. TRUTHY VS FALSY VALUES");
console.log("==================================================");

// Falsy values in JavaScript: false, 0, -0, 0n, "", null, undefined, NaN
// Everything else is TRUTHY (including empty arrays [], empty objects {}, and "0")

const testValues = [false, 0, "", null, undefined, NaN, [], {}, "0", "false"];

testValues.forEach(val => {
    const isTruthy = Boolean(val);
    console.log(`Value: ${String(val).padEnd(10)} | Boolean: ${isTruthy}`);
});


console.log("\n==================================================");
console.log("▶ 2. IF / ELSE IF / ELSE");
console.log("==================================================");

let studentScore = 85;
let grade;

if (studentScore >= 90) {
    grade = "A+ (Outstanding)";
} else if (studentScore >= 80) {
    grade = "A (Excellent)";
} else if (studentScore >= 70) {
    grade = "B (Good)";
} else if (studentScore >= 50) {
    grade = "C (Pass)";
} else {
    grade = "F (Fail)";
}

console.log(`Score: ${studentScore} => Grade: ${grade}`);


console.log("\n==================================================");
console.log("▶ 3. TERNARY OPERATOR (? :)");
console.log("==================================================");

const age = 19;
const canVoteMessage = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(`Age ${age}: ${canVoteMessage}`);

// Chained ternary (use sparingly for readability):
const speed = 120;
const speedCategory = speed > 100 ? "Dangerous" : speed > 60 ? "Moderate" : "Slow";
console.log(`Speed ${speed} km/h: ${speedCategory}`);


console.log("\n==================================================");
console.log("▶ 4. LOGICAL OPERATORS & SHORT-CIRCUITING");
console.log("==================================================");

// && returns the first falsy operand, or the last operand if all are truthy
console.log('"Hello" && 42 && "Success"  =>', "Hello" && 42 && "Success");
console.log('"Hello" && 0 && "Success"   =>', "Hello" && 0 && "Success");

// || returns the first truthy operand, or the last operand if all are falsy
console.log('"" || null || "Default Name" =>', "" || null || "Default Name");

// Modern Nullish Coalescing (??) checks specifically for null or undefined:
// Unlike ||, ?? treats 0 and "" as valid values!
const userCount = 0;
const fallbackOr = userCount || 10;      // ❌ Bug: 0 is replaced by 10 because 0 is falsy
const fallbackNullish = userCount ?? 10; // ✅ Correct: keeps 0 because 0 is not null/undefined

console.log(`When userCount = 0:`);
console.log(`userCount || 10 => ${fallbackOr} (False positive fallback)`);
console.log(`userCount ?? 10 => ${fallbackNullish} (Correct: preserves 0)`);


console.log("\n==================================================");
console.log("▶ 5. SWITCH STATEMENT");
console.log("==================================================");

const dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
    case 7: // Grouped cases!
        dayName = "Weekend (Saturday / Sunday)";
        break;
    default:
        dayName = "Invalid day index";
}

console.log(`Day ${dayOfWeek} is: ${dayName}`);

console.log("\n✔ Conditionals & Logic demonstration completed successfully.");
