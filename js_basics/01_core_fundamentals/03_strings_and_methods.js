/**
 * ============================================================================
 * 03 - STRINGS & STRING METHODS IN JAVASCRIPT
 * ============================================================================
 * Run in terminal: node js_basics/01_core_fundamentals/03_strings_and_methods.js
 * 
 * Key Concepts:
 * 1. String Literals vs Template Literals (`...` with ${expression})
 * 2. Searching & Slicing: charAt, indexOf, lastIndexOf, slice, substring
 * 3. Case & Whitespace manipulation: toUpperCase, toLowerCase, trim, trimStart, trimEnd
 * 4. Transformations: replace, replaceAll, repeat, padStart, padEnd, split
 * 5. Modern string inspections: includes, startsWith, endsWith
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. TEMPLATE LITERALS VS CONCATENATION");
console.log("==================================================");

const firstName = "Abinanthan";
const role = "Software Engineer";
const experienceYears = 3;

// Traditional concatenation
const oldWay = "Hello, my name is " + firstName + " and I am a " + role + ".";
console.log("Concatenation:", oldWay);

// Modern Template Literal (backticks)
const modernWay = `Hello, my name is ${firstName} and I am a ${role}. Next year I'll have ${experienceYears + 1} years of experience.`;
console.log("Template Literal:", modernWay);


console.log("\n==================================================");
console.log("▶ 2. SEARCHING & ACCESSING CHARACTERS");
console.log("==================================================");

const phrase = "JavaScript is awesome and versatile!";
console.log(`Original: "${phrase}"`);
console.log("Length              :", phrase.length);
console.log("charAt(0)           :", phrase.charAt(0));
console.log("Bracket access [4]  :", phrase[4]);
console.log("indexOf('awesome')  :", phrase.indexOf("awesome"));
console.log("indexOf('Python')   :", phrase.indexOf("Python"), "(-1 means not found)");
console.log("lastIndexOf('a')    :", phrase.lastIndexOf("a"));
console.log("includes('versatile'):", phrase.includes("versatile"));
console.log("startsWith('Java')  :", phrase.startsWith("Java"));
console.log("endsWith('tile!')   :", phrase.endsWith("tile!"));


console.log("\n==================================================");
console.log("▶ 3. SLICING & EXTRACTING SUBSTRINGS");
console.log("==================================================");

// .slice(startIndex, endIndex) - endIndex is exclusive. Accepts negative indices!
const language = phrase.slice(0, 10);
console.log("slice(0, 10)  :", `"${language}"`);

// Slicing from the end with negative index:
const endingWord = phrase.slice(-10);
console.log("slice(-10)    :", `"${endingWord}"`);


console.log("\n==================================================");
console.log("▶ 4. STRING TRANSFORMATIONS");
console.log("==================================================");

const messyInput = "   learn_javascript_today   ";
console.log(`Raw messy input : "${messyInput}"`);
console.log("trim()          :", `"${messyInput.trim()}"`);
console.log("toUpperCase()   :", messyInput.trim().toUpperCase());
console.log("replace('_', ' '):", messyInput.trim().replace("_", " "));
console.log("replaceAll('_',' '):", messyInput.trim().replaceAll("_", " "));

// Splitting strings into arrays:
const csvData = "Apple,Banana,Mango,Orange,Pineapple";
const fruitsList = csvData.split(",");
console.log("split(',') into array:", fruitsList);

// Padding strings (useful for formatting clocks, invoices, masked credit cards):
const invoiceId = "42";
console.log("padStart(6, '0'):", invoiceId.padStart(6, "0")); // 000042

const lastFourDigits = "8899";
console.log("Masked card     :", lastFourDigits.padStart(16, "*"));

console.log("\n✔ Strings & Methods demonstration completed successfully.");
