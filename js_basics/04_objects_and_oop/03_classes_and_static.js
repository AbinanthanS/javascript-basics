/**
 * ============================================================================
 * 03 - ES6 CLASSES & STATIC PROPERTIES / METHODS
 * ============================================================================
 * Run in terminal: node js_basics/04_objects_and_oop/03_classes_and_static.js
 * 
 * Key Concepts:
 * 1. ES6 class syntax (syntactic sugar over JavaScript's prototype system)
 * 2. The constructor() method
 * 3. Instance methods vs Static methods
 * 4. Static properties (shared state belonging to the Class itself, not instances)
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. ES6 CLASS SYNTAX");
console.log("==================================================");

class Product {
    constructor(name, price, stock = 10) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    displayProduct() {
        console.log(`Product: ${this.name.padEnd(10)} | Price: $${this.price.toFixed(2)} | Stock: ${this.stock}`);
    }

    calculateTotalWithTax(taxRate = 0.08) {
        return this.price + (this.price * taxRate);
    }
}

const shirt = new Product("Silk Shirt", 49.99, 15);
const pants = new Product("Denim Jeans", 79.50, 8);

shirt.displayProduct();
pants.displayProduct();

console.log(`Pants with 8% tax: $${pants.calculateTotalWithTax().toFixed(2)}`);


console.log("\n==================================================");
console.log("▶ 2. STATIC PROPERTIES & METHODS");
console.log("==================================================");

// Example 1: Static utility helper class (No instantiation needed!)
class MathUtil {
    static PI = 3.1415926535;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

console.log("MathUtil.PI                :", MathUtil.PI);
console.log("Circumference (radius = 5) :", MathUtil.getCircumference(5).toFixed(2));
console.log("Circle Area   (radius = 5) :", MathUtil.getArea(5).toFixed(2));

// Example 2: Static Tracker across all instances
class User {
    static totalUserCount = 0;

    constructor(username, email) {
        this.username = username;
        this.email = email;
        User.totalUserCount++; // Increments the static class tracker
    }

    static getUserCount() {
        return `Current active users in system: ${User.totalUserCount}`;
    }

    sayHello() {
        console.log(`Hello, my username is @${this.username}`);
    }
}

const u1 = new User("abinanthan", "abi@test.com");
const u2 = new User("spongebob", "bob@krusty.com");
const u3 = new User("patrick", "pat@rock.com");

u1.sayHello();
console.log(User.getUserCount()); // Called on the class, NOT on u1

console.log("\n✔ ES6 Classes & Static demonstration completed successfully.");
