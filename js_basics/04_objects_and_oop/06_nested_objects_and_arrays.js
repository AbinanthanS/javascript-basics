/**
 * ============================================================================
 * 06 - NESTED OBJECTS, ARRAYS OF OBJECTS & OPTIONAL CHAINING
 * ============================================================================
 * Run in terminal: node js_basics/04_objects_and_oop/06_nested_objects_and_arrays.js
 * 
 * Key Concepts:
 * 1. Objects within Objects (Modeling complex real-world entities)
 * 2. Arrays within Objects & Arrays of Objects
 * 3. Safe deep property access: Optional Chaining (?.)
 * 4. Iterating nested structures
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. NESTED OBJECT STRUCTURES");
console.log("==================================================");

const userAccount = {
    username: "abinanthan",
    isActive: true,
    hobbies: ["Coding", "Chess", "Reading"],
    profile: {
        title: "Fullstack Engineer",
        experienceYears: 4,
        address: {
            street: "123 Tech Avenue",
            city: "San Francisco",
            country: "USA",
            coordinates: { lat: 37.7749, lng: -122.4194 }
        }
    }
};

console.log("Direct deep access:", userAccount.profile.address.city);
console.log("Second hobby      :", userAccount.hobbies[1]);
console.log("Latitude          :", userAccount.profile.address.coordinates.lat);


console.log("\n==================================================");
console.log("▶ 2. SAFE ACCESS WITH OPTIONAL CHAINING (?.)");
console.log("==================================================");

// Without optional chaining, accessing a missing nested property throws:
// TypeError: Cannot read properties of undefined
const guestUser = { username: "anonymous" };

// Safe navigation with ?. (returns undefined instead of crashing!)
const emergencyContactCity = guestUser.profile?.address?.city;
console.log("Safe access on missing property:", emergencyContactCity); // undefined


console.log("\n==================================================");
console.log("▶ 3. ARRAY OF OBJECTS (TRANSFORM & QUERY)");
console.log("==================================================");

const inventory = [
    { id: "p1", name: "Apple", category: "Fruit", calories: 52, price: 0.8 },
    { id: "p2", name: "Broccoli", category: "Vegetable", calories: 34, price: 1.2 },
    { id: "p3", name: "Banana", category: "Fruit", calories: 89, price: 0.5 },
    { id: "p4", name: "Carrot", category: "Vegetable", calories: 41, price: 0.7 }
];

console.log("--- 1. Extracting item names (map) ---");
const itemNames = inventory.map(item => item.name);
console.log(itemNames);

console.log("\n--- 2. Filtering only Fruits (filter) ---");
const fruitsOnly = inventory.filter(item => item.category === "Fruit");
console.log(fruitsOnly);

console.log("\n--- 3. Finding highest calorie item (reduce) ---");
const highestCalorieItem = inventory.reduce((maxItem, current) => {
    return current.calories > maxItem.calories ? current : maxItem;
});
console.log("Highest calorie:", highestCalorieItem.name, `(${highestCalorieItem.calories} cal)`);

console.log("\n✔ Nested Objects & Arrays demonstration completed successfully.");
