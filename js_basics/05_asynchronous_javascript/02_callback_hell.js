/**
 * ============================================================================
 * 02 - CALLBACK HELL (PYRAMID OF DOOM)
 * ============================================================================
 * Run in terminal: node js_basics/05_asynchronous_javascript/02_callback_hell.js
 * 
 * Key Concepts:
 * 1. What is Callback Hell? Deeply nested asynchronous callbacks
 * 2. Why is it problematic?
 *    - Inverted control flow and pyramid of doom
 *    - Error handling becomes duplicated and difficult to track
 *    - Hard to read, maintain, and refactor
 * 3. Modern solution: Replaced by Promises and async/await
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ THE PROBLEM: DEEPLY NESTED ASYNC OPERATIONS");
console.log("==================================================");

function task1(callback) {
    setTimeout(() => {
        console.log("✔ [1/4] Task 1: Walk the dog completed");
        callback(null, "Dog walked");
    }, 200);
}

function task2(callback) {
    setTimeout(() => {
        console.log("✔ [2/4] Task 2: Clean the kitchen completed");
        callback(null, "Kitchen cleaned");
    }, 200);
}

function task3(callback) {
    setTimeout(() => {
        console.log("✔ [3/4] Task 3: Take out the trash completed");
        callback(null, "Trash taken out");
    }, 200);
}

function task4(callback) {
    setTimeout(() => {
        console.log("✔ [4/4] Task 4: Prepare dinner completed");
        callback(null, "Dinner ready");
    }, 200);
}

// Notice the growing triangular indentation (Pyramid of Doom):
task1((err1, res1) => {
    if (err1) return console.error(err1);
    
    task2((err2, res2) => {
        if (err2) return console.error(err2);
        
        task3((err3, res3) => {
            if (err3) return console.error(err3);
            
            task4((err4, res4) => {
                if (err4) return console.error(err4);
                
                console.log("\n🎉 All 4 tasks completed via nested callbacks!");
                console.log("👉 Move to '03_promises.js' to see how Promises solve this cleanly!");
            });
        });
    });
});
