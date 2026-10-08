/**
 * ============================================================================
 * 01 - OBJECT LITERALS & THE 'this' CONTEXT
 * ============================================================================
 * Run in terminal: node js_basics/04_objects_and_oop/01_object_literals.js
 * 
 * Key Concepts:
 * 1. Object creation with key-value pairs
 * 2. Dot notation vs Bracket notation (dynamic keys)
 * 3. Adding, modifying, and deleting properties
 * 4. Methods within objects & the 'this' keyword
 * 5. Danger of arrow functions as object methods
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. CREATING OBJECTS & ACCESSING PROPERTIES");
console.log("==================================================");

const hero = {
    alias: "Spider-Man",
    realName: "Peter Parker",
    age: 21,
    isAvenger: true,
    powers: ["Wall crawling", "Spider-sense", "Super strength"],
    
    // Traditional method: 'this' correctly points to 'hero'
    introduce() {
        return `I am ${this.alias} (aka ${this.realName}), age ${this.age}.`;
    },

    // ⚠️ Arrow function inside object: 'this' does NOT point to hero!
    badIntroduce: () => {
        return `Arrow this.alias: ${this ? this.alias : undefined}`;
    }
};

console.log("Dot notation    :", hero.alias);
console.log("Bracket notation:", hero["realName"]);

// Dynamic key access:
const propertyToRead = "isAvenger";
console.log(`Dynamic key [${propertyToRead}]:`, hero[propertyToRead]);

// Calling object method:
console.log(hero.introduce());
console.log(hero.badIntroduce(), "(Arrow methods don't bind 'this' to the object!)");


console.log("\n==================================================");
console.log("▶ 2. MODIFYING OBJECTS (ADD, UPDATE, DELETE)");
console.log("==================================================");

// Adding a new property
hero.city = "New York City";

// Updating an existing property
hero.age = 22;

// Checking existence with 'in' operator:
console.log("'city' in hero     :", "city" in hero);
console.log("'nemesis' in hero  :", "nemesis" in hero);

// Deleting a property
delete hero.isAvenger;
console.log("After deleting isAvenger:", hero);


console.log("\n==================================================");
console.log("▶ 3. OBJECT UTILITY METHODS (keys, values, entries)");
console.log("==================================================");

const stats = { speed: 85, stamina: 90, intelligence: 95 };

console.log("Object.keys()   :", Object.keys(stats));
console.log("Object.values() :", Object.values(stats));
console.log("Object.entries():", Object.entries(stats));

console.log("\n✔ Object Literals demonstration completed successfully.");
