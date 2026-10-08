/**
 * ============================================================================
 * 05 - LOOPS & ITERATION IN JAVASCRIPT
 * ============================================================================
 * Run in terminal: node js_basics/01_core_fundamentals/05_loops_and_iteration.js
 * 
 * Key Concepts:
 * 1. Standard for loop
 * 2. while loop
 * 3. do...while loop
 * 4. for...of loop (iterating values in arrays/iterables)
 * 5. for...in loop (iterating keys in objects)
 * 6. Loop controls: break & continue
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. STANDARD FOR LOOP");
console.log("==================================================");

let forOutput = [];
for (let i = 1; i <= 5; i++) {
    forOutput.push(i);
}
console.log("Count from 1 to 5:", forOutput.join(" -> "));

// Countdown loop
let countdown = [];
for (let i = 5; i >= 1; i--) {
    countdown.push(i);
}
console.log("Countdown 5 to 1  :", countdown.join(" ... "), "... Blastoff! 🚀");


console.log("\n==================================================");
console.log("▶ 2. WHILE & DO...WHILE LOOPS");
console.log("==================================================");

// while loop: condition checked BEFORE running
let power = 1;
let steps = 0;
while (power < 100) {
    power *= 2;
    steps++;
}
console.log(`Doubling reached: ${power} in ${steps} steps`);

// do...while loop: runs AT LEAST ONCE even if condition is false
let attempts = 0;
do {
    attempts++;
    console.log(`do...while ran execution # ${attempts}`);
} while (attempts < 1);


console.log("\n==================================================");
console.log("▶ 3. BREAK & CONTINUE");
console.log("==================================================");

console.log("Printing odd numbers up to 10 (using continue for evens, break at 9):");
let loopLog = [];
for (let n = 1; n <= 10; n++) {
    if (n % 2 === 0) {
        continue; // Skip even numbers
    }
    if (n === 9) {
        loopLog.push(`${n} (breaking here!)`);
        break; // Stop loop early
    }
    loopLog.push(n);
}
console.log("Result:", loopLog.join(", "));


console.log("\n==================================================");
console.log("▶ 4. FOR...OF (ITERATING VALUES)");
console.log("==================================================");

const programmingLanguages = ["JavaScript", "TypeScript", "Python", "Rust"];
console.log("Iterating array with for...of:");
for (const lang of programmingLanguages) {
    console.log(` - ${lang}`);
}


console.log("\n==================================================");
console.log("▶ 5. FOR...IN (ITERATING OBJECT KEYS)");
console.log("==================================================");

const car = {
    brand: "Audi",
    model: "Q3",
    year: 2024,
    color: "Black"
};

console.log("Iterating object properties with for...in:");
for (const key in car) {
    console.log(`   ${key.padEnd(7)} : ${car[key]}`);
}

console.log("\n✔ Loops & Iteration demonstration completed successfully.");
