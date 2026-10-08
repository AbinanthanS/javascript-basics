/**
 * ============================================================================
 * 04 - ASYNC / AWAIT SYNTAX
 * ============================================================================
 * Run in terminal: node js_basics/05_asynchronous_javascript/04_async_await.js
 * 
 * Key Concepts:
 * 1. The 'async' keyword: Wraps function return values automatically in a Promise
 * 2. The 'await' keyword: Pauses execution until the awaited Promise settles
 * 3. Writing asynchronous code that reads like synchronous step-by-step code
 * 4. Error handling with standard try...catch blocks
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. ASYNC / AWAIT STEP-BY-STEP WORKFLOW");
console.log("==================================================");

function delay(ms, message) {
    return new Promise(resolve => setTimeout(() => resolve(message), ms));
}

async function prepareBreakfast() {
    try {
        console.log("🍳 [Start] Beginning breakfast preparation...");

        const coffee = await delay(150, "☕ Coffee is brewed!");
        console.log("Step 1:", coffee);

        const toast = await delay(200, "🍞 Toast is ready and buttered!");
        console.log("Step 2:", toast);

        const eggs = await delay(180, "🍳 Eggs are scrambled!");
        console.log("Step 3:", eggs);

        return "🍽️ Breakfast is completely served!";
    } catch (error) {
        console.error("Breakfast preparation failed:", error);
        throw error;
    }
}

// Invoking an async function:
prepareBreakfast().then(summary => {
    console.log(summary);
    return fetchUserDataSimulation();
});


console.log("\n==================================================");
console.log("▶ 2. PARALLEL VS SEQUENTIAL AWAIT");
console.log("==================================================");

async function fetchUserDataSimulation() {
    console.log("Fetching User and Preferences in parallel with await Promise.all()...");

    const fetchUser = delay(100, { id: 1, name: "Abinanthan" });
    const fetchSettings = delay(100, { theme: "dark", language: "en" });

    // Both network requests run concurrently!
    const [user, settings] = await Promise.all([fetchUser, fetchSettings]);

    console.log("User retrieved    :", user);
    console.log("Settings retrieved:", settings);
    console.log("\n✔ Async/Await demonstration completed successfully.");
}
