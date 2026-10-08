/**
 * DOM Selectors Playground
 * Demonstrates element querying and style changes
 */

const logBox = document.getElementById("output-log");

function log(message) {
    const time = new Date().toLocaleTimeString();
    logBox.textContent = `[${time}] ${message}\n` + logBox.textContent;
}

// 1. getElementById
document.getElementById("btn-id").addEventListener("click", () => {
    const heading = document.getElementById("msg");
    heading.style.backgroundColor = "#2563eb";
    heading.style.color = "#ffffff";
    heading.textContent = "Selected via getElementById('msg')!";
    log("document.getElementById('msg') -> Selected single element.");
});

// 2. getElementsByClassName
document.getElementById("btn-class").addEventListener("click", () => {
    // Returns live HTMLCollection
    const fruitElements = document.getElementsByClassName("fruits");
    
    // HTMLCollection does NOT have forEach by default! Convert to Array:
    Array.from(fruitElements).forEach((fruit, index) => {
        fruit.style.backgroundColor = "#dc2626";
        fruit.style.color = "#ffffff";
    });
    log(`getElementsByClassName('fruits') -> Styled ${fruitElements.length} elements (Converted HTMLCollection via Array.from).`);
});

// 3. getElementsByTagName
document.getElementById("btn-tag").addEventListener("click", () => {
    const listItems = document.getElementsByTagName("li");
    Array.from(listItems).forEach((li, idx) => {
        li.style.backgroundColor = "#059669";
        li.style.color = "#ffffff";
    });
    log(`getElementsByTagName('li') -> Highlighted ${listItems.length} <li> elements.`);
});

// 4. querySelector (Returns first match)
document.getElementById("btn-query").addEventListener("click", () => {
    const firstLegume = document.querySelector("#legume-list li");
    if (firstLegume) {
        firstLegume.style.backgroundColor = "#d97706";
        firstLegume.style.color = "#ffffff";
        log(`querySelector('#legume-list li') -> Found first matching item: "${firstLegume.textContent}"`);
    }
});

// 5. querySelectorAll (Returns NodeList)
document.getElementById("btn-query-all").addEventListener("click", () => {
    // NodeList supports built-in .forEach() directly!
    const allFruitBadges = document.querySelectorAll(".fruit-badge");
    allFruitBadges.forEach(badge => {
        badge.style.backgroundColor = "#7c3aed";
        badge.style.color = "#ffffff";
    });
    log(`querySelectorAll('.fruit-badge') -> Styled ${allFruitBadges.length} items using native NodeList.forEach().`);
});

// 6. Reset
document.getElementById("btn-reset").addEventListener("click", () => {
    const msg = document.getElementById("msg");
    msg.style.backgroundColor = "#334155";
    msg.style.color = "";
    msg.textContent = "Welcome to the DOM Playground!";

    document.querySelectorAll(".fruit-badge, li").forEach(el => {
        el.style.backgroundColor = "";
        el.style.color = "";
    });
    log("Reset all styles to initial state.");
});
