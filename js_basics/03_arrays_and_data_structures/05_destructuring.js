/**
 * ============================================================================
 * 05 - DESTRUCTURING ASSIGNMENT (ARRAYS & OBJECTS)
 * ============================================================================
 * Run in terminal: node js_basics/03_arrays_and_data_structures/05_destructuring.js
 * 
 * Key Concepts:
 * 1. Array Destructuring [] (swapping variables, skipping indices, rest syntax)
 * 2. Object Destructuring {} (property matching, default values, renaming/aliasing)
 * 3. Nested Object Destructuring
 * 4. Destructuring directly in Function Parameters
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. ARRAY DESTRUCTURING & VARIABLE SWAPPING");
console.log("==================================================");

// Swapping variables without a temporary third variable!
let first = "Water";
let second = "Fire";
console.log(`Before swap: first = ${first}, second = ${second}`);

[first, second] = [second, first];
console.log(`After swap : first = ${first}, second = ${second}`);

// Unpacking colors with rest:
const rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
const [primaryColor1, primaryColor2, ...remainingColors] = rainbow;
console.log("primaryColor1   :", primaryColor1);
console.log("primaryColor2   :", primaryColor2);
console.log("remainingColors :", remainingColors);

// Skipping elements with commas:
const [, , thirdColor] = rainbow;
console.log("Third color (skipping first two):", thirdColor);


console.log("\n==================================================");
console.log("▶ 2. OBJECT DESTRUCTURING, ALIASES & DEFAULTS");
console.log("==================================================");

const user = {
    id: 1001,
    firstName: "Abinanthan",
    lastName: "S",
    role: "Admin"
    // age is intentionally omitted to show default value
};

// Renaming 'firstName' to 'fName' and providing default 'age = 21'
const { firstName: fName, role, age = 21, department = "Engineering" } = user;

console.log("fName      :", fName);
console.log("role       :", role);
console.log("age        :", age, "(from default)");
console.log("department :", department, "(from default)");


console.log("\n==================================================");
console.log("▶ 3. NESTED DESTRUCTURING");
console.log("==================================================");

const serverConfig = {
    environment: "production",
    database: {
        host: "db.internal.net",
        port: 5432,
        credentials: {
            user: "pg_admin"
        }
    }
};

const {
    environment,
    database: { host, port, credentials: { user: dbUser } }
} = serverConfig;

console.log(`Environment: ${environment}`);
console.log(`Connected to: ${host}:${port} as user '${dbUser}'`);


console.log("\n==================================================");
console.log("▶ 4. DESTRUCTURING IN FUNCTION PARAMETERS");
console.log("==================================================");

// Cleaner than `function printBadge(employee) { ... employee.name ... }`
function printEmployeeBadge({ name, title = "Contributor", badgeId = "N/A" }) {
    console.log(`[BADGE] #${badgeId} | ${name.toUpperCase()} - ${title}`);
}

printEmployeeBadge({
    name: "Sandy Cheeks",
    title: "Lead Scientist",
    badgeId: 8841
});

printEmployeeBadge({
    name: "Patrick Star" // title and badgeId fallback to defaults
});

console.log("\n✔ Destructuring Assignment demonstration completed successfully.");
