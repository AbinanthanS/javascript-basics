/**
 * ============================================================================
 * 01 - JSON SERIALIZATION & PARSING IN JAVASCRIPT
 * ============================================================================
 * Run in terminal: node js_basics/10_json_and_fetch_api/01_json_methods.js
 * 
 * Key Concepts:
 * 1. What is JSON? JavaScript Object Notation (Text-based data exchange format)
 * 2. JSON.stringify(value, replacer, space): Object -> JSON string
 * 3. JSON.parse(text, reviver): JSON string -> Object
 * 4. Deep cloning objects via JSON vs modern structuredClone()
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. JSON.stringify() - SERIALIZING TO STRING");
console.log("==================================================");

const developer = {
    name: "Abinanthan",
    age: 21,
    isEmployed: true,
    skills: ["JavaScript", "HTML", "CSS"],
    address: {
        city: "Chennai",
        country: "India"
    }
};

// Standard compact JSON string:
const compactJson = JSON.stringify(developer);
console.log("Compact JSON string:");
console.log(compactJson);

// Pretty-printed JSON string with 2-space indentation:
const prettyJson = JSON.stringify(developer, null, 2);
console.log("\nPretty-printed JSON (null, 2):");
console.log(prettyJson);

// Using a replacer array to filter out specific keys:
const filteredJson = JSON.stringify(developer, ["name", "skills"], 2);
console.log("\nFiltered JSON (only 'name' and 'skills'):");
console.log(filteredJson);


console.log("\n==================================================");
console.log("▶ 2. JSON.parse() - PARSING FROM STRING");
console.log("==================================================");

const rawJsonString = `[
    { "id": 1, "username": "spongebob", "role": "cook" },
    { "id": 2, "username": "squidward", "role": "cashier" },
    { "id": 3, "username": "mr_krabs", "role": "owner" }
]`;

const parsedStaff = JSON.parse(rawJsonString);
console.log("Parsed Array Length:", parsedStaff.length);
console.log("First User Username:", parsedStaff[0].username);
console.log("Entire Parsed Object:", parsedStaff);


console.log("\n==================================================");
console.log("▶ 3. DEEP CLONING COMPARISON");
console.log("==================================================");

const original = {
    title: "Project Alpha",
    tags: ["web", "database"],
    nested: { version: 1 }
};

// Modern recommended deep clone:
const modernClone = structuredClone(original);
modernClone.nested.version = 2;

console.log("Original nested version:", original.nested.version, "(Remained 1)");
console.log("Cloned nested version  :", modernClone.nested.version, "(Updated to 2)");

console.log("\n✔ JSON Methods demonstration completed successfully.");
