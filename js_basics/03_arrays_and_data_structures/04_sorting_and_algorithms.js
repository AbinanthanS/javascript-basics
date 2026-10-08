/**
 * ============================================================================
 * 04 - ARRAY SORTING & THE FISHER-YATES SHUFFLE ALGORITHM
 * ============================================================================
 * Run in terminal: node js_basics/03_arrays_and_data_structures/04_sorting_and_algorithms.js
 * 
 * Key Concepts:
 * 1. Array.prototype.sort() default behavior: Converts elements to strings!
 *    (Why [10, 5, 25, 100].sort() fails without comparator function!)
 * 2. Numeric sorting with comparator: (a, b) => a - b (ascending) & b - a (descending)
 * 3. Sorting Arrays of Objects using properties & String.prototype.localeCompare()
 * 4. Fisher-Yates Shuffle Algorithm (unbiased O(n) random shuffling)
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. STRING SORTING VS NUMERIC SORTING PITFALL");
console.log("==================================================");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Mutates in place
console.log("Sorted fruits (Alphabetical):", fruits);

const numbers = [10, 5, 40, 25, 100, 1];
console.log("Original numbers:", numbers);

// ❌ Warning: Default sort() converts numbers to strings ("100" comes before "25"!)
const badSort = [...numbers].sort();
console.log("Default sort() [ALPHABETICAL BUG]:", badSort);

// ✅ Correct Numeric Sort:
const ascending = [...numbers].sort((a, b) => a - b);
const descending = [...numbers].sort((a, b) => b - a);
console.log("Numeric Ascending  (a - b):", ascending);
console.log("Numeric Descending (b - a):", descending);


console.log("\n==================================================");
console.log("▶ 2. SORTING ARRAYS OF OBJECTS");
console.log("==================================================");

const people = [
    { name: "Spongebob", age: 30, department: "Kitchen" },
    { name: "Patrick", age: 28, department: "Customer" },
    { name: "Squidward", age: 35, department: "Cashier" },
    { name: "Sandy", age: 27, department: "Science" }
];

// Sort by Age (ascending numeric)
const sortedByAge = [...people].sort((a, b) => a.age - b.age);
console.log("Sorted by Age (Ascending):", sortedByAge.map(p => `${p.name} (${p.age})`));

// Sort by Name (alphabetical using localeCompare)
const sortedByName = [...people].sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted by Name (A-Z):", sortedByName.map(p => p.name));


console.log("\n==================================================");
console.log("▶ 3. FISHER-YATES SHUFFLE ALGORITHM");
console.log("==================================================");

/**
 * Modern Fisher-Yates Shuffle
 * Guaranteed uniform, unbiased O(n) distribution.
 */
function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements copy[i] and copy[j] using destructuring:
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

const deckOfCards = ["A♠", "2♠", "3♠", "4♠", "10♥", "J♥", "Q♥", "K♥", "A♦"];
console.log("Original Deck:", deckOfCards.join(" "));

const shuffledDeck1 = shuffle(deckOfCards);
console.log("Shuffled #1  :", shuffledDeck1.join(" "));

const shuffledDeck2 = shuffle(deckOfCards);
console.log("Shuffled #2  :", shuffledDeck2.join(" "));

console.log("\n✔ Sorting & Shuffle Algorithms demonstration completed successfully.");
