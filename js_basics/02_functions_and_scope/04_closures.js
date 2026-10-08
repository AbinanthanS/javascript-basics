/**
 * ============================================================================
 * 04 - CLOSURES & PRIVATE STATE IN JAVASCRIPT
 * ============================================================================
 * Run in terminal: node js_basics/02_functions_and_scope/04_closures.js
 * 
 * Key Concepts:
 * 1. What is a Closure? A function that retains access to its outer lexical scope
 *    even after the outer function has finished executing!
 * 2. Emulating Private Variables (Encapsulation without classes)
 * 3. State Preservation (Counters, score trackers, bank accounts)
 * 4. Factory Functions returning closure interfaces
 * ============================================================================
 */

console.log("==================================================");
console.log("▶ 1. BASIC CLOSURE EXPLANATION");
console.log("==================================================");

function createGreeter(greetingWord) {
    // greetingWord is trapped in the lexical environment of createGreeter
    return function(recipientName) {
        return `${greetingWord}, ${recipientName}!`;
    };
}

const sayHi = createGreeter("Hi");
const sayFormal = createGreeter("Good morning");

console.log(sayHi("Alice"));
console.log(sayFormal("Dr. Banner"));


console.log("\n==================================================");
console.log("▶ 2. PRIVATE COUNTER (ENCAPSULATION)");
console.log("==================================================");

function createCounter(initialValue = 0) {
    // 'count' is completely private! Cannot be accessed or modified from the outside.
    let count = initialValue;

    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        reset() {
            count = initialValue;
            return count;
        },
        getCount() {
            return count;
        }
    };
}

const counterA = createCounter(10);
const counterB = createCounter(0);

console.log("Counter A increment:", counterA.increment()); // 11
console.log("Counter A increment:", counterA.increment()); // 12
console.log("Counter B increment:", counterB.increment()); // 1
console.log("Counter A current  :", counterA.getCount());  // 12 (Counter B has separate closure!)
console.log("Counter B current  :", counterB.getCount());  // 1
console.log("Direct access attempt (counterA.count):", counterA.count); // undefined (Private!)


console.log("\n==================================================");
console.log("▶ 3. GAME SCORE TRACKER WITH CLOSURES");
console.log("==================================================");

function createScoreTracker(playerName) {
    let score = 0;
    const history = [];

    return {
        addPoints(points) {
            score += points;
            history.push(`+${points} pts`);
            console.log(`[${playerName}] Scored +${points} -> Total: ${score}`);
        },
        deductPoints(points) {
            score = Math.max(0, score - points);
            history.push(`-${points} pts`);
            console.log(`[${playerName}] Deducted -${points} -> Total: ${score}`);
        },
        getReport() {
            return {
                player: playerName,
                currentScore: score,
                history: [...history] // return copy to prevent external mutation
            };
        }
    };
}

const player1 = createScoreTracker("Abinanthan");
player1.addPoints(50);
player1.addPoints(25);
player1.deductPoints(10);

console.log("Final Report:", player1.getReport());

console.log("\n✔ Closures demonstration completed successfully.");
