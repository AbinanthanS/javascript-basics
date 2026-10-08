/**
 * ============================================================================
 * 02 - SPREAD OPERATOR VS REST PARAMETERS (...)
 * ============================================================================
 * Run in terminal: node js_basics/03_arrays_and_data_structures/02_spread_and_rest.js
 * 
 * Key Concepts:
 * 1. The Spread Operator (...): Unpacks elements out of an iterable (array/string/object)
 * 2. Spreading with Math methods (Math.max, Math.min)
 * 3. Array cloning & merging without mutating originals
 * 4. Spreading strings into character arrays
 * 5. Rest Operator (...): Bundles separate values into an array
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. SPREADING ARRAYS & ARGUMENTS");
console.log("==================================================");

const numbers = [14, 5, 89, 42, 7];

// Math.max expects separate arguments, not an array!
console.log("Without spread Math.max(numbers)   :", Math.max(numbers), "(returns NaN)");
console.log("With spread Math.max(...numbers)    :", Math.max(...numbers));
console.log("With spread Math.min(...numbers)    :", Math.min(...numbers));


console.log("\n==================================================");
console.log("▶ 2. ARRAY CLONING & MERGING");
console.log("==================================================");

const frontEnd = ["HTML", "CSS", "JavaScript"];
const backEnd = ["Node.js", "Express", "PostgreSQL"];

// Merging arrays cleanly:
const fullStack = [...frontEnd, ...backEnd, "Docker", "Git"];
console.log("Merged Fullstack Array:", fullStack);

// Cloning array (shallow copy):
const copyFrontEnd = [...frontEnd];
copyFrontEnd.push("TypeScript");
console.log("Original frontEnd untouched :", frontEnd);
console.log("Cloned array with TypeScript:", copyFrontEnd);


console.log("\n==================================================");
console.log("▶ 3. SPREADING STRINGS");
console.log("==================================================");

const authorName = "Abinanthan";
const characterArray = [...authorName];
console.log(`Spreading "${authorName}" into chars:`, characterArray);

const delimitedName = [...authorName].join("/");
console.log("Joined with slashes:", delimitedName);


console.log("\n==================================================");
console.log("▶ 4. SPREAD IN OBJECTS");
console.log("==================================================");

const baseUser = { id: 101, username: "abinanthan", role: "user" };
const updatedUser = {
    ...baseUser,
    role: "admin", // overrides previous role
    lastLogin: "2026-10-08"
};

console.log("Base user   :", baseUser);
console.log("Updated user:", updatedUser);


console.log("\n==================================================");
console.log("▶ 5. SPREAD VS REST: THE KEY DIFFERENCE");
console.log("==================================================");
console.log("💡 SPREAD expands an array into individual elements:  [...arr]");
console.log("💡 REST collects multiple individual elements into an array: (...args)");

function collectAndPrint(title, ...items) {
    console.log(`[REST] ${title}: Collected ${items.length} items ->`, items);
}

collectAndPrint("Languages", "JS", "TS", "Python", "Rust");

console.log("\n✔ Spread & Rest demonstration completed successfully.");
