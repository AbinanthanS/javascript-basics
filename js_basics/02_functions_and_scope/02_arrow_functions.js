/**
 * ============================================================================
 * 02 - ARROW FUNCTIONS & THE 'this' CONTEXT
 * ============================================================================
 * Run in terminal: node js_basics/02_functions_and_scope/02_arrow_functions.js
 * 
 * Key Concepts:
 * 1. Arrow Function Syntax (concise body, implicit returns)
 * 2. Parameter parentheses rules (0, 1, or multiple parameters)
 * 3. Crucial difference with the 'this' keyword:
 *    - Traditional functions have dynamic 'this' (bound at call time)
 *    - Arrow functions have lexical 'this' (inherits from parent scope)
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. ARROW SYNTAX VARIATIONS");
console.log("==================================================");

// No parameters: requires empty parentheses ()
const sayHello = () => "Hello, World!";
console.log(sayHello());

// Single parameter: parentheses are optional
const square = x => x * x;
console.log("Square of 9 =", square(9));

// Multiple parameters & implicit return:
const add = (a, b) => a + b;
console.log("Add 15 + 25 =", add(15, 25));

// Multi-line block body: MUST use explicit 'return' statement
const getStudentStatus = (name, marks) => {
    const isPassing = marks >= 50;
    const grade = marks >= 80 ? "Distinction" : isPassing ? "Pass" : "Fail";
    return `${name}: ${grade} (${marks}%)`;
};
console.log(getStudentStatus("Abinanthan", 92));

// Returning an object literal implicitly: Wrap in parentheses ({ ... })
const makePoint = (x, y) => ({ x, y, timestamp: Date.now() });
console.log("Point object:", makePoint(10, 20));


console.log("\n==================================================");
console.log("▶ 2. LEXICAL 'this' IN ARROW FUNCTIONS");
console.log("==================================================");

const company = {
    name: "Tech Corp",
    employees: ["Alice", "Bob", "Charlie"],

    // Traditional method has 'this' referring to company
    listEmployeesTraditional() {
        console.log(`Company: ${this.name}`);
        
        // Arrow function preserves 'this' from surrounding listEmployeesTraditional()
        this.employees.forEach(employee => {
            console.log(` - ${employee} works at ${this.name}`);
        });
    }
};

company.listEmployeesTraditional();

console.log("\n✔ Arrow Functions demonstration completed successfully.");
