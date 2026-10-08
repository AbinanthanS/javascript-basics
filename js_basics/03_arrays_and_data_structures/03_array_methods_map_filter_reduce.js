/**
 * ============================================================================
 * 03 - HIGHER-ORDER ARRAY METHODS: forEach, map, filter, reduce
 * ============================================================================
 * Run in terminal: node js_basics/03_arrays_and_data_structures/03_array_methods_map_filter_reduce.js
 * 
 * Key Concepts:
 * 1. forEach(): Iterates through an array for side-effects (does NOT return a new array)
 * 2. map(): Transforms each element and returns a BRAND NEW array of equal length
 * 3. filter(): Tests elements with a predicate function and returns matching items
 * 4. reduce(): Accumulates all array elements down to a single value (sum, max, object tally)
 * 5. Method Chaining: Combining filter, map, and reduce in functional pipelines
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. forEach() - ITERATION WITH SIDE EFFECTS");
console.log("==================================================");

const numbers = [10, 20, 30, 40];
console.log("Iterating with forEach:");
numbers.forEach((num, index) => {
    console.log(`  Index ${index}: Value = ${num}, Doubled = ${num * 2}`);
});


console.log("\n==================================================");
console.log("▶ 2. map() - TRANSFORMING ELEMENTS");
console.log("==================================================");

// Example 1: Squaring numbers
const baseNumbers = [1, 2, 3, 4, 5];
const squared = baseNumbers.map(n => Math.pow(n, 2));
console.log("Original numbers:", baseNumbers);
console.log("Squared with map:", squared);

// Example 2: Uppercasing names
const students = ["spongebob", "patrick", "sandy", "squidward"];
const formattedStudents = students.map(name => name.toUpperCase());
console.log("Uppercased students:", formattedStudents);

// Example 3: Date formatting ("YYYY-MM-DD" -> "MM/DD/YYYY")
const isoDates = ["2024-09-20", "2025-01-15", "2026-10-08"];
const usDates = isoDates.map(dateStr => {
    const [year, month, day] = dateStr.split("-");
    return `${month}/${day}/${year}`;
});
console.log("Formatted Dates:", usDates);


console.log("\n==================================================");
console.log("▶ 3. filter() - EXTRACTING A SUBSET");
console.log("==================================================");

const ages = [12, 18, 25, 14, 32, 17, 45, 9];
const adults = ages.filter(age => age >= 18);
console.log("All ages:", ages);
console.log("Adults (age >= 18):", adults);

const products = [
    { name: "Laptop", inStock: true, price: 999 },
    { name: "Phone", inStock: false, price: 699 },
    { name: "Tablet", inStock: true, price: 499 },
    { name: "Monitor", inStock: false, price: 299 }
];
const availableProducts = products.filter(p => p.inStock);
console.log("In-Stock Products:", availableProducts);


console.log("\n==================================================");
console.log("▶ 4. reduce() - REDUCING TO A SINGLE VALUE");
console.log("==================================================");

// Example 1: Summing an array of prices
const prices = [19.99, 45.50, 12.00, 99.95];
const totalCost = prices.reduce((accumulator, currentPrice) => {
    return accumulator + currentPrice;
}, 0); // 0 is initial value
console.log("Prices    :", prices);
console.log(`Total Cost: $${totalCost.toFixed(2)}`);

// Example 2: Finding maximum score
const examScores = [68, 92, 45, 88, 99, 74];
const highestScore = examScores.reduce((max, current) => Math.max(max, current), examScores[0]);
console.log("Scores       :", examScores);
console.log("Highest Score:", highestScore);


console.log("\n==================================================");
console.log("▶ 5. FUNCTIONAL METHOD CHAINING");
console.log("==================================================");

// Pipeline: Filter products in stock -> Apply 10% discount -> Calculate cart total
const cart = [
    { title: "Keyboard", price: 80, inStock: true },
    { title: "Mouse", price: 40, inStock: false },
    { title: "Headphones", price: 120, inStock: true },
    { title: "Webcam", price: 60, inStock: true }
];

const totalAfterDiscount = cart
    .filter(item => item.inStock)                         // 1. Keep in stock
    .map(item => item.price * 0.90)                       // 2. 10% discount
    .reduce((sum, discountedPrice) => sum + discountedPrice, 0); // 3. Total sum

console.log(`Total for in-stock items with 10% discount: $${totalAfterDiscount.toFixed(2)}`);

console.log("\n✔ Higher-Order Array Methods demonstration completed successfully.");
