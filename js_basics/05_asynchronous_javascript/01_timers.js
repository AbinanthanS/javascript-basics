/**
 * ============================================================================
 * 01 - TIMERS & THE JAVASCRIPT EVENT LOOP
 * ============================================================================
 * Run in terminal: node js_basics/05_asynchronous_javascript/01_timers.js
 * 
 * Key Concepts:
 * 1. Synchronous vs Asynchronous execution
 * 2. setTimeout(callback, delayMs) & clearTimeout(timeoutId)
 * 3. setInterval(callback, intervalMs) & clearInterval(intervalId)
 * 4. The JavaScript Event Loop (Call Stack -> Web APIs/Node APIs -> Task Queue)
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. SYNCHRONOUS VS ASYNCHRONOUS DEMONSTRATION");
console.log("==================================================");

console.log("[Sync] Step 1: Starting script execution...");

// Even with delay 0, setTimeout is offloaded to the event loop!
setTimeout(() => {
    console.log("[Async Timer 0ms] Step 3: Executed after call stack cleared!");
}, 0);

console.log("[Sync] Step 2: Immediate next line (executes before 0ms timer!)");


console.log("\n==================================================");
console.log("▶ 2. SETTIMEOUT & CLEARTIMEOUT");
console.log("==================================================");

// Timer that will run after 400ms:
const timeoutId1 = setTimeout(() => {
    console.log("[Timer #1] Fired successfully after 400ms!");
}, 400);

// Timer that gets cancelled before it fires:
const timeoutId2 = setTimeout(() => {
    console.log("❌ This will never run because it will be cancelled!");
}, 600);

// Cancelling timer #2 immediately:
clearTimeout(timeoutId2);
console.log("[Timer #2] Created and immediately cancelled with clearTimeout.");


console.log("\n==================================================");
console.log("▶ 3. SETINTERVAL & CLEARINTERVAL (Countdown Demo)");
console.log("==================================================");

let tickCount = 3;
console.log(`[Interval] Starting 3-second countdown...`);

const intervalId = setInterval(() => {
    if (tickCount > 0) {
        console.log(`⏱️ Tick: ${tickCount}...`);
        tickCount--;
    } else {
        console.log(`🚀 Blastoff! Clearing interval.`);
        clearInterval(intervalId); // Stop repeating!
        console.log("\n✔ Timers demonstration completed successfully.");
    }
}, 300);
