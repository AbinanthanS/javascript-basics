/**
 * ============================================================================
 * 01 - ARRAY BASICS & MUTATION METHODS
 * ============================================================================
 * Run in terminal: node js_basics/03_arrays_and_data_structures/01_array_basics.js
 * 
 * Key Concepts:
 * 1. Array Creation & Indexing
 * 2. Adding & Removing Elements:
 *    - push() (add to end) & pop() (remove from end)
 *    - unshift() (add to start) & shift() (remove from start)
 * 3. Search & Inspection: indexOf(), includes()
 * 4. Slicing vs Splicing (splice mutates, slice creates a copy)
 * 5. Combining & Joining: concat(), join()
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. ARRAY CREATION & BASIC OPERATIONS");
console.log("==================================================");

let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log("Initial array :", fruits);
console.log("Array length  :", fruits.length);
console.log("First item [0]:", fruits[0]);
console.log("Last item [-1]:", fruits[fruits.length - 1]);


console.log("\n==================================================");
console.log("▶ 2. ADDING & REMOVING (END VS START)");
console.log("==================================================");

// push() -> adds to the end
fruits.push("Pineapple");
console.log("After push('Pineapple')   :", fruits);

// pop() -> removes the last element and returns it
const removedLast = fruits.pop();
console.log(`Popped '${removedLast}' -> Array:`, fruits);

// unshift() -> adds to the beginning (shifts existing indices)
fruits.unshift("Strawberry");
console.log("After unshift('Strawberry'):", fruits);

// shift() -> removes the first element and returns it
const removedFirst = fruits.shift();
console.log(`Shifted '${removedFirst}' -> Array:`, fruits);


console.log("\n==================================================");
console.log("▶ 3. SEARCHING & INSPECTION");
console.log("==================================================");

console.log("fruits.indexOf('Banana')  :", fruits.indexOf("Banana"));
console.log("fruits.indexOf('Grapes')  :", fruits.indexOf("Grapes"), "(-1 means not in array)");
console.log("fruits.includes('Orange') :", fruits.includes("Orange"));
console.log("fruits.includes('Kiwi')   :", fruits.includes("Kiwi"));


console.log("\n==================================================");
console.log("▶ 4. SLICE (NON-MUTATING) VS SPLICE (MUTATING)");
console.log("==================================================");

// .slice(start, end) -> returns a shallow copy of a portion of the array
const middleSlice = fruits.slice(1, 3);
console.log("slice(1, 3) (Non-mutating):", middleSlice);
console.log("Original array unchanged  :", fruits);

// .splice(startIndex, deleteCount, item1, item2...) -> mutates in-place!
// Let's replace 'Orange' (index 2) with 'Kiwi' and 'Peach':
const removedBySplice = fruits.splice(2, 1, "Kiwi", "Peach");
console.log("splice(2, 1, 'Kiwi', 'Peach') removed:", removedBySplice);
console.log("Array after splice mutation          :", fruits);


console.log("\n==================================================");
console.log("▶ 5. JOIN & CONCAT");
console.log("==================================================");

const csvString = fruits.join(" | ");
console.log("join(' | ') :", csvString);

const extraFruits = ["Watermelon", "Blueberry"];
const allFruits = fruits.concat(extraFruits);
console.log("concat()    :", allFruits);

console.log("\n✔ Array Basics demonstration completed successfully.");
