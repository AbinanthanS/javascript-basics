/**
 * ============================================================================
 * 02 - CONSTRUCTOR FUNCTIONS & PROTOTYPES
 * ============================================================================
 * Run in terminal: node js_basics/04_objects_and_oop/02_constructor_functions.js
 * 
 * Key Concepts:
 * 1. Constructor function syntax (Capitalized convention)
 * 2. The 'new' keyword: What it actually does under the hood
 * 3. Adding shared methods via prototype (memory optimization)
 * 4. Instance verification using instanceof
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. CONSTRUCTOR FUNCTION PATTERN");
console.log("==================================================");

function Car(make, model, year, color) {
    // 'this' is bound to the new object created by 'new'
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = 0;
}

// Attaching methods to the prototype so all instances share the exact same function reference!
Car.prototype.drive = function(distanceKm) {
    this.mileage += distanceKm;
    console.log(`Driving the ${this.year} ${this.make} ${this.model} for ${distanceKm} km. (Total: ${this.mileage} km)`);
};

Car.prototype.getDetails = function() {
    return `${this.year} ${this.make} ${this.model} [${this.color}]`;
};

// Instantiating with 'new':
const car1 = new Car("Audi", "Q3", 2024, "Black");
const car2 = new Car("Tesla", "Model 3", 2023, "Pearl White");

console.log("Car 1:", car1.getDetails());
console.log("Car 2:", car2.getDetails());

car1.drive(120);
car1.drive(80);
car2.drive(45);

console.log("car1 instanceof Car:", car1 instanceof Car);
console.log("Shared prototype method check:", car1.drive === car2.drive, "(True saves memory!)");

console.log("\n✔ Constructor Functions demonstration completed successfully.");
