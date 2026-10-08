/**
 * ============================================================================
 * 04 - CLASS INHERITANCE & THE 'super' KEYWORD
 * ============================================================================
 * Run in terminal: node js_basics/04_objects_and_oop/04_inheritance_and_super.js
 * 
 * Key Concepts:
 * 1. Inheritance with 'extends' (subclassing parent classes)
 * 2. The 'super' keyword:
 *    - super(...args): Calls the parent constructor (mandatory before using 'this')
 *    - super.method(): Calls a method defined on the parent class
 * 3. Method Overriding & Polymorphism
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. BASE CLASS & EXTENDING SUBCLASSES");
console.log("==================================================");

// Parent / Super Class
class Vehicle {
    constructor(make, model, topSpeed) {
        this.make = make;
        this.model = model;
        this.topSpeed = topSpeed;
    }

    accelerate() {
        console.log(`[Vehicle] The ${this.make} ${this.model} is accelerating.`);
    }

    getInfo() {
        return `${this.make} ${this.model} (Top Speed: ${this.topSpeed} km/h)`;
    }
}

// Subclass 1: Car
class Car extends Vehicle {
    constructor(make, model, topSpeed, numberOfDoors = 4) {
        // Must call super() to initialize parent properties!
        super(make, model, topSpeed);
        this.numberOfDoors = numberOfDoors;
    }

    honk() {
        console.log(`[Car] Beep beep! Doors: ${this.numberOfDoors}`);
    }

    // Overriding the accelerate method while still calling the parent logic:
    accelerate() {
        super.accelerate(); // Call parent logic
        console.log(`[Car Boost] Driving smoothly on 4 wheels.`);
    }
}

// Subclass 2: Motorcycle
class Motorcycle extends Vehicle {
    constructor(make, model, topSpeed, hasSidecar = false) {
        super(make, model, topSpeed);
        this.hasSidecar = hasSidecar;
    }

    wheelie() {
        console.log(`[Motorcycle] Performing a wheelie on 2 wheels!`);
    }
}

const myCar = new Car("Audi", "RS6", 305, 5);
const myBike = new Motorcycle("Yamaha", "R1", 299, false);

console.log(myCar.getInfo());
myCar.accelerate();
myCar.honk();

console.log("\n" + myBike.getInfo());
myBike.accelerate();
myBike.wheelie();

console.log("\ninstanceof checks:");
console.log("myCar instanceof Car    :", myCar instanceof Car);
console.log("myCar instanceof Vehicle:", myCar instanceof Vehicle);

console.log("\n✔ Inheritance & Super demonstration completed successfully.");
