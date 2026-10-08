/**
 * ============================================================================
 * 05 - GETTERS & SETTERS IN JAVASCRIPT
 * ============================================================================
 * Run in terminal: node js_basics/04_objects_and_oop/05_getters_and_setters.js
 * 
 * Key Concepts:
 * 1. Why use getters & setters?
 *    - Encapsulation: protect internal representation (_backingField)
 *    - Data Validation: prevent corrupt or invalid inputs
 *    - Computed Properties: access calculations as if they were plain attributes
 * 2. get propertyName() { ... }
 * 3. set propertyName(value) { ... }
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. COMPUTED PROPERTIES & VALIDATION (Circle Example)");
console.log("==================================================");

class Circle {
    constructor(radius) {
        // Invokes setter for initial validation
        this.radius = radius;
    }

    // Setter validates that radius is strictly positive
    set radius(newRadius) {
        if (typeof newRadius === "number" && newRadius > 0) {
            this._radius = newRadius;
        } else {
            console.error(`[Validation Error] Radius must be a positive number. Got: ${newRadius}`);
        }
    }

    // Getter exposes formatted or raw value
    get radius() {
        return this._radius;
    }

    // Computed getter: calculated on the fly without storing duplicate state!
    get circumference() {
        return (2 * Math.PI * this._radius).toFixed(2);
    }

    get area() {
        return (Math.PI * Math.pow(this._radius, 2)).toFixed(2);
    }
}

const c1 = new Circle(5);
console.log(`Circle Radius        : ${c1.radius} cm`);
console.log(`Circle Circumference : ${c1.circumference} cm`);
console.log(`Circle Area          : ${c1.area} cm²`);

// Updating radius:
c1.radius = 10;
console.log(`Updated Radius       : ${c1.radius} cm`);
console.log(`Updated Area         : ${c1.area} cm²`);

// Attempting invalid update:
c1.radius = -5; // Triggers validation error, keeps previous valid radius
console.log(`Radius after invalid : ${c1.radius} cm`);


console.log("\n==================================================");
console.log("▶ 2. STRING SANITIZATION & FULL NAME GETTER");
console.log("==================================================");

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(val) {
        if (typeof val === "string" && val.trim().length > 0) {
            this._firstName = val.trim();
        } else {
            console.error("First name must be a non-empty string!");
        }
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(val) {
        if (typeof val === "string" && val.trim().length > 0) {
            this._lastName = val.trim();
        } else {
            console.error("Last name must be a non-empty string!");
        }
    }

    get lastName() {
        return this._lastName;
    }

    // Computed property combining names
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}

const person = new Person("  Abinanthan  ", "S  ", 21);
console.log("Cleaned First Name:", person.firstName);
console.log("Computed Full Name :", person.fullName);

console.log("\n✔ Getters & Setters demonstration completed successfully.");
