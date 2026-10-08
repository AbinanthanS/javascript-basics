/**
 * ============================================================================
 * 03 - PROMISES & PROMISE CHAINING
 * ============================================================================
 * Run in terminal: node js_basics/05_asynchronous_javascript/03_promises.js
 * 
 * Key Concepts:
 * 1. What is a Promise? An object representing the eventual completion/failure
 *    of an asynchronous operation.
 * 2. The 3 States of a Promise:
 *    - Pending: Initial state, neither fulfilled nor rejected
 *    - Fulfilled (Resolved): Operation completed successfully
 *    - Rejected: Operation failed with an error
 * 3. Chaining with .then()
 * 4. Centralized Error Handling with .catch()
 * 5. Cleanup with .finally()
 * 6. Parallel Execution with Promise.all()
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. CREATING PROMISES");
console.log("==================================================");

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("✔ [Promise 1] Walked the dog");
            } else {
                reject("❌ Failed to walk the dog");
            }
        }, 150);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("✔ [Promise 2] Cleaned the kitchen");
            } else {
                reject("❌ Failed to clean kitchen");
            }
        }, 150);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("✔ [Promise 3] Took out the trash");
            } else {
                reject("❌ Failed to take out trash");
            }
        }, 150);
    });
}


console.log("--- Executing Sequential Promise Chain ---");

walkDog()
    .then(result1 => {
        console.log(result1);
        return cleanKitchen(); // Returning the next promise!
    })
    .then(result2 => {
        console.log(result2);
        return takeOutTrash();
    })
    .then(result3 => {
        console.log(result3);
        console.log("🎉 All chores finished sequentially via Promise chain!\n");
        return runParallelDemo();
    })
    .catch(error => {
        console.error("Centralized Promise Error Caught:", error);
    })
    .finally(() => {
        console.log("🏁 All Promise operations completed.");
    });


function runParallelDemo() {
    console.log("==================================================");
    console.log("▶ 2. PARALLEL EXECUTION WITH Promise.all()");
    console.log("==================================================");

    const p1 = new Promise(resolve => setTimeout(() => resolve("Data Source A"), 100));
    const p2 = new Promise(resolve => setTimeout(() => resolve("Data Source B"), 150));
    const p3 = new Promise(resolve => setTimeout(() => resolve("Data Source C"), 80));

    return Promise.all([p1, p2, p3]).then(results => {
        console.log("Promise.all completed in parallel! Combined results:", results);
    });
}
